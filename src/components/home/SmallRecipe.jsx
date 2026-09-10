import sr1 from "@/assets/img/bg-img/sr1.jpg";
import sr2 from "@/assets/img/bg-img/sr2.jpg";
import sr3 from "@/assets/img/bg-img/sr3.jpg";
import sr4 from "@/assets/img/bg-img/sr4.jpg";
import sr5 from "@/assets/img/bg-img/sr5.jpg";
import sr6 from "@/assets/img/bg-img/sr6.jpg";
import sr7 from "@/assets/img/bg-img/sr7.jpg";
import sr8 from "@/assets/img/bg-img/sr8.jpg";
import sr9 from "@/assets/img/bg-img/sr9.jpg";

const recipes = [
    { img: sr1, title: "Homemade italian pasta" },
    { img: sr2, title: "Baked Bread" },
    { img: sr3, title: "Scalops on salt" },
    { img: sr4, title: "Fruits on plate" },
    { img: sr5, title: "Macaroons" },
    { img: sr6, title: "Chocolate tart" },
    { img: sr7, title: "Berry Desert" },
    { img: sr8, title: "Zucchini Grilled on peper" },
    { img: sr9, title: "Chicken Salad" },
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

function SmallRecipe() {
    return (
        <section className="small-receipe-area section-padding-80-0">
            <div className="container">
                <div className="row">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-4">
                            <div className="single-small-receipe-area d-flex">
                                <div className="receipe-thumb">
                                    <img src={recipe.img} alt={recipe.title} />
                                </div>
                                <div className="receipe-content">
                                    <span>January 04, 2018</span>
                                    <a href="#">
                                        <h5>{recipe.title}</h5>
                                    </a>
                                    <StarRating />
                                    <p>2 Comments</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SmallRecipe;