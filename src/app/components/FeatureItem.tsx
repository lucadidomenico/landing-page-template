function FeatureItem({
	icon,
	title,
	description,
}: {
	icon: React.ReactNode;
	title: string;
	description: string;
}) {
	return (
		<div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1">
			<div className="mb-4 bg-blue-100 p-3 rounded-full">{icon}</div>
			<h3 className="text-xl font-semibold text-blue-600 mb-3">{title}</h3>
			<p className="text-gray-600 leading-relaxed">{description}</p>
		</div>
	);
}

export default FeatureItem;
