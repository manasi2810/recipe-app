import { useEffect } from "react";
const $ = window.jQuery;
import logo from "@/assets/img/core-img/logo.png";

function Navbar({ onSearchClick }) {
    useEffect(() => {
        if ($.fn.classyNav) {
            $("#deliciousNav").classyNav();
        }
    }, []);

    return (
        <header className="header-area">
            <div className="delicious-main-menu">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">
                        <nav
                            className="classy-navbar justify-content-between"
                            id="deliciousNav">
                            <a className="nav-brand" href="/">
                                <img src={logo} alt="Delicious" />
                            </a> 
                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div> 
                            <div className="classy-menu">
                                <div className="classycloseIcon">
                                    <div className="cross-wrap">
                                        <span className="top"></span>
                                        <span className="bottom"></span>
                                    </div>
                                </div> 
                                <div className="classynav">
                                    <ul>
                                        <li className="active"><a href="/">Home</a></li>
                                        <li><a href="#popular-recipes">Recipes</a></li>
                                        <li><a href="#popular-categories">Categories</a></li>
                                        <li><a href="#latest-recipes">Popular</a></li>
                                        <li><a href="#my-fridge">My Fridge</a></li>
                                        <li><a href="#meal-planner">Meal Planner</a></li>
                                        <li><a href="#favorites">Favorites</a></li>
                                    </ul> 
                                    <div
                                        className="search-btn"
                                        onClick={onSearchClick}
                                        style={{ cursor: "pointer" }}>
                                        <i className="fa fa-search"
                                            aria-hidden="true"> 
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;