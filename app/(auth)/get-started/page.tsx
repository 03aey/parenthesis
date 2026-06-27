"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
	Mail,
	Lock,
	Eye,
	EyeOff,
	AlertCircle,
	Loader2,
	User,
	Github,
} from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { registerUser } from "@/actions/auth";
import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";

export default function SignUpPage() {
	const [providers, setProviders] = useState<Record<string, any> | null>(
		null,
	);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isGithubLoading, setIsGithubLoading] = useState(false);
	const [error, setError] = useState("");

	const router = useRouter();
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/";

	useEffect(() => {
		async function loadProviders() {
			const providers = await getProviders();
			setProviders(providers);
		}

		loadProviders();
	}, []);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
		setError("");
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		if (formData.password.length < 8) {
			setError("Password must be at least 8 characters long");
			setIsLoading(false);
			return;
		}

		try {
			const result = await registerUser(
				formData.email,
				formData.name,
				formData.password,
			);

			if (result.success === false) {
				setError(
					result.message ??
						"Failed to create account. Please try again.",
				);
			} else {
				toast.success("Account created successfully. Please sign in.");
				router.push(
					`/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`,
				);
			}
		} catch (error) {
			setError("Something went wrong. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleGithubSignIn = async () => {
		setIsGithubLoading(true);
		try {
			await signIn("github", {
				callbackUrl,
			});
		} catch (error) {
			setError("Failed to sign up with Github.");
			setIsGithubLoading(false);
		}
	};

	const isSubmitting = isLoading || isGithubLoading;

	return (
		<div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
			<div className="absolute top-20 right-10 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-float" />
			<div className="absolute top-40 left-20 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-float animation-delay-1000" />
			<div className="absolute bottom-20 right-20 w-14 h-14 bg-pink-300 rounded-full opacity-20 animate-float animation-delay-2000" />

			<div className="relative flex items-center justify-center min-h-screen px-4 py-20">
				<div className="w-full max-w-xl">
					<CardHeader className="text-center">
						<CardTitle className="text-5xl font-avante font-semibold text-gray-900">
							Enter your credentials
						</CardTitle>
						<p className="text-gray-600 text-lg">
							or choose other ways to sign up
						</p>
					</CardHeader>

					<CardContent className="p-6 max-w-md mx-auto">
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="space-y-2">
								<div className="relative">
									<User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
									<Input
										id="name"
										name="name"
										type="text"
										placeholder="Enter your full name"
										value={formData.name}
										onChange={handleInputChange}
										className="pl-11 h-12 rounded-xl"
										required
										disabled={isSubmitting}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<div className="relative">
									<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
									<Input
										id="email"
										name="email"
										type="email"
										placeholder="Enter your email address"
										value={formData.email}
										onChange={handleInputChange}
										className="pl-11 h-12 rounded-xl"
										required
										disabled={isSubmitting}
									/>
								</div>
							</div>

							<div className="space-y-2">
								<div className="relative">
									<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
									<Input
										id="password"
										name="password"
										type={
											showPassword ? "text" : "password"
										}
										placeholder="Create a password"
										value={formData.password}
										onChange={handleInputChange}
										className="pl-11 pr-11 h-12 rounded-xl"
										required
									/>
									<button
										type="button"
										onClick={() =>
											setShowPassword(!showPassword)
										}
										className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
										disabled={isSubmitting}
									>
										{showPassword ? (
											<EyeOff className="h-5 w-5" />
										) : (
											<Eye className="h-5 w-5" />
										)}
									</button>
								</div>
							</div>

							{error && (
								<Alert
									variant="destructive"
									className="border-red-200 bg-red-50"
								>
									<AlertCircle className="h-4 w-4" />
									<AlertDescription>{error}</AlertDescription>
								</Alert>
							)}

							<Button
								type="submit"
								variant="secondary"
								className="w-full border-none capitalize h-12 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
								disabled={isSubmitting}
							>
								{isLoading ? (
									<>
										<Loader2 className="mr-2 h-5 w-5 animate-spin" />
										Creating account...
									</>
								) : (
									"Create Account with Email"
								)}
							</Button>
						</form>

						{providers === null ? (
							<div className="space-y-4 mt-6">
								<div className="relative">
									<div className="absolute inset-0 flex items-center">
										<Separator className="w-full" />
									</div>
									<div className="relative flex justify-center text-xs uppercase">
										<span className="bg-white px-4 text-gray-500 font-medium">
											Or continue with
										</span>
									</div>
								</div>

								<Button
									variant="outline"
									className="w-full h-12 rounded-xl"
									disabled
								>
									<Loader2 className="mr-2 h-5 w-5 animate-spin" />
									Loading providers...
								</Button>
							</div>
						) : (
							<div className="space-y-4 mt-6">
								<div className="relative">
									<div className="absolute inset-0 flex items-center">
										<Separator className="w-full" />
									</div>
									<div className="relative flex justify-center text-xs uppercase">
										<span className="bg-white px-4 text-gray-500 font-medium">
											Or continue with
										</span>
									</div>
								</div>

								<Button
									variant="outline"
									className="w-full h-12 bg-white hover:bg-gray-50 border-gray-200 shadow-sm capitalize rounded-xl"
									onClick={handleGithubSignIn}
									disabled={isGithubLoading || isLoading}
								>
									{isGithubLoading ? (
										<Loader2 className="mr-2 h-5 w-5 animate-spin" />
									) : (
										<Github className="mr-3 h-12 w-12" />
									)}
									{isGithubLoading
										? "Creating account..."
										: "Continue with Github"}
								</Button>
							</div>
						)}

						<div className="text-center pt-8">
							<p className="text-sm leading-3 text-gray-600">
								Already using Parenthesis?
							</p>
							<Link
								href={`/sign-in?callbackUrl=${encodeURIComponent(
									callbackUrl,
								)}`}
								className="text-secondary font-medium hover:underline text-sm"
							>
								Sign in instead
							</Link>
						</div>
					</CardContent>

					<div className="text-center absolute bottom-4">
						<p className="text-xs max-w-xl text-gray-500">
							By creating an account, you're joining thousands of
							travelers who trust Parenthesis to make their travel
							experiences unforgettable.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
