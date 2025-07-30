"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PhoneCall, Send } from "lucide-react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		toast.success("Thank you for contacting us.");

		setFormData({
			name: "",
			email: "",
			phone: "",
			subject: "",
			message: "",
		});
	};

	const handleChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<section className="py-10">
			<div className="wrapper mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<Card className="card-luxury h-fit p-4 sm:p-6">
						<CardHeader className="pb-6">
							<CardTitle className="text-2xl font-surfer">
								Send us a Message
							</CardTitle>
							<p className="text-muted-foreground text-sm">
								Fill out the form below and we'll get back to
								you within 24 hours
							</p>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="name">Full Name</Label>
										<Input
											id="name"
											value={formData.name}
											onChange={(e) =>
												handleChange(
													"name",
													e.target.value
												)
											}
											placeholder="Benjamin McCoy"
											required
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">
											Email Address
										</Label>
										<Input
											id="email"
											type="email"
											value={formData.email}
											onChange={(e) =>
												handleChange(
													"email",
													e.target.value
												)
											}
											placeholder="epha@mombar.ec"
											required
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<Label htmlFor="phone">
											Phone Number
										</Label>
										<Input
											id="phone"
											value={formData.phone}
											onChange={(e) =>
												handleChange(
													"phone",
													e.target.value
												)
											}
											placeholder="+1 (555) 123-4567"
										/>
									</div>
									<div className="space-y-2">
										<Label htmlFor="subject">Subject</Label>
										<Select
											value={formData.subject}
											onValueChange={(value) =>
												handleChange("subject", value)
											}
										>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Select a subject" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="booking">
													New Booking Inquiry
												</SelectItem>
												<SelectItem value="existing">
													Existing Booking
												</SelectItem>
												<SelectItem value="general">
													General Information
												</SelectItem>
												<SelectItem value="partnership">
													Partnership Opportunity
												</SelectItem>
												<SelectItem value="feedback">
													Feedback
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								<div className="space-y-2">
									<Label htmlFor="message">Message</Label>
									<Textarea
										id="message"
										value={formData.message}
										onChange={(e) =>
											handleChange(
												"message",
												e.target.value
											)
										}
										placeholder="Tell us about your dream destination and travel preferences..."
										className="min-h-32"
										required
									/>
								</div>

								<Button
									type="submit"
									className="btn-luxury w-fit bg-secondary text-white hover:bg-secondary/80 border-none capitalize"
								>
									<Send className="h-4 w-4 mr-1" />
									Send Message
								</Button>
							</form>
						</CardContent>
					</Card>

					<div className="space-y-8">
						<Card className="card-luxury p-4 sm:p-6">
							<CardHeader className="pb-4">
								<CardTitle className="text-xl font-surfer">
									Why Choose Parenthesis?
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-secondary rounded-full mt-2" />
									<div>
										<h4 className="font-semibold">
											Expert Travel Consultants
										</h4>
										<p className="text-sm text-muted-foreground">
											Our team has over 15 years of luxury
											travel experience
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-secondary rounded-full mt-2" />
									<div>
										<h4 className="font-semibold">
											24/7 Support
										</h4>
										<p className="text-sm text-muted-foreground">
											Round-the-clock assistance during
											your travels
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-secondary rounded-full mt-2" />
									<div>
										<h4 className="font-semibold">
											Personalized Itineraries
										</h4>
										<p className="text-sm text-muted-foreground">
											Every trip is tailored to your
											unique preferences
										</p>
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-2 h-2 bg-secondary rounded-full mt-2" />
									<div>
										<h4 className="font-semibold">
											Best Price Guarantee
										</h4>
										<p className="text-sm text-muted-foreground">
											We ensure you get the best value for
											luxury travel
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="card-luxury bg-secondary text-white">
							<CardContent className="p-8 text-center">
								<h3 className="text-2xl font-surfer font-bold mb-4">
									Ready to Start Planning?
								</h3>
								<p className="mb-6 text-white/90">
									Schedule a free consultation with our travel
									experts
								</p>
								<Button className="bg-white capitalize text-primary hover:bg-white/90">
									<PhoneCall className="h-4 w-4 mr-1" />
									Book Consultation
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
