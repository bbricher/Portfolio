import React, { Component } from "react";
import "./style.css";
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';
// import Spin from 'react-reveal/Spin';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';

import BrandImg from './Brand_Img.jpg';
import LinkedinImg from './iconfinder_linkedin_circle_gray_107149 (1).png';
import GithubImg from './iconfinder_github_circle_gray_107139.png';



// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Toolbar } from '../Components/NavBar/Navbar'


class Headline extends Component {
    render() {
        return (
            <> 
            <Container>
                <br/>
                    <Row>
                        <Col>
                            <header>
                                <a><Image alt="Icon" style={{height: "64px"}} src={BrandImg} roundedCircle/>
                                </a>
                            </header>
                        </Col>
                            <Col>
                                <a>
                                    <h1>
                                        Briana Bricher
                                    </h1>
                                </a>
                            </Col>
                        <Col>
                            <HeadShake>
                                <header>
                                    <a href="https://www.linkedin.com/in/brianabricher/">
                                        <Image src={LinkedinImg} roundedCircle />
                                    </a>
                                    <a href="https://github.com/bbricher">
                                        <Image src={GithubImg} roundedCircle />
                                    </a>
                                </header>
                            </HeadShake>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Headline;
