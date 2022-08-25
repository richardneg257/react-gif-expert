import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...categories, 'Valorant']);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            {
                categories.map((cat) => (
                    <GifGrid key={cat} category={cat} />
                ))
            }
        </>
    )
}

