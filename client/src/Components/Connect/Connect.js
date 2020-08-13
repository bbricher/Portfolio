import React, { Component } from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';

import LinkedinImg from './iconfinder_linkedin_circle_gray_107149 (1).png';
import GithubImg from './iconfinder_github_circle_gray_107139.png';



class Connect extends Component {
    render() {
        return (
            <>
                <Container>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Row>
                        <h1>
                            To be continued...
                        </h1>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col>
                            <h4>
                                Contact information:
                            </h4>
                        </Col>
                        <Col>
                            <h4>
                                brisagert@gmail.com   
                            </h4>
                        </Col>
                        <Col>
                            <h4>   
                                480-703-0880
                            </h4>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/in/brianabricher/">
                                <Image src={LinkedinImg} style={{height: "32px"}} roundedCircle />
                            </a>
                            <a href="https://github.com/bbricher">
                                <Image src={GithubImg} style={{height: "32px"}} roundedCircle />
                            </a>
                        </Col>
                        
                    </Row>
                    <Row>
                        <h4>
                            
                        </h4>

                    </Row>
                </Container>
            </>
        )
    }

}


export default Connect;