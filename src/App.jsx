import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import TopCategory from './components/home/TopCategory'
import BestRecipe from './components/home/BestRecipe'
import Cta from './components/home/Cta'
import SmallRecipe from './components/home/SmallRecipe'
import QuoteNewsletter from './components/home/QuoteNewsletter'
import InstagramFeed from './components/home/InstagramFeed'

import CategoryBrowser from './components/recipes/CategoryBrowser'
import CuisineBrowser from './components/recipes/CuisineBrowser'
import FridgeSearch from './components/recipes/FridgeSearch'
import RecipeCard from './components/recipes/RecipeCard'
import RecipeDetail from './components/recipes/RecipeDetail'

import Favorites from './components/favorites/Favorites'
 

function Home({ results, handleSearch }) {
  return (
    <>
      <Hero onSearch={handleSearch} />

      {results !== null && (
        <section className="best-receipe-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">
                  <h3>Search Results</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {results && results.length > 0 ? (
                results.map((meal) => (
                  <RecipeCard
                    key={meal.idMeal}
                    id={meal.idMeal}
                    title={meal.strMeal}
                    image={meal.strMealThumb}
                  />
                ))
              ) : (
                <p style={{ margin: "40px auto" }}>No recipes found 😥 Try another name!</p>
              )}
            </div>
          </div>
        </section>
      )}
      <CategoryBrowser />
      <CuisineBrowser />
      <FridgeSearch />
      <TopCategory />
      <BestRecipe />
      <Cta />
      <SmallRecipe />
      <Favorites />
      <QuoteNewsletter />
      <InstagramFeed />
    </>
  );
}

function App() {
  const [results, setResults] = useState(null)

  const handleSearch = async (query) => {
    if (!query.trim()) return;
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      const data = await res.json()
      setResults(data.meals) // null if no matches
    } catch (err) {
      console.error("Search failed:", err)
    }
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home results={results} handleSearch={handleSearch} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App