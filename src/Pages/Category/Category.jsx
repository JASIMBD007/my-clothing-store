import React, { Fragment, useContext, useEffect, useState } from 'react';
import './Category.scss';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categoriesContext';
import Product from '../Product/Product';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products &&
                    products.map((product) => <Product key={product.id} product={product} />)
                }
            </div>
        </Fragment>
    )
}

export default Category