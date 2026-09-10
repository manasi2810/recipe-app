import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import { searchRecipes } from "../../services/recipeApi";

function Recipes() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const search = searchParams.get("search") || "";

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRecipes = async () => {
            if (!search.trim()) {
                setRecipes([]);
                return;
            }

            setLoading(true);
            setError("");

            try {
                const data = await searchRecipes(search);
                setRecipes(data);
            } catch (err) {
                console.error(err);
                setError("Failed to load recipes.");
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [search]);

    return (
        <section className="best-receipe-area">
            <div className="container"> 
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h3>
                                {search
                                    ? `Search results for "${search}"`
                                    : "Recipes"}
                            </h3>
                        </div>
                    </div>
                </div> 
                {loading && (
                    <div className="text-center">
                        <p>Loading recipes...</p>
                    </div>
                )}

                {error && (
                    <div className="text-center">
                        <p>{error}</p>
                    </div>
                )}

                {!loading && !error && recipes.length === 0 && search && (
                    <div className="text-center">
                        <p>No recipes found for "{search}".</p>
                    </div>
                )}

                <div className="row"> 
                   {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                        onClick={() =>
                            navigate(`/recipes/${recipe.id}`)
                        }
                    />
                ))} 

                </div> 
            </div>
        </section>
    );
}

export default Recipes;