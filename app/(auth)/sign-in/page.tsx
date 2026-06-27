"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
	AlertCircle,
	Eye,
	EyeOff,
	Github,
	Loader2,
	Lock,
	Mail,
} from "lucide-react";
import { getProviders, signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";

export default function SignInPage() {
	const [providers, setProviders] = useState<Record<string, any> | null>(
		null,
	);
	const [formData, setFormData] = useState({
		email: "demo@parenthesis.com",
		password: "demo@4731",
	});
	const [showPassword, setShowPassword] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isGithubLoading, setIsGithubLoading] = useState(false);

	const [error, setError] = useState("");

	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/profile";
	const errorParam = searchParams.get("error");

	useEffect(() => {
		async function loadProviders() {
			const providers = await getProviders();
			setProviders(providers);
		}

		loadProviders();
	}, []);

	useEffect(() => {
		if (errorParam) {
			switch (errorParam) {
				case "CredentialsSignin":
					setError("Invalid email or password. Please try again.");
					break;
				case "OAuthSignin":
				case "OAuthCallback":
				case "OAuthCreateAccount":
				case "Callback":
					setError(
						"There was an error with the OAuth provider. Please try again.",
					);
					break;
				default:
					setError(
						"An error occurred during sign in. Please try again.",
					);
			}
		}
	}, [errorParam]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
		setError("");
	};

	const handleCredentialsSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setError("");

		try {
			await signIn("credentials", {
				email: formData.email,
				password: formData.password,
				redirectTo: callbackUrl,
			});
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
				redirectTo: callbackUrl,
			});
		} catch (error) {
			setError("Failed to sign up with Github.");
			setIsGithubLoading(false);
		}
	};

	const isSubmitting = isLoading || isGithubLoading;

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
			<div className="absolute top-20 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-float" />
			<div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-float animation-delay-1000" />
			<div className="absolute bottom-20 left-20 w-14 h-14 bg-pink-300 rounded-full opacity-20 animate-float animation-delay-2000" />

			<div className="relative flex items-center justify-center min-h-screen px-4 py-20">
				<div className="w-full max-w-xl">
					<div className="absolute top-8 right-6">
						<p className="text-sm leading-3 text-right text-gray-600">
							Akele ho?
						</p>
						<Link
							href={`/get-started?callbackUrl=${encodeURIComponent(
								callbackUrl,
							)}`}
							className="text-secondary font-medium hover:underline text-sm"
						>
							Create an account
						</Link>
					</div>

					<CardHeader className="text-center">
						<CardTitle className="text-5xl font-avante font-semibold text-gray-900">
							Enter your credentials
						</CardTitle>
						<p className="text-gray-600 text-lg">
							or choose other ways to sign in
						</p>
					</CardHeader>

					<CardContent className="p-6 max-w-md mx-auto">
						<form
							onSubmit={handleCredentialsSubmit}
							className="space-y-4"
						>
							<div className="space-y-2">
								<div className="relative">
									<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
									<Input
										id="email"
										type="email"
										name="email"
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
										type={
											showPassword ? "text" : "password"
										}
										name="password"
										placeholder="Enter your password"
										value={formData.password}
										onChange={handleInputChange}
										className="pl-11 pr-11 h-12 rounded-xl"
										required
										disabled={isSubmitting}
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
								className="w-full h-12 text-white shadow-lg hover:shadow-xl transition-all rounded-xl capitalize duration-300 border-none"
								variant="secondary"
								disabled={isSubmitting}
							>
								{isLoading ? (
									<>
										<Loader2 className="mr-2 h-5 w-5 animate-spin" />
										Signing in...
									</>
								) : (
									"Sign In with Email"
								)}
							</Button>
						</form>

						{/* {providers?.github && (
							<div className="space-y-4 mt-6">
								{providers?.github && (
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
								)}
								<Button
									variant="outline"
									className="w-full h-12 bg-white hover:bg-gray-50 border-gray-200 shadow-sm capitalize rounded-xl"
									onClick={handleGithubSignIn}
									disabled={isSubmitting}
								>
									{isGithubLoading ? (
										<Loader2 className="mr-2 h-5 w-5 animate-spin" />
									) : (
										<Github className="mr-3 h-12 w-12" />
									)}
									{isGithubLoading
										? "Signing in..."
										: "Continue with Github"}
								</Button>
							</div>
						)} */}

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
										? "Signing in..."
										: "Continue with Github"}
								</Button>
							</div>
						)}

						{/* <div className="bg-blue-50 relative border border-blue-200 rounded-lg p-4 mt-6">
							<h4 className="text-sm font-medium text-blue-900 mb-2">
								Demo Credentials
							</h4>
							<div className="text-xs text-blue-700 space-y-1">
								<p>
									<strong>Email:</strong> demo@parenthesis.com
								</p>
								<p>
									<strong>Password:</strong> demo@4731
								</p>
							</div>
							<button
								className="text-sm border border-gray-300 rounded-md px-2 py-1 absolute top-2 right-2 cursor-pointer text-gray-600"
								onClick={() => {
									if (formData.email === "") {
										setFormData({
											email: "demo@parenthesis.com",
											password: "demo123",
										});
									} else {
										setFormData({
											email: "",
											password: "",
										});
									}
								}}
							>
								Fill
							</button>
						</div> */}
					</CardContent>

					<div className="text-center absolute left-1/2 -translate-x-1/2 bottom-4">
						<p className="text-xs  text-gray-500">
							By signing in, you agree to our
							<Link
								href="/terms"
								className="text-secondary hover:underline mx-1"
							>
								Terms of Service
							</Link>
							and
							<Link
								href="/privacy"
								className="text-secondary hover:underline mx-1"
							>
								Privacy Policy
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
