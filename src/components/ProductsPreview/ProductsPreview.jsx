import React from 'react';
import './ProductsPreview.scss';
import Product from '../../Pages/Product/Product';
import { Link } from 'react-router-dom';

const ProductsPreview = ({ title, products }) => {
    return (
        <div className='product-preview-container'>
            <h2>
                <Link className='title' to={title}>{title ? title.toUpperCase() : ''}</Link>
            </h2>
            <div className='preview'>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
            </div>
        </div>
    );
};

export default ProductsPreview;
