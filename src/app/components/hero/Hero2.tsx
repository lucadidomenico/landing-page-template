export default function Hero2() {
	return (
		<div className="container mx-auto px-4 py-12 md:py-20">
			<div className="max-w-3xl mx-auto">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6 leading-tight text-center">
					Medium length display headline
				</h1>
				<p className="text-xl text-gray-600 mb-8 leading-relaxed text-center">
					Separated they live in Bookmarks right at the coast of the famous
					Semantics, large language
				</p>
				<p className="text-sm text-gray-500 mb-6 text-center">
					Join 5,000+ satisfied customers
				</p>
				<div className="flex justify-center">
					<button className="bg-blue-600 text-white text-xl px-10 py-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg w-full sm:w-auto">
						Action
					</button>
				</div>
			</div>
		</div>
	);
}
