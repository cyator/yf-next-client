import Image, { ImageLoader } from 'next/image';
import Link from 'next/link';
import { Product } from '../interfaces';

interface Props {
	product: Product;
}

const myLoader: ImageLoader = ({ src }) => {
	return `${process.env.NEXT_PUBLIC_BASE_URL}/api/images/${src}`;
};

function Card({ product }: Props) {
	return (
		<div className="flex justify-center">
			<div className="rounded-lg shadow-lg bg-white max-w-sm">
				<Link href="#" data-mdb-ripple="true" data-mdb-ripple-color="light">
					<Image
						loader={myLoader}
						className="rounded-t-lg"
						alt="image"
						src={product.image}
						layout="responsive"
						width={463}
						height={261}
					/>
				</Link>
				<div className="p-6">
					<h5 className="text-gray-900 text-xl font-medium mb-2">
						{product.product_name}
					</h5>
					<p className="text-gray-700 text-base mb-4">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
					<button
						type="button"
						className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
					>
						Button
					</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
