import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './styles.css';
import logo from "@/assets/dashboard_icon.svg";
import teammember1 from '@/assets/team-member1.jpeg'
import teammember2 from '@/assets/team-member2.jpeg'
import teammember3 from '@/assets/team-member3.jpeg'
import teammember4 from '@/assets/team-member4.jpeg'
import teammember5 from '@/assets/team-member5.jpeg'
import teammember6 from '@/assets/team-member6.jpeg'
import teammember7 from '@/assets/team-member7.jpeg'
// import teammember8 from '@/assets/team-member8.jpeg'
import teammember9 from '@/assets/team-member9.jpeg'

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
                <div class="side-by-side">
                    <div class="left">
                        <h3>Mission Statement</h3>
                        <p>Left side text...</p>
                    </div>
                    <div class="right">
                        <h3>Vision Statement</h3>
                        <p>Right side text...</p>
                    </div>
                </div>
            </section>

            <section id="ourteam">
                <h2>Our Team Section</h2>
                <div class= "team-members-container">
                    <div className="team-member-container">
                        <img src={teammember1} alt="Team Member 1"/>
                        <div class="text-container">
                        <h3>Ruchi Kamboj</h3>
                        <p>Hi, I’m Ruchi Kamboj and I’m a fourth year Bioengineering: Bioinformatics major. Through this dashboard, I want to empower individuals with a clearer comprehension of their health data, enhancing patient-provider communication. My intended goal is to be a pediatrician. In my free time, I like to go on walks and bake.</p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src={teammember2} alt="Team Member 2"/>
                        <div class="text-container">
                            <h3>Jessica Fong</h3>
                            <p>Hi! I’m Jessica, a 4th year Bioengineering: Bioinformatics major. I want to use my computer science knowledge and coding skills to build projects that will improve people’s lives. In my free time, I like to watch anime, read, or go on a walk.</p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src={teammember3} alt="Team Member 3"/>
                        <div class="text-container">
                            <h3>Owen Guan</h3>
                            <p>I’m Owen a 4th year Bioengineering: Bioinformatics major. My career goal is to apply bioinformatics to health or biological data to create meaningful, practical quality of life improvements for patients and everyday people. In my free time, I enjoy socializing with friends about TV shows and movies, and going to the gym and video games.</p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src={teammember4} alt="Team Member 4"/>
                        <div class="text-container">
                            <h3>Melissa Osheroff</h3>
                            <p>Hello, my name is Melissa and I am part of the Bioengineering team! I plan on graduating with a degree in Bioinformatics in June 2024. After college I hope to be able to pursue a career which combines technology with improving people’s day to day lives. In my free time, I like to hike in national parks, attend pizookie Tuesdays, and paint with friends. </p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src={teammember5} alt="Team Member 5"/>
                        <div class="text-container">
                            <h3>Marina Xu</h3>
                            <p>Hi! I’m Marina, and I’m a graduating Bioengineering: Bioinformatics major. I’m not too sure what I want to do after graduation, but my ultimate career goal is to teach science or technology to high schoolers. I like hiking, playing with my dog, and going out with my friends in my free time! </p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src={teammember6} alt="Team Member 6"/>
                        <div class="text-container">
                            <h3>Shreya Nagesh</h3>
                            <p>Hi! I’m Shreya, a 4th year Bioengineering: Bioinformatics major. After graduation, I am aiming to work in health or clinical informatics, as I hope to work with data that positively impacts people’s health. In my free time I like to spend time outdoors, curate Spotify playlists, and hang out with friends!</p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src={teammember7} alt="Team Member 7"/>
                        <div class="text-container">
                            <h3>Hede Yang</h3>
                            <p>Hi! I’m Hede and I’m a fourth year data science student at UCSD. I enjoy crocheting, hiking and free diving during my free time. </p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src="{teammember8} "alt="Team Member 8"/>
                        <div class="text-container">
                            <h3>Wenhua Tang</h3>
                            <p>Hi! I'm Wenhua. I am currently in my third year at UC San Diego studying Data Science. I hope to find a job in data engineering in the future. During my free time, I enjoy playing video games and cooking.</p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src={teammember9} alt="Team Member 9"/>
                        <div class="text-container">
                            <h3>Teresa Lee</h3>
                            <p>Hi! I’m a fourth year data science student at UCSD. I hope to leverage data science in health to help patients. I enjoy cooking and going on walks during my free time.</p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src="{teammember10}" alt="Team Member 10"/>
                        <div class="text-container">
                            <h3>Eric Park</h3>
                            <p>Hi, I’m Eric and I’m currently a fourth year data science student at UCSD. In my free time, I enjoy playing basketball with friends and playing video games. </p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src="{teammember11}" alt="Team Member 11"/>
                        <div class="text-container">
                            <h3>Zhilin Guo</h3>
                            <p> Fourth year student at UCSD, majoring in Data Science. I hope AI can provide more specific health services in the future. </p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src="{teammember12}" alt="Team Member 12"/>
                        <div class="text-container">
                            <h3>Bryan Talavera</h3>
                            <p> Hi, I’m Bryan. I am a fourth year Data Science major. I hope to use my understanding of Data Science to help others make informed data-driven decisions. I enjoy skateboarding and playing video games with friends. </p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src="{teammember13}" alt="Team Member 13"/>
                        <div class="text-container">
                            <h3>Yuchu Yan</h3>
                            <p> Hi, I'm a senior student at UCSD, majoring in Data Science with a minor in General Biology. My ambition is to integrate data science with other fields, particularly in the realm of biology. In my spare time, I enjoy go-karting, motorcycling, and baking.</p>
                        </div>
                    </div>
                    <div class="team-member-container">
                        <img src="{teammember14}" alt="Team Member 14"/>
                        <div class="text-container">
                            <h3>Shrishti Seksaria</h3>
                            <p>  Hi! Im Shrishti, senior at UCSD pursuing Data Science and Economics. I hope to use data and technology to help others make better data driven decisions across all industries. In my free time I like to write poetry, play badminton, or go hiking !</p>
                        </div>
                    </div>
                </div>
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


