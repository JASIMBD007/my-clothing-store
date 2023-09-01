import { useContext, Fragment } from 'react';
import Product from '../Product/Product';
import './Shop.scss'
import { CategoriesContext } from '../../contexts/categoriesContext';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((title) => (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className='products-container'>
                            {
                                categoriesMap[title].map(product => <Product
                                    key={product.id}
                                    product={product}
                                />
                                )}
                        </div>
                    </Fragment>
                ))
            }

        </Fragment>
    )
}

export default Shop