// pages/404.js
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
	return (
		<div className="flex flex-col items-center justify-center h-[100vh]">
			<h1 className="text-4xl font-bold text-abn/90">404 - Page Not Found</h1>
			<Image
				src="/images/404.png"
				alt="Not Found"
				className="mt-8 w-1/2"
				width={200}
				height={200}
			/>
			<p className="mt-4 text-lg text-silver/60">
				We can&apos;t seem to find the page you&apos;re looking for.
			</p>
			<Link href="/" className="my-3 text-blue-500 hover:underline">
				<p>Go back home</p>
			</Link>
		</div>
	);
}
