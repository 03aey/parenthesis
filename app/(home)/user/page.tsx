import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import LogoutButton from "@/components/logout";

const ProfilePage = async () => {
	const session = await getServerSession(authOptions);

	return (
		<div className="pt-24">
			<h1>ProfilePage</h1>

			<div>
				{session?.user?.name ? (
					<h2>Hello {session.user.name}!</h2>
				) : null}

				{session?.user?.image ? (
					<Image
						src={session.user.image}
						width={200}
						height={200}
						alt={`Profile Pic for ${session.user.name}`}
						priority={true}
					/>
				) : null}

				<LogoutButton />
			</div>
		</div>
	);
};

export default ProfilePage;
