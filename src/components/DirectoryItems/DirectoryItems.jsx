import { useNavigate } from 'react-router-dom';
import './DirectoryItemsStyles.jsx';
import { BackgroundImage, DirectoryItemBody, DirectoryItemContainer } from './DirectoryItemsStyles.jsx';

const DirectoryItems = ({ category }) => {

    const { title, imageUrl, route } = category;
    const navigate = useNavigate();

    const handleNavigate = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={handleNavigate} >
            <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }}>
            </BackgroundImage>
            <DirectoryItemBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    )
}

export default DirectoryItems