"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
	Award,
	Calendar,
	Camera,
	Clock,
	CreditCard,
	Download,
	Edit,
	Eye,
	Globe,
	Heart,
	MapPin,
	Plane,
	Save,
	Star,
	User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const userData = {
	id: 1,
	name: "Sarah Johnson",
	email: "sarah.johnson@email.com",
	phone: "+1 (555) 123-4567",
	location: "New York, USA",
	joinDate: "2022-03-15",
	avatar: "/images/avatar.jpg",
	bio: "Passionate traveler and adventure seeker. Love exploring new cultures and capturing memories through photography.",
	level: "Gold Member",
	stats: {
		tripsCompleted: 12,
		countriesVisited: 18,
		totalSpent: 24750,
		loyaltyPoints: 3420,
	},
	preferences: {
		travelStyle: ["Adventure", "Cultural", "Photography"],
		budget: "Mid-range to Luxury",
		groupSize: "Small groups (2-8 people)",
		accommodation: "Boutique hotels & unique stays",
	},
};

const travelHistory = [
	{
		id: 1,
		destination: "Santorini, Greece",
		package: "Greek Island Paradise",
		dates: "June 15-22, 2024",
		status: "Completed",
		rating: 5,
		image: "/images/greek-island.jpg",
		price: "$2,299",
		highlights: ["Sunset cruise", "Wine tasting", "Oia village tour"],
		review: "Absolutely magical experience! The sunsets were breathtaking and the local cuisine was incredible.",
	},
	{
		id: 2,
		destination: "Kyoto, Japan",
		package: "Japan Cultural Journey",
		dates: "March 10-20, 2024",
		status: "Completed",
		rating: 5,
		image: "/images/japan-cultural.jpg",
		price: "$3,599",
		highlights: ["Tea ceremony", "Temple visits", "Cherry blossoms"],
		review: "Perfect timing for cherry blossom season. The cultural experiences were authentic and memorable.",
	},
	{
		id: 3,
		destination: "Machu Picchu, Peru",
		package: "Inca Trail Adventure",
		dates: "September 5-13, 2023",
		status: "Completed",
		rating: 4,
		image: "/images/machu-picchu.jpg",
		price: "$2,899",
		highlights: [
			"Inca Trail hiking",
			"Sunrise at Machu Picchu",
			"Local communities",
		],
		review: "Challenging but rewarding trek. The guides were knowledgeable and the views were spectacular.",
	},
];

const upcomingTrips = [
	{
		id: 4,
		destination: "Maldives",
		package: "Luxury Island Escape",
		dates: "December 20-27, 2024",
		status: "Confirmed",
		image: "/images/maldives-luxury.jpg",
		price: "$4,999",
		daysUntil: 45,
	},
	{
		id: 5,
		destination: "Iceland",
		package: "Northern Lights Adventure",
		dates: "February 14-21, 2025",
		status: "Pending Payment",
		image: "/images/venice.jpg",
		price: "$2,299",
		daysUntil: 98,
	},
];

const loyaltyBenefits = [
	{
		level: "Gold Member",
		points: 3420,
		nextLevel: "Platinum",
		pointsNeeded: 1580,
	},
	{ benefit: "15% discount on all bookings", active: true },
	{ benefit: "Priority customer support", active: true },
	{ benefit: "Free airport lounge access", active: true },
	{
		benefit: "Complimentary room upgrades",
		active: false,
		requiredLevel: "Platinum",
	},
];

const achievements = [
	{
		icon: Globe,
		title: "World Explorer",
		description: "Visited 5+ continents",
		unlocked: true,
	},
	{
		icon: Plane,
		title: "Frequent Flyer",
		description: "Completed 10+ trips",
		unlocked: true,
	},
	{
		icon: Camera,
		title: "Photo Master",
		description: "Shared 50+ travel photos",
		unlocked: true,
	},
	{
		icon: Award,
		title: "Review Expert",
		description: "Left 20+ detailed reviews",
		unlocked: false,
	},
	{
		icon: Heart,
		title: "Local Supporter",
		description: "Supported 10+ local businesses",
		unlocked: false,
	},
	{
		icon: Star,
		title: "5-Star Adventurer",
		description: "All trips rated 5 stars",
		unlocked: false,
	},
];

