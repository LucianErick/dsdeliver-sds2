import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import {Product} from './Types';

type Props = {
    products: Product [];
    selectedProducts: Product[];
    onSelectProduct: (Product: Product) => void;

}

function ProductsList({products, selectedProducts,onSelectProduct}: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-content">
                {products.map(product => (
                    <ProductCard key={product.id} product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts, product)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsList;