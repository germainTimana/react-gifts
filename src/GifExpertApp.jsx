import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

useState
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories ])
    }
    console.log(categories);
    return (
        <>
            <h1> GifExpertApp</h1>
            < AddCategory
                onNewValueCategory={(value) => onAddCategory(value)}
            />

            {categories.map(category => (
                < GifGrid
                    key={category}
                    category={category} />
            )
            )}

        </>

    )
}

