import { useContext } from 'react';
import './Shop.scss'
import { CategoriesContext } from '../../contexts/categoriesContext';
import ProductsPreview from '../../components/ProductsPreview/ProductsPreview';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <div className='shop-container'>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <ProductsPreview
                        key={title}
                        title={title}
                        products={products}
                    />
                })
            }

        </div>
    )
}

export default Shop