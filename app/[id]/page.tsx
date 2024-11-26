export default function RecipeDetails({params}: {params: {id: string}}) {

    return (
        <main>
            <h1>{params.id}</h1>    
        </main>
    )

}