import React from 'react';
import './ProductsPreview.scss';
import Product from '../../Pages/Product/Product';

const ProductsPreview = ({ title, products }) => {
    return (
        <div className='product-preview-container'>
            <h2>
                <span className='title'>{title ? title.toUpperCase() : ''}</span>
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
