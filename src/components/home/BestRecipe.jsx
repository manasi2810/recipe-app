import r1 from "@/assets/img/bg-img/r1.jpg";
import r2 from "@/assets/img/bg-img/r2.jpg";
import r3 from "@/assets/img/bg-img/r3.jpg";
import r4 from "@/assets/img/bg-img/r4.jpg";
import r5 from "@/assets/img/bg-img/r5.jpg";
import r6 from "@/assets/img/bg-img/r6.jpg";

const recipes = [
    { img: r1, title: "Sushi Easy Receipy" },
    { img: r2, title: "Homemade Burger" },
    { img: r3, title: "Vegan Smoothie" },
    { img: r4, title: "Calabasa soup" },
    { img: r5, title: "Homemade Breakfast" },
    { img: r6, title: "Healthy Fruit Desert" },
];

function StarRating() {
    return (
        <div className="ratings">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
        </div>
    );
}  
function BestRecipe() {
    return (
        <section className="best-receipe-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h3>The best Receipies</h3>
                        </div>
                    </div>
                </div> 
                <div className="row">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-4">
                            <div className="single-best-receipe-area mb-30">
                                <img src={recipe.img} alt={recipe.title} />
                                <div className="receipe-content">
                                    <a href="#">
                                        <h5>{recipe.title}</h5>
                                    </a>
                                    <StarRating />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BestRecipe;