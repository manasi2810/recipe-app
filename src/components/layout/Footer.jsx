import logo from "../../assets/img/core-img/logo.png";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-area">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
                        <div className="footer-social-info text-right">
                            <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div> 
                        <div className="footer-logo">
                            <a href="/">
                                <img src={logo} alt="Delicious" />
                            </a>
                        </div> 
                        <p>
                            Copyright &copy;{year} All rights reserved | This template
                            is made with{" "}
                            <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                            <a href="https://colorlib.com" target="_blank" rel="noreferrer">
                                Colorlib
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;