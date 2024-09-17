import { useState } from "react";
import FAQItem from "./FAQItem";

const faqs = [
	{
		question: "System requirements",
		answer:
			"Our system is cloud-based and works with most modern web browsers. No special hardware or software installation is required.",
	},
	{
		question: "Where can I learn more about how to get started?",
		answer:
			"We offer comprehensive documentation and video tutorials on our website. You can also schedule a demo with our team for personalized guidance.",
	},
	{
		question: "Is Acme available for Linux?",
		answer:
			"Yes, Acme is available for Linux. Our platform is web-based and compatible with all major operating systems, including Linux distributions.",
	},
	{
		question: "What about a version for iOS?",
		answer:
			"We have a dedicated iOS app available on the App Store. It offers most of the features available in our web version, optimized for mobile use.",
	},
	{
		question: "Will I automatically be charged when my trial ends?",
		answer:
			"No, you won't be automatically charged. We'll notify you before your trial ends, and you can choose to upgrade to a paid plan or cancel your account.",
	},
];

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<section className="bg-white py-16 md:py-24">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
					Frequently Asked Questions
				</h2>
				<div className="max-w-3xl mx-auto">
					{faqs.map((faq, index) => (
						<FAQItem
							key={index}
							question={faq.question}
							answer={faq.answer}
							isOpen={openIndex === index}
							onClick={() => setOpenIndex(openIndex === index ? null : index)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
