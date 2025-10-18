import BookingForm from "@/src/components/booking/booking-form";
import { Suspense } from "react";

export default function BookingPage() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BookingForm />
		</Suspense>
	);
}
