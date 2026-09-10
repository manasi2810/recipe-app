// Favorites.jsx
import { useState, useEffect } from "react";
import RecipeCard from "../recipes/RecipeCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <section className="best-receipe-area" id="favorites">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h3>❤️ Your Favorites</h3>
            </div>
          </div>
        </div> 
        <div className="row">
          {favorites.length > 0 ? (
            favorites.map((meal) => (
              <RecipeCard
                key={meal.id}
                id={meal.id}
                title={meal.title}
                image={meal.image}
              />
            ))
          ) : (
            <p style={{ margin: "20px auto" }}>
              No favorites yet — tap the 🤍 on any recipe to save it here.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Favorites;