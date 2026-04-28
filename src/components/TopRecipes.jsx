function TopRecipes({ recipes }) {
  const top3Recipes = [...recipes]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="top-recipes">
      <h3>Top 3</h3>

      <div className="top-recipes-list">
        {top3Recipes.map((recipe) => (
          <div key={recipe.id} className="top-recipe-card">
            <h4>{recipe.name}</h4>
            <p>{recipe.rating}⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRecipes;
