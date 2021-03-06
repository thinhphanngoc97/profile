import React, { Component } from "react";
import '../assets/css/About.css';
import aboutImg from '../assets/images/a2.jpg';

class About extends Component {
    render() {
        return (
            <div className="container">
                <div id="about">
                    <div className="row about-section">
                        <div className="col-xl-3 col-lg-4 col-md-9 col-sm-12">
                            <div className="centered-img">
                                <img className="about-image" src={aboutImg} alt="Still me"/>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            <div className="about-content card">
                                <div className="card-body">
                                    <h2>Front-end Developer</h2>
                                    <p>My full name is <b>Thinh Phan Ngoc</b>. I am a simple, creative, enthusiastic and fun-loving person. I always like to create something on my own which is helpful for others.</p>
                                    <p>My objective is constantly improving programming skills and understanding of technologies to become a professional front-end developer. Hence I am always looking for opportunities to work in a challenging work environment where I can utilize my expertise, towards the development and implementation of the new ideas.</p>
                                    <div className="row personal-info">
                                        <div className="col-md-6 col-sm-12">
                                            <ul>
                                                <li>
                                                    <span className="title">Name : </span>
                                                    <span className="value">Thinh Phan Ngoc</span>
                                                </li>
                                                <li>
                                                    <span className="title">Age : </span>
                                                    <span className="value">23 Years</span>
                                                </li>
                                                <li>
                                                    <span className="title">Hobby : </span>
                                                    <span  className="value">Movie, Music, Travel</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <ul>
                                                <li>
                                                    <span className="title">Phone : </span>
                                                    <span className="value">(+84) 98 869 03 45</span>
                                                </li>
                                                <li>
                                                    <span className="title">Email : </span>
                                                    <span className="value">pnthinh97@gmail.com</span>
                                                </li>
                                                <li>
                                                    <span className="title">Address : </span>
                                                    <span className="value">Go Vap, Ho Chi Minh</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;