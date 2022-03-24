import Card from './Card';
import { Product } from '../interfaces';

interface Props {
	products: Product[];
}

function Products({ products }: Props) {
	return (
		<>
			{products && products instanceof Array ? (
				products.map((product) => (
					<Card key={product.product_id} product={product} />
				))
			) : (
				<div className="animate-pulse">loading products</div>
			)}
		</>
	);
}

export default Products;
