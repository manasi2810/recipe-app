import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../services/recipeApi";

function RecipeDetail() {
    const { id } = useParams();

    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                setLoading(true);
                setError("");

                const data = await getRecipeById(id);

                setRecipe(data);
            } catch (err) {
                console.error("Failed to fetch recipe:", err);
                setError("Failed to load recipe.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return <p style={{ margin: "60px auto", textAlign: "center" }}>Loading recipe...</p>;
    }

    if (error) {
        return <p style={{ margin: "60px auto", textAlign: "center" }}>{error}</p>;
    }

    if (!recipe) {
        return <p style={{ margin: "60px auto", textAlign: "center" }}>Recipe not found.</p>;
    }

    // Build ingredient list from TheMealDB's strIngredient1..20 / strMeasure1..20 fields
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(`${measure ? measure.trim() : ""} ${ingredient.trim()}`.trim());
        }
    }

    return (
        <section className="best-receipe-area" style={{ padding: "60px 0" }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <img
                            src={recipe.strMealThumb}
                            alt={recipe.strMeal}
                            style={{ width: "100%", borderRadius: "12px" }}
                        />
                    </div> 
                    <div className="col-12 col-lg-6">
                        <h2>{recipe.strMeal}</h2>

                        <p style={{ color: "#888" }}>
                            {recipe.strCategory} · {recipe.strArea}
                        </p> 
                        <h4 style={{ marginTop: "20px" }}>Ingredients</h4>
                        <ul>
                            {ingredients.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div> 
                <div className="row" style={{ marginTop: "30px" }}>
                    <div className="col-12">
                        <h4>Instructions</h4>
                        <p style={{ whiteSpace: "pre-line", lineHeight: "1.7" }}>
                            {recipe.strInstructions}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RecipeDetail;