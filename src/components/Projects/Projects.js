import React, { Component } from 'react';
import './Projects.css';
//import {Row, CardHeader, Card, CardBody} from 'reactstrap'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Projects from './projects.svg';
// import { Animated } from 'react-animated-css'
class Project extends Component {
    render() {
        return (
            <div className="title">
                <h1 className="mytitle">Projects</h1>
                <hr className="underline" />
                <div className="container">
                    <img src={Projects}  alt = "" />
                    <br />
                    <br />
                    {/* <ScrollAnimation animateIn="fadeIn">
                        <p className="item">
                      Projects go here
                        </p>
                    </ScrollAnimation> */}

                    <div className = "container">
                        <ScrollAnimation animateIn = "fadeIn">
                        <div className = "row">
                                <div className = "col-12 col-md-4">
                                <div className="card myitem"  >
                                       
                                        <div class="card-body">
                                            <h5 class="card-title">Mental-Aid</h5>

                                            <p class="card-text">A react based web-app to aid people with special mental needs with modules like Task manager, Emotion-Tracker, discussion and random inspiration generator</p>
                                            <p>Made with: React, Firebase</p>
                                        <a href="https://github.com/Harshita-Kanal/Harshita-Kanal-1" class="btn btn-secondary">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                                <div className = "col-12 col-md-4">
                                    <div className="card myitem" >
                                       
                                        <div class="card-body">
                                            <h5 class="card-title">Your-Scanner</h5>
                                        
                                        <p class="card-text">A robust document scanner capable of performing marking of edges, cropping of images, OCR on images and enhancement and correction of images.</p>
                                        <p>Made with: Java, Android SDK</p>
                                        <a href="https://github.com/Harshita-Kanal/Your-Scanner" class="btn btn-secondary">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                <div className="card myitem">
                                        <div class="card-body">
                                            <h5 class="card-title">SmartNote</h5>
                                        <p class="card-text">A Web-Application where all of a students' notes could be organized, and tagged according to custom categories and maintained in the cloud.</p>
                                        <p>Made with: React, Firebase</p>
                                        <a href="https://github.com/Harshita-Kanal/Smart-Note-Taker" class="btn btn-secondary">GitHub</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </ScrollAnimation>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="card myitem" >
                                    
                                    <div class="card-body">
                                        <h5 class="card-title">Covid-Helper</h5>
                                        <p class="card-text">A web application which provides live tracking feature of covid cases, and latest information on covid cases</p>
                                        <p>Made with: Django, JavaScript</p>
                                        <a href="https://github.com/Harshita-Kanal/Covid-News-Helper" class="btn btn-secondary">GitHub</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card myitem" >
                                    
                                    <div class="card-body">
                                        <h5 class="card-title">Krishi-Saathi</h5>
                                        <p class="card-text">A web-portal to help farmers, providing realtime detection of plant diseases and live farm prices.</p>
                                        <p>Made with: Tensorflow, Django, JavaScript</p>
                                        <a href="https://github.com/Harshita-Kanal/Krishi-Saathi" class="btn btn-secondary">GitHub</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card myitem" >
                                
                                    <div class="card-body">
                                        <h5 class="card-title">ChatBot</h5>
                                        <p class="card-text">An intelligent chatbot, to answer admission queries.Built as a part of a college project.</p>
                                        <p>Made with: Tensorflow, Django, Python</p>
                                        <a href="https://github.com/Harshita-Kanal/Chatbot" class="btn btn-secondary">GitHub</a>
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

export default Project;