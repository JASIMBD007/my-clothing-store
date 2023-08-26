import CategoryItems from '../CategoryItems/CategoryItems';
import './Directory.scss';
const Directory = ({ categories }) => {
    return (
        <div className='directory-container'>
            {categories.map(category => (
                <CategoryItems
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    )
}

export default Directory 