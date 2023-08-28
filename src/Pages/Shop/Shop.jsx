import { useContext } from 'react';
import { ProductsContext } from '../../contexts/productsContext';
import Product from '../Product/Product';
import './Shop.scss'

const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div className='products-container'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                />
                )}
        </div>
    )
}

export default Shop