import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './styles.css';
import logo from "@/assets/dashboard_icon.svg";

const LandingPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleLoginClick = () => {
        navigate('/login'); // Navigate to the login page
    };

    const handleAboutClick=() => {
        navigate('/about')
    }

    return (
        <div>
            <div className="logo-container">
                    <img className="logo" src={logo} alt =""/>
                    <span className="logo-text">MedDash</span>
                </div>
            <div className="navbar">
                <div className="navbar-links">
                    <li class="dropdown">
                        <a href="#" class="dropbtn">About</a>
                        <div class="dropdown-content">
                            <a href="#introduction">Introduction</a>
                            <a href="#background">Background</a> 
                            <a href="#datacollection">Data Collection</a>
                            <a href="#methods">Methods</a>     
                        </div>
                    </li>
                    <li> <a href="#goals">Goals</a> <a href="#ourteam">Our Team</a> <a href="#faq">FAQ</a> <button className="button" onClick={handleLoginClick}>Login</button></li> 
                </div>
            </div>
            <div className="container">
                <h1 className="title">Welcome to MedDash!</h1>
                <p className="paragraph">MedDash aims to consolidate multiple sources of health data into a comprehensive medical dashboard</p>
            </div>

            <section id="about">
                <h2>About</h2>
                <div class="subsection" id = "introduction">
                    <h3>Introduction</h3>
                    <p>Scripts.com</p>
                </div>
                <div class="subsection" id = "background">
                    <h3>Background</h3>
                    <p>Content for Subsection 2...</p>
                </div>
                <div class="subsection" id = "datacollection">
                    <h3>Data Collection</h3>
                    <p>Content for Subsection 1...</p>
                </div>
                <div class="subsection" id = "methods">
                    <h3>Methods</h3>
                    <p>Content for Subsection 2...</p>
                </div>
            </section> 

            <section id="goals">
                <h2>Goals Section</h2>
                <p>Content for the Goals section...</p>
            </section>

            <section id="ourteam">
                <h2>Our Team Section</h2>
                <p>Content for the Our Team section...</p>
            </section>

            <section id="faq">
                <h2>FAQs</h2>
                <div className="faq">
                <details>
                    <summary>Question 1?</summary>
                    <p>Answer 1.</p>
                </details>
                <details>
                    <summary>Question 2?</summary>
                    <p>Answer 2.</p>
                </details>
            {/* Add more questions and answers as needed */}
                 </div>
            </section>
        </div>
    );
};

export default LandingPage;


