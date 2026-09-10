// CuisineBrowser.jsx — original style (same pattern as CategoryBrowser)
import { useState } from "react";
import RecipeCard from "../recipes/RecipeCard";

const cuisines = ["Indian", "Italian", "Mexican", "Chinese", "American", "French"]; 
function CuisineBrowser() {
    const [activeCuisine, setActiveCuisine] = useState(null);
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCuisineClick = async (cuisine) => {
        setActiveCuisine(cuisine);
        setLoading(true);
        try {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`
            );
            const data = await res.json();
            setRecipes(data.meals);
        } catch (err) {
            console.error("Cuisine fetch failed:", err);
        } finally {
            setLoading(false);
        }
    }; 
    return (
        <section className="best-receipe-area" id="explore-cuisine">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h3>Explore By Cuisine</h3>
                        </div>
                    </div>
                </div> 
                <div
                    className="row"
                    style={{ marginBottom: "30px", gap: "10px", justifyContent: "center" }}>
                    {cuisines.map((cuisine) => (
                        <button
                            key={cuisine}
                            onClick={() => handleCuisineClick(cuisine)}
                            className="btn delicious-btn"
                            style={{
                                opacity: activeCuisine === cuisine ? 1 : 0.6,
                            }}>
                            {cuisine}
                        </button>
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
                                    image={meal.strMealThumb}/>
                            ))
                        ) : (
                            <p>No recipes found for this cuisine.</p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default CuisineBrowser;