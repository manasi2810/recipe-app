import insta1 from "@/assets/img/bg-img/insta1.jpg";
import insta2 from "@/assets/img/bg-img/insta2.jpg";
import insta3 from "@/assets/img/bg-img/insta3.jpg";
import insta4 from "@/assets/img/bg-img/insta4.jpg";
import insta5 from "@/assets/img/bg-img/insta5.jpg";
import insta6 from "@/assets/img/bg-img/insta6.jpg";
import insta7 from "@/assets/img/bg-img/insta7.jpg";

const images = [insta1, insta2, insta3, insta4, insta5, insta6, insta7]; 
function InstagramFeed() {
    return (
        <div className="follow-us-instagram">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5>Follow Us Instragram</h5>
                    </div>
                </div>
            </div> 
            <div className="insta-feeds d-flex flex-wrap">
                {images.map((img, index) => (
                    <div key={index} className="single-insta-feeds">
                        <img src={img} alt={`Instagram post ${index + 1}`} />
                        <div className="insta-icon">
                            <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}  
export default InstagramFeed;