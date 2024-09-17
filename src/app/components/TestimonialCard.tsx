import Image from "next/image";

function TestimonialCard({
	quote,
	name,
	description,
	imageSrc,
}: {
	quote: string;
	name: string;
	description: string;
	imageSrc: string;
}) {
	return (
		<div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
			<div className="flex items-center mb-6">
				<div className="w-16 h-16 mr-4 relative overflow-hidden rounded-full">
					<Image src={imageSrc} alt={name} layout="fill" objectFit="cover" />
				</div>
				<div>
					<h4 className="font-semibold text-gray-800 text-lg">{name}</h4>
					<p className="text-sm text-gray-600">{description}</p>
				</div>
			</div>
			<p className="text-blue-600 mb-6 leading-relaxed italic">
				&quot;{quote}&quot;
			</p>
			<div className="flex space-x-2">
				<a
					href="#"
					className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
				>
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
					</svg>
				</a>
				<a
					href="#"
					className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
				>
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
					</svg>
				</a>
			</div>
		</div>
	);
}

export default TestimonialCard;
