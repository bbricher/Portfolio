import React, { Component } from "react";
import Image from 'react-bootstrap/Image';
import theOffice from './theoffice.gif';
import strangerThings from './strangerthings.gif';
import lyricalConnection from './lyrical-connection.gif';
import bamazon from './manager-example.gif';
import githubImg from './iconfinder_github_circle_gray_107139.png';
import wwwImg from './iconfinder_22-Website_3213298.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { basename } from "path";





class Projects extends Component {
    render() {
        return (
            <>
                <Slide bottom>
                    <header>
                        <h4>
                            The Office Guessing Game <a>   </a> 
                            <a href="https://bbricher.github.io/Word-Guess-Game/">  
                                <Image src={wwwImg} style={{width: "25px"}}  roundedCircle />
                            </a> 
                            <a>   </a> 
                            <a href="https://github.com/bbricher/Word-Guess-Game">  
                                <Image src={githubImg} style={{width: "25px"}}  roundedCircle />
                            </a> 
                        </h4>
                        <br/>
                        <Image src={theOffice} style={{width: "800px"}} />
                    </header>
                </Slide>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Fade bottom big>
                    <header>
                        <h4>
                            Stranger Things Trivia <a>   </a> 
                            <a href="https://bbricher.github.io/TriviaGame/">  
                                <Image src={wwwImg} style={{width: "25px"}}  roundedCircle />
                            </a> 
                            <a>   </a>
                            <a href="https://github.com/bbricher/TriviaGame">  
                                <Image src={githubImg} style={{width: "25px"}}  roundedCircle />
                            </a> 
                        </h4>
                        <br/>
                        <Image src={strangerThings} style={{width: "800px"}} />
                    </header>
                </Fade>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <Fade bottom big>
                        <h4>
                            First group project adding API's to the list
                        </h4>
                    </Fade>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Fade bottom big>
                    <header>
                        <h4>
                            Lyrical Connection <a>   </a> 
                            <a href="https://om289560.github.io/project-1/">  
                                <Image src={wwwImg} style={{width: "25px"}}  roundedCircle />
                            </a> 
                            <a>   </a>
                            <a href="https://github.com/om289560/project-1">  
                                <Image src={githubImg} style={{width: "25px"}}  roundedCircle />
                            </a> 
                        </h4>
                        <br/>
                        <Image src={lyricalConnection} style={{width: "800px"}} />
                    </header>
                </Fade>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <Fade bottom big>
                        <h4>
                            Using Node, Node packages, mySQL and Sequalize
                        </h4>
                    </Fade>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Fade bottom big>
                    <header>
                        <h4>
                            "Bamazon" Node Site <a>   </a> 
                            <a href="https://github.com/bbricher/storefront">  
                                <Image src={githubImg} style={{width: "25px"}}  roundedCircle />
                            </a> 
                        </h4>
                        <br/>
                        <Image src={bamazon} style={{width: "800px"}} />
                    </header>
                </Fade>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <Fade bottom big>
                        <h4>
                            Express, Mongo, 
                        </h4>
                    </Fade>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Fade bottom big>
                    <header>
                        <h4>
                            
                        </h4>
                        <br/>
                        <Image src={bamazon} style={{width: "800px"}} />
                    </header>
                </Fade>
            </>
        )
    }



}


export default Projects

