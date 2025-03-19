// components/Footer.js
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-transparent bg-blur text-silver/90 py-8 border-t border-silver/60 relative bottom-0 justify-self-center w-full">
			{/* Footer Content */}
			<div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* About Me Section */}
				<div>
					<h2 className="text-2xl font-bold text-gold/90 mb-3">About Me</h2>
					<p>
						Hi, I’m <span className=" text-gold">Jesus Torres</span>, a software
						developer passionate about creating modern web and mobile
						applications. Explore my work and connect with me to learn more.
					</p>
				</div>

				{/* Navigation Section */}
				<div className="ms-12">
					<h3 className="font-bold text-gold/90 mb-3">Navigate</h3>
					<ul className="space-y-2">
						<li>
							<Link
								href="/"
								className="transform transition-transform duration-200 hover:text-gold/90 hover:ms-1 "
							>
								Home
							</Link>
						</li>
						<li>
							<a
								href="https://tiny.cc/Jtorres_dev"
								target="_blank"
								className="transform transition-transform duration-200 hover:text-gold/90 hover:ms-1 "
							>
								Portfolio
							</a>
						</li>
						{/* <li>
							<a href="/blog" className="transform transition-transform duration-200 hover:text-gold/90 hover:ms-1 ">
								Blog
							</a>
						</li>
						<li>
							<a href="/contact" className="transform transition-transform duration-200 hover:text-gold/90 hover:ms-1 ">
								Contact
							</a>
						</li> */}
					</ul>
				</div>

				{/* Resources Section */}
				<div>
					<h3 className="font-bold text-gold/90 mb-3">Resources</h3>
					<ul className="space-y-2">
						<li>
							<a
								href="https://nextjs.org"
								target="_blank"
								className="transform transition-transform duration-200 hover:text-gold/90 hover:ms-1 "
							>
								Next.js
							</a>
						</li>
						<li>
							<a
								href="https://tailwindcss.com"
								target="_blank"
								className="transform transition-transform duration-200 hover:text-gold/90 hover:ms-1 "
							>
								Tailwind CSS
							</a>
						</li>
						<li>
							<a
								href="https://reactjs.org"
								target="_blank"
								className="transform transition-transform duration-200 hover:text-gold/90 hover:ms-1 "
							>
								React
							</a>
						</li>
						<li>
							<a
								href="https://developer.mozilla.org"
								target="_blank"
								className="transform transition-transform duration-200 hover:text-gold/90 hover:ms-1 "
							>
								MDN Web Docs
							</a>
						</li>
					</ul>
				</div>

				{/* Contact Section */}
				<div>
					<h3 className="font-bold text-gold/90 mb-3">Contact</h3>
					<p className=" text-silver/90">
						Have a question or want to work together?
					</p>
					<p className="mt-2">
						<a
							href="mailto:j.torres3.dev@gmail.com"
							className="transform transition-transform duration-200 hover:text-gold/90 hover:ms-1 "
						>
							j.torres3.dev@gmail.com
						</a>
					</p>
					<h3 className="font-bold text-gold/90 my-3">Connect</h3>
					<div className="flex items-start space-x-4">
						<a
							href="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/social/github.svg"
							target="_blank"
							aria-label="GitHub"
							className="transform transition-transform duration-200 hover:translate-x-[4px]"
						>
							<Image
								src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/social/github.svg"
								alt="GitHub"
								width={33}
								height={33}
								className="rounded-full hover:bg-gold/90"
							/>
						</a>

						<a
							href="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/social/linkedIn.svg"
							target="_blank"
							aria-label="LinkedIn"
							className="transform transition-transform duration-200 hover:translate-x-[4px]"
						>
							<Image
								src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/social/linkedIn.svg"
								alt="LinkedIn"
								width={33}
								height={33}
								className="rounded-md hover:bg-gold/90"
							/>
						</a>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="text-center text-silver-500 mt-3">
				<p>
					&copy; {new Date().getFullYear()} Jesus Torres. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
