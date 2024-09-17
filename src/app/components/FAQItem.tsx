interface FAQItemProps {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
}

export default function FAQItem({
	question,
	answer,
	isOpen,
	onClick,
}: FAQItemProps) {
	return (
		<div className="border-b border-gray-200 py-4">
			<button
				className="flex justify-between items-center w-full text-left"
				onClick={onClick}
			>
				<span className="text-lg font-medium text-blue-600">{question}</span>
				<svg
					className={`w-6 h-6 text-blue-600 transform transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>
			<div
				className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
					isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<p className="pb-4">{answer}</p>
			</div>
		</div>
	);
}
