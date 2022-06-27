import Card from "../layouts/card";

const RecipeList = ({data}) => {
    let list = data.map( recipe => {
        return <Card
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            img={recipe.image}
            source={recipe.source}
            sourceURL={recipe.source_url}
            servings={recipe.servings}
            ingredients={recipe.ingredientLines}
            nutrients={recipe.nutrients}
        />
    });

    return ( 
    <div className="recipeList">
        {list}
    </div> );
}

export default RecipeList;