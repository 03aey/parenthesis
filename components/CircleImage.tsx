export default function CircleImage({
	src,
	alt,
	className,
}: {
	src: string;
	alt: string;
	className?: string;
}) {
	return (
		<div
			className={`p-2 w-full max-w-[320px] h-[500px] overflow-hidden border-2 rounded-full border-[#BBB2A5] ${className}`}
		>
			<img
				loading="lazy"
				width={100}
				height={100}
				src={src}
				alt={alt}
				className="h-full w-full rounded-full object-cover"
			/>
		</div>
	);
}
