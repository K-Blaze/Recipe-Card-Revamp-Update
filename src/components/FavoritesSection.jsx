function FavoritesSection({ favoriteRecipes }) {
  return (
    <div className="favorites-section">
      <h2>Favorites</h2>
      {favoriteRecipes.length > 0 ? (
        <div className="favorites-list">
          {favoriteRecipes.map((recipe) => (
            <div key={recipe.id} className="favorite-card">
              <h4>{recipe.name}</h4>
            </div>
          ))}
        </div>
      ) : (
        <p>Favorites are empty</p>
      )}
    </div>
  );
}

export default FavoritesSection;
