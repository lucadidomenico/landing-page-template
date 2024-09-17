"use client";

import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu";
import FeatureItem from "./components/FeatureItem";
import FeatureList from "./components/FeatureList";
import TestimonialCard from "./components/TestimonialCard";
import FAQSection from "./components/FAQSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import Hero1 from "./components/hero/Hero1";
// import Hero2 from "./components/hero/Hero2";

export default function Home() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<div className="min-h-screen flex flex-col">
			<header className="bg-white shadow-sm sticky top-0 z-50">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<div className="text-2xl font-bold text-blue-600">ACME</div>
					<nav className="hidden md:flex items-center space-x-8">
						{["First", "Second", "Third", "Fourth", "Fifth"].map((item) => (
							<a
								key={item}
								href="#"
								className="text-gray-600 hover:text-blue-600 transition duration-300"
							>
								{item}
							</a>
						))}
						<button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
							Action
						</button>
					</nav>
					<button
						className="md:hidden text-gray-600 hover:text-blue-600 transition duration-300"
						onClick={() => setIsMobileMenuOpen(true)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</header>

			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
			/>

			<main className="flex-grow container mx-auto px-4 py-12 md:py-24">
				<Hero1 />
			</main>

			<section className="bg-gray-50 py-16 md:py-24">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
						Our Key Features
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
						<FeatureItem
							icon={
								<svg
									className="w-12 h-12 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
									/>
								</svg>
							}
							title="Feature One"
							description="All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another."
						/>
						<FeatureItem
							icon={
								<svg
									className="w-12 h-12 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							}
							title="Feature Two"
							description="All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another."
						/>
						<FeatureItem
							icon={
								<svg
									className="w-12 h-12 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 10V3L4 14h7v7l9-11h-7z"
									/>
								</svg>
							}
							title="Feature Three"
							description="All base UI elements are made using Nested Symbols and shared styles that are logically connected with one another."
						/>
					</div>
				</div>
			</section>

			<section className="py-16 md:py-24 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row items-center">
						<div className="w-full md:w-1/2 mb-12 md:mb-0">
							<div className="relative">
								<Image
									src="/images/heroimage.svg"
									alt="Abstract Illustration"
									width={500}
									height={500}
									className="w-full h-auto relative z-10 transform hover:scale-105 transition-transform duration-300"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 md:pl-12">
							<h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 leading-tight">
								Long headline on two lines to turn your visitors into users and
								achieve more
							</h2>
							<p className="text-xl text-gray-600 mb-8 leading-relaxed">
								Separated they live in Bookmarks right at the coast of the
								famous Semantics, large language ocean. Separated they live in
								Bookmarks right at the coast.
							</p>
							<FeatureList
								items={[
									"Showcase and embed your work with ease",
									"Publish across social channels in a single click",
									"Sell your videos worldwide with no hassle",
									"Embed your work seamlessly on any platform",
								]}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24 overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row-reverse items-center">
						<div className="w-full md:w-1/2 mb-12 md:mb-0">
							<div className="relative">
								<Image
									src="/images/heroimage.svg"
									alt="Phone Mockup"
									width={400}
									height={600}
									className="w-full h-auto relative z-10 transform hover:scale-105 transition-transform duration-300"
								/>
							</div>
						</div>
						<div className="w-full md:w-1/2 md:pr-12">
							<h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 leading-tight">
								Long headline on two lines to turn your visitors into users and
								achieve more
							</h2>
							<p className="text-xl text-gray-600 mb-8 leading-relaxed">
								Separated they live in Bookmarks right at the coast of the
								famous Semantics, large language ocean. Separated they live in
								Bookmarks right at the coast.
							</p>
							<FeatureList
								items={[
									"Showcase and embed your work with ease",
									"Publish across social channels in a single click",
									"Sell your videos worldwide with no hassle",
								]}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-gray-100 py-16 md:py-24">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
						What Our Customers Say
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<TestimonialCard
							quote="ACME's solution has transformed our workflow. The efficiency gains are remarkable, and the support team is always there when we need them."
							name="Emily Chen"
							description="CTO, TechInnovate"
							imageSrc="/images/testimonial1.jpg"
						/>
						<TestimonialCard
							quote="We've seen a 40% increase in productivity since implementing ACME's platform. It's user-friendly and packed with features we didn't even know we needed."
							name="Michael Johnson"
							description="Operations Manager, GlobalCorp"
							imageSrc="/images/testimonial2.jpg"
						/>
						<TestimonialCard
							quote="The customization options are endless. ACME has allowed us to tailor the solution to our unique business needs, resulting in significant cost savings."
							name="Sarah Thompson"
							description="CEO, InnovateCo"
							imageSrc="/images/testimonial3.jpg"
						/>
					</div>
				</div>
			</section>
			<FAQSection />
			<PricingSection />
			<section className="bg-white py-20">
				<div className="container mx-auto px-4 text-center">
					<p className="text-blue-600 font-semibold mb-4">Tagline</p>
					<h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8 max-w-4xl mx-auto">
						Long headline to turn your visitors into users
					</h2>
					<button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
						Action
					</button>
				</div>
			</section>
			<Footer />
		</div>
	);
}
