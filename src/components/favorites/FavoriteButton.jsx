// src/components/FavoriteButton.jsx
import { useState, useEffect } from "react";

function FavoriteButton({ id, title, image }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(saved.some((r) => r.id === id));
  }, [id]);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];

    let updated;
    if (isFavorite) {
      updated = saved.filter((r) => r.id !== id);
    } else {
      updated = [...saved, { id, title, image }];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      onClick={toggleFavorite}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
        color: isFavorite ? "#ff4b4b" : "#ccc",
      }}
      aria-label="Toggle favorite"
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
}

export default FavoriteButton;