export default function Profile() {
	const [isEditing, setIsEditing] = useState(false);
	const [editedData, setEditedData] = useState(userData);

	const handleSave = () => {
		setIsEditing(false);
		console.log("Saving user data:", editedData);
		toast.success("User data saved successfully!");
	};

	return (
		<div className="min-h-screen pt-20">
			<section className="wrapper bg-secondary py-12 text-amber-50">
				<div className="mx-auto">
					<div className="flex flex-col md:flex-row items-start gap-8">
						<div className="relative">
							<Avatar className="w-32 h-32 border-4 border-border-primary">
								<AvatarImage
									src={userData.avatar || "/placeholder.svg"}
									alt={userData.name}
									className="object-cover object-center"
								/>
								<AvatarFallback className="text-3xl font-bruno bg-background text-foreground">
									{userData.name
										.split(" ")
										.map((n) => n[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<Button
								size="sm"
								className="absolute bottom-0 right-0 rounded-full p-2 bg-background text-yellow-500 hover:bg-background/90 hover:text-yellow-400 duration-300"
							>
								<Camera className="h-4 w-4" />
							</Button>
						</div>

						<div className="text-left flex-1">
							<div className="flex items-center gap-4 mb-2">
								<h1 className="text-3xl font-bold font-surfer">
									{userData.name}
								</h1>
								<Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-600 duration-300">
									{userData.level}
								</Badge>
							</div>
							<p className="text-blue-100 mb-2 flex items-center justify-start">
								<MapPin className="h-4 w-4 mr-1" />
								{userData.location}
							</p>
							<p className="text-blue-100 mb-4 flex items-center justify-start">
								<Calendar className="h-4 w-4 mr-1" />
								Member since{" "}
								{new Date(userData.joinDate).toLocaleDateString(
									"en-US",
									{ month: "long", year: "numeric" }
								)}
							</p>
							<p className="text-blue-100">{userData.bio}</p>
						</div>

						<div className="text-center">
							<Button
								variant="outline"
								className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
								onClick={() => setIsEditing(!isEditing)}
							>
								<Edit className="h-4 w-4 mr-2" />
								{isEditing ? "Cancel" : "Edit Profile"}
							</Button>
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-border-primary font-surfer">
						<div className="text-center">
							<div className="text-2xl font-bold">
								{userData.stats.tripsCompleted}
							</div>
							<div className="text-sm">Trips Completed</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold">
								{userData.stats.countriesVisited}
							</div>
							<div className="text-sm">Countries Visited</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold">
								${userData.stats.totalSpent.toLocaleString()}
							</div>
							<div className=" text-sm">Total Spent</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold">
								{userData.stats.loyaltyPoints}
							</div>
							<div className=" text-sm">Loyalty Points</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12">
				<div className="wrapper mx-auto">
					<Tabs defaultValue="overview" className="space-y-8">
						<TabsList className="w-full gap-4">
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="history">
								Travel History
							</TabsTrigger>
							<TabsTrigger
								value="upcoming"
								className="hidden md:block"
							>
								Upcoming
							</TabsTrigger>
							<TabsTrigger value="loyalty">Loyalty</TabsTrigger>
							<TabsTrigger
								value="settings"
								className="hidden sm:block"
							>
								Settings
							</TabsTrigger>
						</TabsList>

						<TabsContent value="overview" className="space-y-8">
							<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
								<div className="lg:col-span-2">
									<Card>
										<CardHeader className="px-4">
											<CardTitle className="flex items-center pt-4">
												<Clock className="h-5 w-5 mr-2 text-secondary" />
												Recent Activity
											</CardTitle>
										</CardHeader>
										<CardContent className="space-y-4 p-4">
											{travelHistory
												.slice(0, 3)
												.map((trip) => (
													<div
														key={trip.id}
														className="flex items-center space-x-4 p-2 bg-gray-50 rounded-tr-lg"
													>
														<img
															src={trip.image}
															alt={
																trip.destination
															}
															width={60}
															height={60}
															className="rounded-tr-lg object-cover"
														/>
														<div className="flex-1">
															<h4 className="font-semibold font-surfer">
																{
																	trip.destination
																}
															</h4>
															<p className="text-sm text-gray-600">
																{trip.dates}
															</p>
															<div className="flex items-center mt-1">
																{[
																	...Array(
																		trip.rating
																	),
																].map(
																	(_, i) => (
																		<Star
																			key={
																				i
																			}
																			className="h-4 w-4 fill-yellow-400 text-yellow-400"
																		/>
																	)
																)}
															</div>
														</div>
														<Badge
															variant={
																trip.status ===
																"Completed"
																	? "default"
																	: "secondary"
															}
														>
															{trip.status}
														</Badge>
													</div>
												))}
										</CardContent>
									</Card>
								</div>

								<div>
									<Card>
										<CardHeader className="px-4">
											<CardTitle className="flex items-start pt-4">
												<Heart className="h-5 w-5 mr-2 fill-secondary animate-pulse text-secondary" />
												Travel Preferences
											</CardTitle>
										</CardHeader>
										<CardContent className="space-y-4 p-4">
											<div>
												<h4 className="font-medium mb-2">
													Travel Style
												</h4>
												<div className="flex flex-wrap gap-2">
													{userData.preferences.travelStyle.map(
														(style) => (
															<Badge
																key={style}
																variant="outline"
															>
																{style}
															</Badge>
														)
													)}
												</div>
											</div>
											<div>
												<h4 className="font-medium mb-1">
													Budget Range
												</h4>
												<p className="text-sm text-gray-600">
													{
														userData.preferences
															.budget
													}
												</p>
											</div>
											<div>
												<h4 className="font-medium mb-1">
													Group Size
												</h4>
												<p className="text-sm text-gray-600">
													{
														userData.preferences
															.groupSize
													}
												</p>
											</div>
											<div>
												<h4 className="font-medium mb-1">
													Accommodation
												</h4>
												<p className="text-sm text-gray-600">
													{
														userData.preferences
															.accommodation
													}
												</p>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						</TabsContent>

						<TabsContent value="history" className="space-y-6">
							<div className="flex items-center justify-between">
								<h2 className="text-2xl font-surfer font-bold">
									Travel History
								</h2>
								<Button variant="outline">
									<Download className="h-4 w-4 mr-2" />
									Export History
								</Button>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{travelHistory.map((trip) => (
									<Card
										key={trip.id}
										className="overflow-hidden hover:shadow-lg transition-shadow"
									>
										<div className="relative h-fit">
											<img
												src={trip.image}
												alt={trip.destination}
												className="object-cover"
											/>
											<Badge className="absolute top-4 left-4 bg-green-500">
												{trip.status}
											</Badge>
										</div>
										<CardContent className="p-4">
											<h3 className="font-semibold font-surfer text-2xl mb-2">
												{trip.destination}
											</h3>
											<p className="text-gray-600 text-sm mb-2">
												{trip.package} | {trip.dates}
											</p>

											<div className="flex items-center mb-3">
												{[...Array(trip.rating)].map(
													(_, i) => (
														<Star
															key={i}
															className="h-4 w-4 fill-yellow-400 text-yellow-400"
														/>
													)
												)}
												<span className="ml-2 text-sm text-gray-600">
													({trip.rating}/5)
												</span>
											</div>

											<div className="mb-4">
												<h4 className="font-medium mb-2">
													Highlights
												</h4>
												<ul className="text-sm text-gray-600 space-y-1">
													{trip.highlights.map(
														(highlight, index) => (
															<li
																key={index}
																className="flex items-center"
															>
																<div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
																{highlight}
															</li>
														)
													)}
												</ul>
											</div>

											<div className="border-t pt-4">
												<p className="text-sm text-gray-700 italic mb-3">
													"{trip.review}"
												</p>
												<div className="flex items-center justify-between">
													<span className="font-bold text-green-600">
														{trip.price}
													</span>
													<Button className="capitalize">
														<Eye className="h-4 w-4 mr-1" />
														View Details
													</Button>
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="upcoming" className="space-y-6">
							<div className="flex items-center justify-between">
								<h2 className="text-2xl font-surfer font-bold">
									Upcoming Trips
								</h2>
								<Button asChild>
									<Link href="/packages">Book New Trip</Link>
								</Button>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{upcomingTrips.map((trip) => (
									<Card
										key={trip.id}
										className="overflow-hidden"
									>
										<div className="relative h-48">
											<Image
												src={trip.image}
												alt={trip.destination}
												fill
												className="object-cover object-bottom"
											/>
											<Badge
												className={`absolute top-4 left-4 ${
													trip.status === "Confirmed"
														? "bg-green-500"
														: "bg-yellow-500"
												}`}
											>
												{trip.status}
											</Badge>
											<div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1">
												<span className="text-sm font-medium">
													{trip.daysUntil} days
												</span>
											</div>
										</div>
										<CardContent className="p-4">
											<h3 className="font-bold font-bruno text-lg mb-2">
												{trip.destination}
											</h3>
											<p className="text-gray-600 mb-2">
												{trip.package}
											</p>
											<p className="text-sm text-gray-500 mb-4">
												{trip.dates}
											</p>

											<div className="flex items-center justify-between">
												<span className="font-bold text-secondary">
													{trip.price}
												</span>
												<div className="space-x-2 flex items-center">
													{trip.status ===
														"Pending Payment" && (
														<Button
															size="sm"
															className="bg-green-600 hover:bg-green-700"
														>
															<CreditCard className="h-4 w-4 mr-1" />
															Pay Now
														</Button>
													)}
													<Button
														size="sm"
														variant="outline"
													>
														Manage
													</Button>
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="loyalty" className="space-y-6">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<Card className="rounded-md">
									<CardHeader className="px-4">
										<CardTitle className="flex items-center py-4">
											<Award className="h-5 w-5 mr-2 text-yellow-500" />
											Loyalty Status
										</CardTitle>
									</CardHeader>
									<CardContent className="p-4">
										<div className="text-center mb-6">
											<div className="text-3xl font-bruno font-bold text-yellow-600 mb-2">
												Gold Member
											</div>
											<div className="text-gray-600">
												Current Points:{" "}
												{loyaltyBenefits[0].points}
											</div>
										</div>

										<div className="mb-6">
											<div className="flex justify-between text-sm mb-2">
												<span>
													Progress to Platinum
												</span>
												<span>
													{
														loyaltyBenefits[0]
															.pointsNeeded
													}{" "}
													points needed
												</span>
											</div>
											<div className="w-full bg-gray-200 rounded-full h-2">
												<div
													className="bg-yellow-500 h-2 rounded-full"
													style={{
														width: `${
															((loyaltyBenefits[0]
																?.points ?? 0) /
																((loyaltyBenefits[0]
																	?.points ??
																	0) +
																	(loyaltyBenefits[0]
																		?.pointsNeeded ??
																		0))) *
																100 || 0
														}%`,
													}}
												></div>
											</div>
										</div>

										<Button className="w-fit">
											Redeem Points
										</Button>
									</CardContent>
								</Card>

								<Card className="rounded-md">
									<CardHeader className="p-4">
										<CardTitle>Member Benefits</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="space-y-4 p-4">
											{loyaltyBenefits
												.slice(1)
												.map((benefit, index) => (
													<div
														key={index}
														className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
													>
														<span
															className={`text-sm ${
																!benefit.active
																	? "text-gray-500"
																	: ""
															}`}
														>
															{benefit.benefit}
														</span>
														{benefit.active ? (
															<Badge className="bg-green-500">
																Active
															</Badge>
														) : (
															<Badge
																variant="secondary"
																className="bg-gray-500"
															>
																{
																	benefit.requiredLevel
																}
															</Badge>
														)}
													</div>
												))}
										</div>
									</CardContent>
								</Card>
							</div>

							<div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
								{achievements.map((achievement, index) => (
									<Card
										key={index}
										className={`${
											achievement.unlocked
												? "bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20"
												: "opacity-60"
										} rounded-md`}
									>
										<CardContent className="p-6">
											<div className="flex items-center gap-4">
												<div
													className={`p-3 rounded-full ${
														achievement.unlocked
															? "bg-primary text-white"
															: "bg-muted text-muted-foreground"
													}`}
												>
													<achievement.icon className="h-6 w-6" />
												</div>
												<div>
													<h3 className="font-semibold">
														{achievement.title}
													</h3>
													<p className="text-sm text-muted-foreground">
														{
															achievement.description
														}
													</p>
													{achievement.unlocked && (
														<Badge className="mt-2">
															Unlocked
														</Badge>
													)}
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</TabsContent>

						<TabsContent value="settings" className="space-y-6">
							<Card className="rounded-md">
								<CardHeader className="px-4">
									<CardTitle className="flex text-xl font-surfer items-center justify-between pt-4">
										Personal Information
										{isEditing && (
											<Button
												onClick={handleSave}
												className="ml-4"
											>
												<Save className="h-4 w-4 mr-2" />
												Save Changes
											</Button>
										)}
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6 p-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="space-y-2">
											<Label htmlFor="name">
												Full Name
											</Label>
											<Input
												id="name"
												value={editedData.name}
												disabled={!isEditing}
												onChange={(e) =>
													setEditedData({
														...editedData,
														name: e.target.value,
													})
												}
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">
												Email Address
											</Label>
											<Input
												id="email"
												type="email"
												value={editedData.email}
												disabled={!isEditing}
												onChange={(e) =>
													setEditedData({
														...editedData,
														email: e.target.value,
													})
												}
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="phone">
												Phone Number
											</Label>
											<Input
												id="phone"
												value={editedData.phone}
												disabled={!isEditing}
												onChange={(e) =>
													setEditedData({
														...editedData,
														phone: e.target.value,
													})
												}
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="location">
												Location
											</Label>
											<Input
												id="location"
												value={editedData.location}
												disabled={!isEditing}
												onChange={(e) =>
													setEditedData({
														...editedData,
														location:
															e.target.value,
													})
												}
											/>
										</div>
									</div>

									<div className="space-y-2">
										<Label htmlFor="bio">Bio</Label>
										<Textarea
											id="bio"
											value={editedData.bio}
											disabled={!isEditing}
											onChange={(e) =>
												setEditedData({
													...editedData,
													bio: e.target.value,
												})
											}
											rows={3}
										/>
									</div>
								</CardContent>
							</Card>

							<Card className="rounded-md">
								<CardHeader className="px-4">
									<CardTitle className="pt-4 text-lg font-surfer">
										Notification Preferences
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4 p-4">
									<div className="flex items-center justify-between">
										<div>
											<h4 className="font-medium">
												Email Notifications
											</h4>
											<p className="text-sm text-gray-600">
												Receive updates about your trips
												and special offers
											</p>
										</div>
										<Button variant="outline" size="sm">
											Configure
										</Button>
									</div>
									<div className="flex items-center justify-between">
										<div>
											<h4 className="font-medium">
												SMS Notifications
											</h4>
											<p className="text-sm text-gray-600">
												Get important trip updates via
												text message
											</p>
										</div>
										<Button variant="outline" size="sm">
											Configure
										</Button>
									</div>
								</CardContent>
							</Card>

							<Card className="rounded-md">
								<CardHeader className="px-4">
									<CardTitle className="text-red-600 font-surfer text-lg pt-4">
										Account Actions
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4 p-4">
									<Button
										variant="outline"
										className="justify-start w-fit bg-transparent"
									>
										<Download className="h-4 w-4 mr-2" />
										Download My Data
									</Button>
									<Button
										variant="outline"
										className="w-fit ml-4 justify-start text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
									>
										<User className="h-4 w-4 mr-2" />
										Delete Account
									</Button>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</section>
		</div>
	);
}
