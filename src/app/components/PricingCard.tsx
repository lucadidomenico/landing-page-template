import { Check, X } from "lucide-react";

interface Feature {
	name: string;
	included: boolean;
}

interface PricingCardProps {
	title: string;
	price: string;
	description: string;
	features: Feature[];
	isPopular?: boolean;
	ctaText: string;
}

export default function PricingCard({
	title,
	price,
	description,
	features,
	isPopular = false,
	ctaText,
}: PricingCardProps) {
	return (
		<div
			className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full ${
				isPopular ? "border-2 border-blue-500" : ""
			}`}
		>
			{isPopular && (
				<div className="bg-blue-500 text-white text-center py-2 px-4 text-sm font-semibold">
					Most Popular
				</div>
			)}
			<div className="p-6 flex-grow flex flex-col">
				<h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
				<div className="mb-4">
					<span className="text-4xl font-bold text-gray-900">{price}</span>
					<span className="text-gray-600 ml-2">/month</span>
				</div>
				<p className="text-gray-600 mb-6">{description}</p>
				<ul className="mb-6 space-y-3 flex-grow">
					{features.map((feature, index) => (
						<li key={index} className="flex items-start">
							{feature.included ? (
								<Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
							) : (
								<X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
							)}
							<span
								className={`text-gray-600 ${
									!feature.included && "line-through text-gray-400"
								}`}
							>
								{feature.name}
							</span>
						</li>
					))}
				</ul>
				<button
					className={`w-full py-3 px-4 rounded-md transition-colors duration-300 text-lg font-semibold ${
						isPopular
							? "bg-blue-600 text-white hover:bg-blue-700"
							: "bg-gray-200 text-gray-800 hover:bg-gray-300"
					}`}
				>
					{ctaText}
				</button>
			</div>
		</div>
	);
}
