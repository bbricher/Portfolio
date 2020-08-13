import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import lyricalConnection from './lyrical-connection.gif';
import bamazonManager from './manager-example.gif';
import strangerThings from './strangerthings.gif';
import theOffice from './theoffice.gif';
import shoppingList from './shoppinglist.gif';



import githubImg from './iconfinder_github_circle_gray_107139.png';
import wwwImg from './iconfinder_22-Website_3213298.png';

class ProjectCards extends Component {
    render() { 
        var settings = {
            focusOnSelect: true,
            draggable: true,
            centerMode: true,
            infinite: true,
            centerPadding: '40px',
            slidesToShow: 3
        };
        return (
            <>
                <Slider {...settings}>
                    <div>
                        <Card bg="dark" style={{ width: '18rem', padding: '5' }}>
                            <Card.Img variant="top" src={lyricalConnection} />
                            <Card.Body>
                                <Card.Title>Lyrical Connection</Card.Title>
                                <Card.Text>
                                First group project using 3 different API's, HTML5, JavaScript, JQuery, and CSS
                                </Card.Text>
                                <a href="https://om289560.github.io/project-1/">  
                                    <Image src={wwwImg} style={{width: "25px"}}  roundedCircle />
                                </a> 
                                <a>   </a>
                                <a href="https://github.com/om289560/project-1">  
                                    <Image src={githubImg} style={{width: "25px"}}  roundedCircle />
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card bg="dark" style={{ width: '18rem', padding: '5' }}>
                            <Card.Img variant="top" src={bamazonManager} />
                            <Card.Body>
                                <Card.Title>"Bamazon" Node Site</Card.Title>
                                <Card.Text>
                                Using Node, Node packages, mySQL and Sequalize
                                </Card.Text>
                                <a href="https://github.com/bbricher/storefront">  
                                    <Image src={githubImg} style={{width: "25px"}}  roundedCircle />
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card bg="dark" style={{ width: '18rem', padding: '5' }}>
                            <Card.Img variant="top" src={strangerThings} />
                            <Card.Body>
                                <Card.Title>Stanger Things Trivia</Card.Title>
                                <Card.Text>
                                
                                Example of logic used with jQuery, HTML5, JavaScript, and CSS
                                </Card.Text>
                                <a href="https://bbricher.github.io/TriviaGame/">  
                                    <Image src={wwwImg} style={{width: "25px"}}  roundedCircle />
                                </a> 
                                <a>   </a>
                                <a href="https://github.com/bbricher/TriviaGame">  
                                    <Image src={githubImg} style={{width: "25px"}}  roundedCircle />
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card bg="dark" style={{ width: '18rem', padding: '5' }}>
                            <Card.Img variant="top" src={theOffice} />
                            <Card.Body>
                                <Card.Title>The Office Gussing Game</Card.Title>
                                <Card.Text>
                                Guessing game using HTML5, JavaScript, JQuery, and CSS
                                </Card.Text>
                                <a href="https://bbricher.github.io/Word-Guess-Game/">  
                                    <Image src={wwwImg} style={{width: "25px"}}  roundedCircle />
                                </a> 
                                <a>   </a>
                                <a href="https://github.com/bbricher/Word-Guess-Game">  
                                    <Image src={githubImg} style={{width: "25px"}}  roundedCircle />
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div>
                        <Card bg="dark" style={{ width: '18rem', padding: '5' }}>
                            <Card.Img variant="top" src={shoppingList} />
                            <Card.Body>
                                <Card.Title>Shopping List</Card.Title>
                                <Card.Text>
                                React application with Redux using MERN [Mongo.db, Express, React, and Node]
                                </Card.Text>
                                <a href="https://aqueous-mesa-77099.herokuapp.com/">  
                                    <Image src={wwwImg} style={{width: "25px"}}  roundedCircle />
                                </a> 
                                <a>   </a>
                                <a href="https://github.com/bbricher/mern_shopping_list">  
                                    <Image src={githubImg} style={{width: "25px"}}  roundedCircle />
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
            </>
        )
    }
}

export default ProjectCards;