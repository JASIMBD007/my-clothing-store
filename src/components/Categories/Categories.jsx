import React from 'react'
import Category from '../Category/Category'

const Categories = () => {

    const categories = [
        {
            id: 1,
            title: 'Hats',
        },
        {
            id: 2,
            title: 'Jackets',
        },
        {
            id: 3,
            title: 'Sneakers',
        },
        {
            id: 4,
            title: 'Women',
        },
        {
            id: 5,
            title: 'Men',
        },
    ]
    return (
        <div className='categories-container'>
            {
                categories.map(category => <Category
                    key={category.id}
                    category={category}
                />)
            }
        </div>
    )
}

export default Categories