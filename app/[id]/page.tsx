"use client";

import { useRouter } from 'next/navigation';


export default function RecipeDetails({params}: {params: {id: string}}) {
    const router = useRouter();
    let {id, title, author, imageUrl, category, lastModified, ingredients, instructions} = router.query;

    return (
        <main>
            <h1>{title}</h1>    
        </main>
    )

}