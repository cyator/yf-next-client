import { Product } from '../interfaces';
import Card from './Card';

interface Props {
	products: Product[];
	title: String;
}
export default function Products({ products, title }: Props) {
	return (
		<div>
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
					{title}
				</h2>

				<div className="bg-white">
					<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
						<h2 className="sr-only">Products</h2>

						<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
							{products.map((product) => (
								<Card key={product.product_id} product={product} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
