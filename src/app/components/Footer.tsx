import React from "react";
import Link from "next/link";

const footerColumns = [
	{
		title: "First column",
		links: ["First page", "Second page", "Third", "Fourth"],
	},
	{
		title: "Second",
		links: ["Fifth page", "Sixth page", "Eighth"],
	},
	{
		title: "Third",
		links: ["Fifth page", "Sixth page", "Eighth"],
	},
];

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-100 py-12 md:py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
					{/* Company Info */}
					<div className="md:col-span-3 mb-8 md:mb-0">
						<Link
							href="/"
							className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition duration-300"
						>
							ACME
						</Link>
						<p className="mt-4 text-sm text-gray-600">
							Making the world a better place through constructing elegant
							hierarchies.
						</p>
					</div>

					{/* Footer Columns */}
					<div className="md:col-span-6">
						<div className="grid grid-cols-3 gap-8">
							{footerColumns.map((column) => (
								<div key={column.title}>
									<h4 className="font-semibold text-gray-800 mb-4">
										{column.title}
									</h4>
									<ul className="space-y-2">
										{column.links.map((link) => (
											<li key={link}>
												<Link
													href="#"
													className="text-gray-600 hover:text-blue-600 transition duration-300"
												>
													{link}
												</Link>
											</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Subscribe Section */}
					<div className="md:col-span-3">
						<h4 className="font-semibold text-gray-800 mb-4">Subscribe</h4>
						<form className="flex flex-col gap-2">
							<input
								type="email"
								placeholder="Enter your email"
								className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								required
							/>
							<button
								type="submit"
								className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
							>
								Subscribe
							</button>
						</form>
						<p className="mt-2 text-sm text-gray-600">
							Join our newsletter to stay up to date on features and releases.
						</p>
					</div>
				</div>

				{/* Social Icons */}
				<div className="mt-12 flex justify-center space-x-6">
					{["twitter", "facebook", "instagram", "github", "dribbble"].map(
						(social) => (
							<a
								key={social}
								href={`https://${social}.com`}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-blue-600 transition duration-300"
							>
								<span className="sr-only">{social}</span>
								{/* Replace with appropriate icon component or SVG */}
								<div className="w-6 h-6 bg-current"></div>
							</a>
						)
					)}
				</div>

				{/* Copyright */}
				<div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
					<p>
						&copy; {new Date().getFullYear()} ACME, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
