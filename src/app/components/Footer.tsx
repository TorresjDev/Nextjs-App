// components/Footer.js

import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-transparent bg-blur text-gray-300 py-10 border-t border-gray-700">
			{/* Footer Content */}
			<div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* About Me Section */}
				<div>
					<h2 className="text-2xl font-bold text-yellow-500 mb-4">About Me</h2>
					<p className="text-gray-400">
						Hi, I’m Jesus Torres, a software developer passionate about creating
						modern web and mobile applications. Explore my work and connect with
						me to learn more.
					</p>
					<div className="flex space-x-4 mt-4">
						{/* Social Media Icons */}
						<a
							href="https://github.com/your-profile"
							target="_blank"
							className="hover:text-yellow-500"
							aria-label="GitHub"
						>
							<i className="fab fa-github text-2xl"></i>
						</a>
						<a
							href="https://linkedin.com/in/your-profile"
							target="_blank"
							className="hover:text-yellow-500"
							aria-label="LinkedIn"
						>
							<i className="fab fa-linkedin text-2xl"></i>
						</a>
						<a
							href="mailto:your-email@example.com"
							className="hover:text-yellow-500"
							aria-label="Email"
						>
							<i className="fas fa-envelope text-2xl"></i>
						</a>
					</div>
				</div>

				{/* Navigation Section */}
				<div>
					<h3 className="font-bold text-yellow-500 mb-4">Navigate</h3>
					<ul className="space-y-2">
						<li>
							<Link href="/" className="hover:text-yellow-500">
								Home
							</Link>
						</li>
						<li>
							<a href="/portfolio" className="hover:text-yellow-500">
								Portfolio
							</a>
						</li>
						<li>
							<a href="/blog" className="hover:text-yellow-500">
								Blog
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:text-yellow-500">
								Contact
							</a>
						</li>
					</ul>
				</div>

				{/* Resources Section */}
				<div>
					<h3 className="font-bold text-yellow-500 mb-4">Resources</h3>
					<ul className="space-y-2">
						<li>
							<a
								href="https://nextjs.org"
								target="_blank"
								className="hover:text-yellow-500"
							>
								Next.js
							</a>
						</li>
						<li>
							<a
								href="https://tailwindcss.com"
								target="_blank"
								className="hover:text-yellow-500"
							>
								Tailwind CSS
							</a>
						</li>
						<li>
							<a
								href="https://reactjs.org"
								target="_blank"
								className="hover:text-yellow-500"
							>
								React
							</a>
						</li>
						<li>
							<a
								href="https://developer.mozilla.org"
								target="_blank"
								className="hover:text-yellow-500"
							>
								MDN Web Docs
							</a>
						</li>
					</ul>
				</div>

				{/* Contact Section */}
				<div>
					<h3 className="font-bold text-yellow-500 mb-4">Contact</h3>
					<p className="text-gray-400">
						Have a question or want to work together?
					</p>
					<p className="mt-2">
						<a
							href="mailto:your-email@example.com"
							className="hover:text-yellow-500"
						>
							your-email@example.com
						</a>
					</p>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="text-center text-gray-500 mt-10">
				<p>
					&copy; {new Date().getFullYear()} Jesus Torres. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
