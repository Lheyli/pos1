import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" to="/">
                        IOL Store
                    </a>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link active" aria-current="page"
                                    to="/home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link"
                                    to="/products">
                                    Products
                                </a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link"
                                    to="/about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link"
                                    to="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <a to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i> Login </a>
                            <a to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i> Register 
                                </a>
                            <a to="/cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i> Cart (0)
                                </a>
                        </div>
                    </div>
                </div>
            </nav>
         
        </div>
        
    );
}

export default Navbar;