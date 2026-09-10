import { useState } from "react";
import RecipeCard from "../recipes/RecipeCard";

function FridgeSearch() {
    const [ingredient, setIngredient] = useState("");
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!ingredient.trim()) return;

        setLoading(true);
        try {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.trim()}`
            );
            const data = await res.json();
            setRecipes(data.meals);
        } catch (err) {
            console.error("Fridge search failed:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="my-fridge"
            style={{
                background: "#f7f5f0",
                padding: "60px 0",
            }}>
            <div className="container">
                <div
                    style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        textAlign: "center",
                        background: "#fff",
                        borderRadius: "10px",
                        padding: "40px 30px",
                        boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                    }}>
                    <div style={{ fontSize: "40px", marginBottom: "10px" }}>🧊</div>
                    <h3>What's in My Fridge?</h3>
                    <p style={{ color: "#777", marginBottom: "25px" }}>
                        Enter one ingredient you have and we'll find matching recipes!
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        style={{ display: "flex", gap: "10px" }}>
                        <input
                            type="text"
                            placeholder="e.g. chicken, tomato, rice..."
                            value={ingredient}
                            onChange={(e) => setIngredient(e.target.value)}
                            style={{
                                flex: 1,
                                padding: "12px 16px",
                                border: "1px solid #ddd",
                                borderRadius: "6px",
                            }}/>
                        <button type="submit" className="btn delicious-btn">
                            Find Recipes
                        </button>
                    </form>
                </div> 
                {loading && (
                    <p style={{ textAlign: "center", marginTop: "30px" }}>
                        Searching your fridge...
                    </p>
                )} 
                {recipes && (
                    <div className="row" style={{ marginTop: "40px" }}>
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
                            <p style={{ margin: "0 auto" }}>
                                No recipes found with that ingredient 😥
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}

export default FridgeSearch;