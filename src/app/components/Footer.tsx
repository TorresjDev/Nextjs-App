// components/Footer.js

import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-transparent bg-blur text-[#C0C0C0]/90 py-10 border-t border-[#C0C0C0]/60">
			{/* Footer Content */}
			<div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* About Me Section */}
				<div>
					<h2 className="text-2xl font-bold text-[#DAA520]/90 mb-4">
						About Me
					</h2>
					<p>
						Hi, I’m <span className=" text-[#DAA520]">Jesus Torres</span>, a
						software developer passionate about creating modern web and mobile
						applications. Explore my work and connect with me to learn more.
					</p>
					<div className="flex space-x-4 mt-4">
						{/* Social Media Icons */}
						<a
							href="https://github.com/your-profile"
							target="_blank"
							className="hover:text-[#DAA520]/75"
							aria-label="GitHub"
						>
							<i className="fab fa-github text-2xl"></i>
						</a>
						<a
							href="https://linkedin.com/in/your-profile"
							target="_blank"
							className="hover:text-[#DAA520]/75"
							aria-label="LinkedIn"
						>
							<i className="fab fa-linkedin text-2xl"></i>
						</a>
						<a
							href="mailto:your-email@example.com"
							className="hover:text-[#DAA520]/75"
							aria-label="Email"
						>
							<i className="fas fa-envelope text-2xl"></i>
						</a>
					</div>
				</div>

				{/* Navigation Section */}
				<div>
					<h3 className="font-bold text-[#DAA520]/90 mb-4">Navigate</h3>
					<ul className="space-y-2">
						<li>
							<Link href="/" className="hover:text-[#820000]">
								Home
							</Link>
						</li>
						<li>
							<a href="/portfolio" className="hover:text-[#820000]">
								Portfolio
							</a>
						</li>
						<li>
							<a href="/blog" className="hover:text-[#820000]">
								Blog
							</a>
						</li>
						<li>
							<a href="/contact" className="hover:text-[#820000]">
								Contact
							</a>
						</li>
					</ul>
				</div>

				{/* Resources Section */}
				<div>
					<h3 className="font-bold text-[#DAA520]/90 mb-4">Resources</h3>
					<ul className="space-y-2">
						<li>
							<a
								href="https://nextjs.org"
								target="_blank"
								className="hover:text-[#820000]"
							>
								Next.js
							</a>
						</li>
						<li>
							<a
								href="https://tailwindcss.com"
								target="_blank"
								className="hover:text-[#820000]"
							>
								Tailwind CSS
							</a>
						</li>
						<li>
							<a
								href="https://reactjs.org"
								target="_blank"
								className="hover:text-[#820000]"
							>
								React
							</a>
						</li>
						<li>
							<a
								href="https://developer.mozilla.org"
								target="_blank"
								className="hover:text-[#820000]"
							>
								MDN Web Docs
							</a>
						</li>
					</ul>
				</div>

				{/* Contact Section */}
				<div>
					<h3 className="font-bold text-[#DAA520]/90 mb-4">Contact</h3>
					<p className="">Have a question or want to work together?</p>
					<p className="mt-2">
						<a
							href="mailto:j.torres3.dev@gmail.com"
							className="hover:text-[#DAA520]/75"
						>
							j.torres3.dev@gmail.com
						</a>
					</p>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="text-center text-[#C0C0C0]-500 mt-10">
				<p>
					&copy; {new Date().getFullYear()} Jesus Torres. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
