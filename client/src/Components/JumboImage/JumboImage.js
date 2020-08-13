import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import "./style.css";
import BKGImg from './12322823_10207393759220247_5732818479281720825_o.jpg'
import LinkedinImg from './iconfinder_linkedin_circle_gray_107149 (1).png';
import GithubImg from './iconfinder_github_circle_gray_107139.png';
import ProjectCards from "../Bootstrap/ProjectCards";

class JumboImage extends Component {
    render() {
        return (
            <>
            <Card bg="dark">
                <Card.Body>
                <Card.Title>
                    Briana Bricher
                </Card.Title>
                <Card.Text>
                    Certified Full-Stack Web Developer | HTML | Node | React.js | CSS | JavaScript | 
                    <a></a>
                    <a href="https://www.linkedin.com/in/brianabricher/">
                        <Image src={LinkedinImg} style={{width: "25px"}} roundedCircle />
                    </a>
                    <a></a>
                    <a href="https://github.com/bbricher">
                        <Image src={GithubImg} style={{width: "25px"}} roundedCircle />
                    </a>
                </Card.Text>
                </Card.Body>                
                <Container className="containerImg" style={{position: "relative"}}>
                    {/* <Card.Img style={{opacity: ".4"}} variant="bottom" src={BKGImg}/> */}
                    <ProjectCards style={{ margin: '5'}}/>
                </Container>
            </Card>
            </>
        )
    }
}
// style={{ height: "176px", overflow: "hidden"}}

export default JumboImage;