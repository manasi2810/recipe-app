import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const $ = window.jQuery;
import bg1 from "@/assets/img/bg-img/bg1.jpg";
import bg6 from "@/assets/img/bg-img/bg6.jpg";
import bg7 from "@/assets/img/bg-img/bg7.jpg";

const slides = [
    { bg: bg1 },
    { bg: bg6 },
    { bg: bg7 },
];

function Hero({ onSearch }) {
    const [query, setQuery] = useState("");
    const [heroRecipeId, setHeroRecipeId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if ($.fn.owlCarousel) {
            const welcomeSlide = $(".hero-slides"); 
            welcomeSlide.owlCarousel({
                items: 1,
                margin: 0,
                loop: true,
                nav: true,
                navText: ["Prev", "Next"],
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                smartSpeed: 1000,
            }); 
            welcomeSlide.on("translate.owl.carousel", function () {
                const slideLayer = $("[data-animation]");
                slideLayer.each(function () {
                    const anim_name = $(this).data("animation");
                    $(this).removeClass("animated " + anim_name).css("opacity", "0");
                });
            }); 
            welcomeSlide.on("translated.owl.carousel", function () {
                const slideLayer = welcomeSlide.find(".owl-item.active").find("[data-animation]");
                slideLayer.each(function () {
                    const anim_name = $(this).data("animation");
                    $(this).addClass("animated " + anim_name).css("opacity", "1");
                });
            }); 
            $("[data-delay]").each(function () {
                const anim_del = $(this).data("delay");
                $(this).css("animation-delay", anim_del);
            });
        }
    }, []); 
    // Fetch a real recipe matching the Hero's headline so "See Recipe" has somewhere to go
    useEffect(() => {
        const fetchHeroRecipe = async () => {
            try {
                const res = await fetch(
                    "https://www.themealdb.com/api/json/v1/1/search.php?s=burger"
                );
                const data = await res.json();
                if (data.meals && data.meals.length > 0) {
                    setHeroRecipeId(data.meals[0].idMeal);
                }
            } catch (err) {
                console.error("Failed to fetch hero recipe:", err);
            }
        };
        fetchHeroRecipe();
    }, []); 
    const handleSeeRecipeClick = (e) => {
        e.preventDefault();
        if (heroRecipeId) {
            navigate(`/recipe/${heroRecipeId}`);
        }
    }; 
    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onSearch) {
            onSearch(query);
        }
    }; 
    const pauseAutoplay = () => {
        if ($.fn.owlCarousel) {
            $(".hero-slides").trigger("stop.owl.autoplay");
        }
    }; 
    const resumeAutoplay = () => {
        if ($.fn.owlCarousel) {
            $(".hero-slides").trigger("play.owl.autoplay", [5000]);
        }
    }; 
    return (
        <section className="hero-area">
            <div className="hero-slides owl-carousel">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="single-hero-slide bg-img"
                        style={{ backgroundImage: `url(${slide.bg})` }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div
                                        className="hero-slides-content"
                                        data-animation="fadeInUp"
                                        data-delay="100ms">
                                        <h2 data-animation="fadeInUp" data-delay="300ms">
                                            Delicios Homemade Burger
                                        </h2>
                                        <p data-animation="fadeInUp" data-delay="700ms">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Cras tristique nisl vitae luctus sollicitudin.
                                            Fusce consectetur sem eget dui tristique, ac posuere
                                            arcu varius.
                                        </p> 
                                          <a  href="#"
                                            onClick={handleSeeRecipeClick}
                                            className="btn delicious-btn"
                                            data-animation="fadeInUp"
                                            data-delay="1000ms">
                                            See Receipe
                                        </a> 
                                        <form
                                            className="hero-search-form"
                                            onSubmit={handleSubmit}
                                            onClick={(e) => e.stopPropagation()}
                                            onMouseDown={(e) => e.stopPropagation()}
                                            data-animation="fadeInUp"
                                            data-delay="1200ms"
                                            style={{
                                                marginTop: "20px",
                                                display: "flex",
                                                gap: "8px",
                                                maxWidth: "400px",
                                            }}>
                                            <input
                                                type="text"
                                                placeholder="Search recipes..."
                                                value={query}
                                                onChange={(e) => setQuery(e.target.value)}
                                                onFocus={pauseAutoplay}
                                                onBlur={resumeAutoplay}
                                                style={{
                                                    padding: "10px 14px",
                                                    flex: 1,
                                                    border: "none",
                                                    borderRadius: "4px",
                                                }}/>
                                            <button type="submit" className="btn delicious-btn">
                                                Search
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Hero;