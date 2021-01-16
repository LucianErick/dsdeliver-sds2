import {useEffect, useState} from 'react'
import { fetchProducts } from '../api'
import ProductsList from './ProductsList'
import StepsHeader from './StepsHeader'
import './styles.css'
import { Product } from './Types'

function Orders() {
    
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);
    
    return (
        <div className="orders-container">
            <div className="orders content">
                <StepsHeader/>
                <ProductsList products={products}/>
            </div>
        </div>
    )
}

export default Orders;