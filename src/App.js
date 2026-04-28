import { useState } from "react";
import recipes from "./recipe";
import RecipeCard from "./components/RecipeCard";
import FavoritesSection from "./components/FavoritesSection";
import SearchBar from "./components/SearchBar";
import TopRecipes from "./components/TopRecipes";
import "./styles.css";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [sortNewest, setSortNewest] = useState(false);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const favoriteRecipes = recipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  const filteredRecipes = recipes.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedRecipes = [...filteredRecipes];

  if (sortNewest) {
    displayedRecipes.sort(
      (a, b) => new Date(b.createDate) - new Date(a.createDate)
    );
  }

  return (
    <div className="app">
      <div className="top-section">
        <div className="left-panel">
          <SearchBar search={search} setSearch={setSearch} />
          <FavoritesSection favoriteRecipes={favoriteRecipes} />
          <button className="sort-btn" onClick={() => setSortNewest(!sortNewest)}>
            Sort by Create Date
          </button>
        </div>

        <TopRecipes recipes={recipes} />
      </div>

      <div className="recipe-container">
        {displayedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            name={recipe.name}
            description={recipe.description}
            cookTime={recipe.cookTime}
            image={recipe.image}
            ingredients={recipe.ingredients}
            rating={recipe.rating}
            isFavorite={favorites.includes(recipe.id)}
            toggleFavorite={() => toggleFavorite(recipe.id)}
          />
        ))}
      </div>
    </div>
  );
}
