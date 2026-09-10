import { useState } from "react";
import RecipeCard from "../recipes/RecipeCard";

const categories = [
  { name: "Breakfast", icon: "🍳" },
  { name: "Chicken", icon: "🍗" },
  { name: "Dessert", icon: "🍰" },
  { name: "Seafood", icon: "🦐" },
  { name: "Vegetarian", icon: "🥗" },
  { name: "Pasta", icon: "🍝" },
];

function CategoryBrowser() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCategoryClick = async (category) => {
    setActiveCategory(category);
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await res.json();
      setRecipes(data.meals);
    } catch (err) {
      console.error("Category fetch failed:", err);
    } finally {
      setLoading(false);
    }
  }; 
  return (
    <section className="top-catagory-area section-padding-80-0" id="popular-categories">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h3>Popular Categories</h3>
            </div>
          </div>
        </div> 
        <div
          className="row"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
            gap: "16px",
            marginBottom: "30px",
          }}>
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategoryClick(cat.name)}
              style={{
                cursor: "pointer",
                textAlign: "center",
                padding: "20px 10px",
                borderRadius: "16px",
                background: activeCategory === cat.name ? "#fff3e0" : "#fafafa",
                border:
                  activeCategory === cat.name
                    ? "2px solid #ff7a00"
                    : "2px solid transparent",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transition: "all 0.2s ease",
              }}>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>{cat.icon}</div>
              <div style={{ fontWeight: 600, fontSize: "14px" }}>{cat.name}</div>
            </div>
          ))}
        </div> 
        {loading && <p>Loading recipes...</p>} 
        {recipes && (
          <div className="row">
            {recipes.length > 0 ? (
              recipes.slice(0, 6).map((meal) => (
                <RecipeCard
                  key={meal.idMeal}
                  id={meal.idMeal}
                  title={meal.strMeal}
                  image={meal.strMealThumb}
                />
              ))
            ) : (
              <p>No recipes found for this category.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
} 
export default CategoryBrowser;