import { Fragment, useContext } from 'react';
import './CategoriesPreview.scss'
import { CategoriesContext } from '../../contexts/categoriesContext';
import ProductsPreview from '../../components/ProductsPreview/ProductsPreview';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default CategoriesPreview