export default function Loading() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
			<div className="text-center">
				<div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
					<div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
				</div>
				<h2 className="text-xl font-semibold text-gray-900 mb-2">
					Loading Onboarding
				</h2>
				<p className="text-gray-600">
					Preparing your personalized setup...
				</p>
			</div>
		</div>
	);
}
