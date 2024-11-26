export default async function RecipeDetails({ params }: { params: { id: string } }) {
    const { id } = await params; 

    return (
        <main>
            <h1>{id}</h1>
        </main>
    );
}

