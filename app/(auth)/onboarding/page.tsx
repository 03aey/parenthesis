"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
	Compass,
	User,
	Heart,
	ArrowRight,
	ArrowLeft,
	Check,
	Loader2,
	Sparkles,
	Globe,
} from "lucide-react";
import { toast } from "sonner";
import {
	completeOnboarding,
	getMissingOnboardingFields,
	skipOnboarding,
} from "@/actions/onboarding";
import { OnboardingField } from "@/lib/type";
import Link from "next/link";

interface OnboardingData {
	missingFields: OnboardingField[];
	allFields: OnboardingField[];
	currentData: any;
}

const categoryIcons = {
	personal: User,
	travel: Globe,
	preferences: Heart,
};

const categoryTitles = {
	personal: "Personal Information",
	travel: "Travel Preferences",
	preferences: "Your Interests",
};

const categoryDescriptions = {
	personal: "Let's get to know you better",
	travel: "Help us understand your travel style",
	preferences: "What makes your perfect trip?",
};

export default function OnboardingPage() {
	const [onboardingData, setOnboardingData] = useState<OnboardingData | null>(
		null
	);
	const [formData, setFormData] = useState<Record<string, any>>({});
	const [currentStep, setCurrentStep] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSkipping, setIsSkipping] = useState(false);
	const router = useRouter();

	const fieldsByCategory =
		onboardingData?.missingFields.reduce((acc, field) => {
			if (!acc[field.category]) {
				acc[field.category] = [];
			}
			acc[field.category].push(field);
			return acc;
		}, {} as Record<string, OnboardingField[]>) || {};

	const categories = Object.keys(fieldsByCategory);
	const totalSteps = categories.length;
	const progress =
		totalSteps > 0 ? ((currentStep + 1) / totalSteps) * 100 : 100;

	useEffect(() => {
		loadOnboardingData();
	}, []);

	const loadOnboardingData = async () => {
		try {
			const data = await getMissingOnboardingFields();
			setOnboardingData(data);

			const initialData: Record<string, any> = {};
			data.missingFields.forEach((field) => {
				const currentValue =
					data.currentData[
						field.key as keyof typeof data.currentData
					];
				if (currentValue !== null && currentValue !== undefined) {
					initialData[field.key] = currentValue;
				} else if (field.type === "multiselect") {
					initialData[field.key] = [];
				} else {
					initialData[field.key] = "";
				}
			});
			setFormData(initialData);

			if (data.missingFields.length === 0) {
				toast.success("Your profile is already complete!");
				return;
			}
		} catch (error) {
			toast.error("Failed to load onboarding data");
			router.push("/profile");
			router.refresh();
		} finally {
			setIsLoading(false);
		}
	};

	const handleInputChange = (key: string, value: any) => {
		setFormData((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const handleMultiSelectChange = (
		key: string,
		option: string,
		checked: boolean
	) => {
		setFormData((prev) => {
			const currentValues = prev[key] || [];
			if (checked) {
				return {
					...prev,
					[key]: [...currentValues, option],
				};
			} else {
				return {
					...prev,
					[key]: currentValues.filter(
						(item: string) => item !== option
					),
				};
			}
		});
	};

	const validateCurrentStep = () => {
		const currentCategory = categories[currentStep];
		const currentFields = fieldsByCategory[currentCategory] || [];

		for (const field of currentFields) {
			if (field.required) {
				const value = formData[field.key];
				if (field.type === "multiselect") {
					if (!value || value.length === 0) {
						toast.error(
							`Please select at least one option for ${field.label}`
						);
						return false;
					}
				} else {
					if (!value || value.trim() === "") {
						toast.error(`Please fill in ${field.label}`);
						return false;
					}
				}
			}
		}
		return true;
	};

	const nextStep = () => {
		if (validateCurrentStep()) {
			setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
		}
	};

	const prevStep = () => {
		setCurrentStep((prev) => Math.max(prev - 1, 0));
	};

	const handleSubmit = async () => {
		if (!validateCurrentStep()) return;

		setIsSubmitting(true);
		try {
			await completeOnboarding(formData);
			toast.success("Your profile is now complete.");
			router.push("/profile");
			router.refresh();
		} catch (error) {
			toast.error("Failed to complete onboarding.");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleSkip = async () => {
		setIsSkipping(true);
		try {
			await skipOnboarding();
			toast.success("You can complete your profile later from settings.");
		} catch (error) {
			toast.error("Failed to skip onboarding.");
		} finally {
			setIsSkipping(false);
		}
	};

	const renderField = (field: OnboardingField) => {
		const value = formData[field.key];

		switch (field.type) {
			case "text":
			case "phone":
				return (
					<div key={field.key} className="space-y-2">
						<Label
							htmlFor={field.key}
							className="text-sm font-medium text-gray-700"
						>
							{field.label}
							{field.required && (
								<span className="text-red-500 ml-1">*</span>
							)}
						</Label>
						<Input
							id={field.key}
							type={field.type === "phone" ? "tel" : "text"}
							placeholder={field.placeholder}
							value={value || ""}
							onChange={(e) =>
								handleInputChange(field.key, e.target.value)
							}
							className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
						/>
						{field.description && (
							<p className="text-xs text-gray-500">
								{field.description}
							</p>
						)}
					</div>
				);

			case "textarea":
				return (
					<div key={field.key} className="space-y-2">
						<Label
							htmlFor={field.key}
							className="text-sm font-medium text-gray-700"
						>
							{field.label}
							{field.required && (
								<span className="text-red-500 ml-1">*</span>
							)}
						</Label>
						<Textarea
							id={field.key}
							placeholder={field.placeholder}
							value={value || ""}
							onChange={(e) =>
								handleInputChange(field.key, e.target.value)
							}
							rows={4}
							className="border-gray-200 focus:border-blue-500 focus:ring-blue-500"
						/>
						{field.description && (
							<p className="text-xs text-gray-500">
								{field.description}
							</p>
						)}
					</div>
				);

			case "select":
				return (
					<div key={field.key} className="space-y-2">
						<Label
							htmlFor={field.key}
							className="text-sm font-medium text-gray-700"
						>
							{field.label}
							{field.required && (
								<span className="text-red-500 ml-1">*</span>
							)}
						</Label>
						<Select
							value={value || ""}
							onValueChange={(val) =>
								handleInputChange(field.key, val)
							}
						>
							<SelectTrigger className="h-12 border-gray-200">
								<SelectValue
									placeholder={`Select ${field.label.toLowerCase()}`}
								/>
							</SelectTrigger>
							<SelectContent className="bg-white">
								{field.options?.map((option) => (
									<SelectItem key={option} value={option}>
										{option}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						{field.description && (
							<p className="text-xs text-gray-500">
								{field.description}
							</p>
						)}
					</div>
				);

			case "multiselect":
				return (
					<div key={field.key} className="space-y-3">
						<Label className="text-sm font-medium text-gray-700">
							{field.label}
							{field.required && (
								<span className="text-red-500 ml-1">*</span>
							)}
						</Label>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
							{field.options?.map((option) => (
								<div
									key={option}
									className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
								>
									<Checkbox
										id={`${field.key}-${option}`}
										checked={(value || []).includes(option)}
										onCheckedChange={(checked) =>
											handleMultiSelectChange(
												field.key,
												option,
												checked as boolean
											)
										}
									/>
									<Label
										htmlFor={`${field.key}-${option}`}
										className="text-sm cursor-pointer flex-1"
									>
										{option}
									</Label>
								</div>
							))}
						</div>
						{field.description && (
							<p className="text-xs text-gray-500">
								{field.description}
							</p>
						)}
						{value && value.length > 0 && (
							<div className="flex flex-wrap gap-2 mt-2">
								{value.map((item: string) => (
									<Badge
										key={item}
										variant="secondary"
										className="text-xs text-white"
									>
										{item}
									</Badge>
								))}
							</div>
						)}
					</div>
				);

			default:
				return null;
		}
	};

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
				<div className="text-center">
					<div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
						<Compass className="h-8 w-8 text-white animate-spin" />
					</div>
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						Preparing Your Journey
					</h2>
					<p className="text-gray-600">
						Setting up your personalized experience...
					</p>
				</div>
			</div>
		);
	}

	if (!onboardingData || totalSteps === 0) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
				<div className="text-center">
					<div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
						<Check className="h-8 w-8 text-green-600" />
					</div>
					<h2 className="text-xl font-semibold text-gray-900 mb-2">
						You're All Set!
					</h2>
					<p className="text-gray-600 mb-6">
						Your profile is already complete.
					</p>
					<Link
						href="/profile"
						className="bg-gradient-to-r rounded-md from-blue-600 to-purple-600 text-white px-4 py-2 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 transition-colors border-none"
					>
						Go to Profile
					</Link>
				</div>
			</div>
		);
	}

	const currentCategory = categories[currentStep];
	const currentFields = fieldsByCategory[currentCategory] || [];
	const CategoryIcon =
		categoryIcons[currentCategory as keyof typeof categoryIcons];

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float" />
				<div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float animation-delay-1000" />
				<div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-200 rounded-full opacity-20 animate-float animation-delay-2000" />
			</div>

			<div className="relative py-12 px-4">
				<div className="max-w-2xl mx-auto">
					<div className="text-center mb-6">
						<div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
							<Sparkles className="h-8 w-8 text-white" />
						</div>
						<h1 className="text-3xl font-bold text-gray-900 mb-2">
							Complete Your Profile
						</h1>
						<p className="text-gray-600">
							Help us personalize your travel experience
						</p>
					</div>

					<div className="mb-8">
						<div className="flex justify-between text-sm text-gray-600 mb-2">
							<span>
								Step {currentStep + 1} of {totalSteps}
							</span>
							<span>{Math.round(progress)}% Complete</span>
						</div>
						<Progress value={progress} className="h-2" />
					</div>

					<div className="">
						<CardHeader className="text-center pb-6">
							<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
								<CategoryIcon className="h-6 w-6 text-blue-600" />
							</div>
							<CardTitle className="text-2xl font-bold text-gray-900">
								{
									categoryTitles[
										currentCategory as keyof typeof categoryTitles
									]
								}
							</CardTitle>
							<p className="text-gray-600">
								{
									categoryDescriptions[
										currentCategory as keyof typeof categoryDescriptions
									]
								}
							</p>
						</CardHeader>

						<CardContent className="space-y-6">
							{currentFields.map(renderField)}

							<div className="flex justify-between pt-8 border-t border-gray-100">
								<div className="flex space-x-3">
									<Button
										variant="outline"
										onClick={prevStep}
										disabled={currentStep === 0}
										className="bg-secondary text-background border-none duration-300 hover:bg-secondary/80 hover:text-background capitalize"
									>
										<ArrowLeft className="h-4 w-4 mr-2" />
										Previous
									</Button>
									<Button
										variant="ghost"
										onClick={handleSkip}
										disabled={isSkipping}
										className="text-gray-500 duration-300 hover:text-gray-700 capitalize"
									>
										{isSkipping ? (
											<>
												<Loader2 className="h-4 w-4 mr-2 animate-spin" />
												Skipping...
											</>
										) : (
											"Skip for now"
										)}
									</Button>
								</div>

								{currentStep < totalSteps - 1 ? (
									<Button
										onClick={nextStep}
										className="bg-gradient-to-r border-none duration-300 from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
									>
										Next
										<ArrowRight className="h-4 w-4 ml-2" />
									</Button>
								) : (
									<Button
										onClick={handleSubmit}
										disabled={isSubmitting}
										className="bg-gradient-to-r border-none duration-300 from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
									>
										{isSubmitting ? (
											<>
												<Loader2 className="h-4 w-4 mr-2 animate-spin" />
												Completing...
											</>
										) : (
											<>
												Complete Profile
												<Check className="h-4 w-4 ml-2" />
											</>
										)}
									</Button>
								)}
							</div>
						</CardContent>
					</div>

					<div className="flex justify-center mt-8 space-x-2">
						{categories.map((category, index) => {
							const CategoryIcon =
								categoryIcons[
									category as keyof typeof categoryIcons
								];
							return (
								<div
									key={category}
									className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
										index === currentStep
											? "bg-secondary text-white shadow-lg scale-110"
											: index < currentStep
											? "bg-green-500 text-secondary"
											: "bg-gray-200 text-gray-400"
									}`}
								>
									<CategoryIcon className="h-5 w-5" />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
