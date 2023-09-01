import DirectoryItems from '../DirectoryItems/DirectoryItems';
import './Directory.scss';
const Directory = ({ categories }) => {
    return (
        <div className='directory-container'>
            {categories.map(category => (
                <DirectoryItems
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    )
}

export default Directory 