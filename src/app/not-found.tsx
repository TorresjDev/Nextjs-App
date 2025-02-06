// pages/404.js
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
	return (
		<div className="flex flex-col items-center justify-center h-[100vh]">
			<h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
			<p className="mt-4 text-lg text-gray-700">
				We can&apos;t seem to find the page you&apos;re looking for.
			</p>
			<Image
				src="/images/404.png"
				alt="Not Found"
				className="mt-8 w-1/2"
				width={500}
				height={500}
			/>
			<Link href="/" className="mt-8 text-blue-500 hover:underline">
				<p>Go back home</p>
			</Link>
		</div>
	);
}
