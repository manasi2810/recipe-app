import { useNavigate } from "react-router-dom";
import FavoriteButton from "../favorites/FavoriteButton";

function RecipeCard({ id, title, image }) {
    const navigate = useNavigate();

    return (
        <div className="col-12 col-sm-6 col-lg-4">
            <div
                className="single-best-receipe-area mb-30"
                onClick={() => navigate(`/recipe/${id}`)}
                style={{ cursor: "pointer" }}>
                <div style={{ position: "relative" }}>
                    <img src={image} alt={title} />
                    <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                        <FavoriteButton id={id} title={title} image={image} />
                    </div>
                </div>
                <div className="receipe-content">
                    <h5>{title}</h5>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;