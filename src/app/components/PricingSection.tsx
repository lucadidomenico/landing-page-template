import PricingCard from "./PricingCard";
import { Rocket, Zap, Building } from "lucide-react";

const pricingPlans = [
	{
		title: "Basic",
		price: "$29",
		description: "Perfect for small businesses and startups",
		features: [
			{ name: "Up to 5 users", included: true },
			{ name: "10GB storage", included: true },
			{ name: "Basic reporting", included: true },
			{ name: "Email support", included: true },
			{ name: "API access", included: false },
			{ name: "Custom integrations", included: false },
		],
		icon: Rocket,
		ctaText: "Start Basic Plan",
	},
	{
		title: "Pro",
		price: "$79",
		description: "Ideal for growing companies",
		features: [
			{ name: "Up to 20 users", included: true },
			{ name: "50GB storage", included: true },
			{ name: "Advanced reporting", included: true },
			{ name: "Priority email support", included: true },
			{ name: "API access", included: true },
			{ name: "Custom integrations", included: false },
		],
		isPopular: true,
		icon: Zap,
		ctaText: "Start Pro Plan",
	},
	{
		title: "Enterprise",
		price: "$199",
		description: "For large-scale operations",
		features: [
			{ name: "Unlimited users", included: true },
			{ name: "500GB storage", included: true },
			{ name: "Custom reporting", included: true },
			{ name: "24/7 phone support", included: true },
			{ name: "Advanced API access", included: true },
			{ name: "Custom integrations", included: true },
		],
		icon: Building,
		ctaText: "Contact Sales",
	},
];

export default function PricingSection() {
	return (
		<section className="bg-gray-50 py-20">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
					Choose the Right Plan for You
				</h2>
				<p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
					Select a plan that fits your needs. All plans come with a 30-day
					money-back guarantee.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{pricingPlans.map((plan, index) => (
						<div key={index} className="flex flex-col items-center h-full">
							<plan.icon className="w-12 h-12 text-blue-500 mb-4" />
							<div className="w-full h-full">
								<PricingCard {...plan} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
