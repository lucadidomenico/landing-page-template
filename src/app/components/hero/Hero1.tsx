import Image from "next/image";

export default function Hero1() {
	return (
		<div className="flex flex-col md:flex-row items-center">
			<div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6 leading-tight">
					Medium length display headline
				</h1>
				<p className="text-xl text-gray-600 mb-8 leading-relaxed">
					Separated they live in Bookmarks right at the coast of the famous
					Semantics, large language
				</p>
				<div className="flex items-center space-x-4">
					<button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 shadow-lg">
						Action
					</button>
					<p className="text-sm text-gray-500">
						Join 5,000+ satisfied customers
					</p>
				</div>
			</div>
			<div className="w-full md:w-1/2">
				<Image
					src="/images/heroimage.svg"
					alt="ACME Solutions Illustration"
					width={600}
					height={600}
					className="w-full h-auto"
				/>
			</div>
		</div>
	);
}
