import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        
            <footer className="py-3 mt-5">
                <ul className="nav justify-content-center border-bottom mb-3">
                    <Link className="nav-item nav-link px-2 text-body-secondary" to="/">Home</Link>
                    <Link className="nav-item nav-link px-2 text-body-secondary" to="/addbook">Review</Link>
                    <Link className="nav-item nav-link px-2 text-body-secondary" to="/contact us">Contact Us</Link>
                    
                    
                </ul>
                <p class="text-center justify-content-center" style={{marginLeft:"50px", marginRight:"50px"}}><h5>


Welcome to BookHub - Your Personal Book Review Hub!

Kitabu is your go-to web application for exploring and sharing book reviews. Whether you're a seasoned reader or just starting your literary journey, Kitabu offers a seamless platform to discover, review, and curate your favorite books.</h5></p>
                <p class="text-center text-body-secondary">© 2023 Laksh</p>
            </footer>
       
    )
}

export default Footer