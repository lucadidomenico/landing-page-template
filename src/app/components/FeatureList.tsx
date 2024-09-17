function FeatureList({ items }: { items: string[] }) {
	return (
		<ul className="space-y-4">
			{items.map((item, index) => (
				<li key={index} className="flex items-start">
					<svg
						className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-1"
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
					<span className="text-lg text-gray-700">{item}</span>
				</li>
			))}
		</ul>
	);
}

export default FeatureList;
