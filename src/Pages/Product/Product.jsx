import Buttons from '../../components/Buttons/Buttons';
import './Product.scss';


const Product = ({ product }) => {
    const { name, price, imageUrl } = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Buttons buttonType='inverted'>ADD TO CART</Buttons>
        </div>
    )
}

export default Product