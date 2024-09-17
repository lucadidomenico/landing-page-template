import React from "react";

interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
			<div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50">
				<div className="flex justify-end p-4">
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-600"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
				<nav className="px-4 py-2">
					{["Products", "Solutions", "Pricing", "Resources", "About"].map(
						(item) => (
							<a
								key={item}
								href="#"
								className="block py-2 text-gray-600 hover:text-blue-600 transition duration-300"
								onClick={onClose}
							>
								{item}
							</a>
						)
					)}
					<button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
						Get Started
					</button>
				</nav>
			</div>
		</div>
	);
};

export default MobileMenu;
