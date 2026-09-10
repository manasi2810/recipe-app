const API_URL = "https://www.themealdb.com/api/json/v1/1";

/**
 * Search recipes by name
 */
export async function searchRecipes(query) {
    const response = await fetch(
        `${API_URL}/search.php?s=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch recipes");
    }

    const data = await response.json();

    return data.meals || [];
}

/**
 * Get recipe by ID
 */
export async function getRecipeById(id) {
    const response = await fetch(
        `${API_URL}/lookup.php?i=${id}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch recipe");
    }

    const data = await response.json();

    return data.meals ? data.meals[0] : null;
}