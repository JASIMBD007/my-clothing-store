import { useContext } from 'react';
import Button from '../../components/Button/Button';
import './Product.scss';
import { CartContext } from '../../contexts/cartContext';


const Product = ({ product }) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartContext);
    const addProductToCart = () => addItemToCart(product);
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>ADD TO CART</Button>
        </div >
    )
}

export default Product