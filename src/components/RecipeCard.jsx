import { useState } from "react";

export default function RecipeCard({
  name,
  description,
  cookTime,
  image,
  ingredients,
  rating,
  difficulty,
  isFavorite,
  toggleFavorite,
}) {
  const [showIngredients, setShowIngredients] = useState(false);

  return (
    <div className="recipe-card">
      <img src={image} alt={name} />

      <div className="card-content">
        <h3>{name}</h3>
        <p>{description}</p>

        <p><strong>Cook Time:</strong> {cookTime}</p>

        {/* ⭐ Rating */}
        <p>
          <strong>Rating:</strong>{" "}
          {"⭐".repeat(rating)}
        </p>

        {/* 🔥 Difficulty (REQUIRED FOR A GRADE) */}
        <p>
          <strong>Difficulty:</strong> {difficulty}
        </p>

        {/* ❤️ Favorite Button */}
        <button onClick={toggleFavorite}>
          {isFavorite ? "💔 Remove Favorite" : "❤️ Add to Favorites"}
        </button>

        {/* 🍴 Show/Hide Ingredients */}
        <button onClick={() => setShowIngredients(!showIngredients)}>
          {showIngredients ? "Hide Ingredients" : "Show Ingredients"}
        </button>

        {showIngredients && (
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
