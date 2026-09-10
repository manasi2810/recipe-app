import bg2 from "@/assets/img/bg-img/bg2.jpg";
import bg3 from "@/assets/img/bg-img/bg3.jpg";

const categories = [
    { img: bg2, title: "Strawberry Cake" },
    { img: bg3, title: "Chinesse Noodles" },
];

function TopCategory() {
    return (
        <section className="top-catagory-area section-padding-80-0">
            <div className="container">
                <div className="row">
                    {categories.map((cat, index) => (
                        <div key={index} className="col-12 col-lg-6">
                            <div className="single-top-catagory">
                                <img src={cat.img} alt={cat.title} />
                                <div className="top-cta-content">
                                    <h3>{cat.title}</h3>
                                    <h6>Simple &amp; Delicios</h6>
                                    <a href="#" className="btn delicious-btn">
                                        See Full Receipe
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TopCategory;