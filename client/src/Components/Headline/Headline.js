import React, { Component } from "react";
import "./style.css";
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';
import Spin from 'react-reveal/Spin';
import Image from 'react-bootstrap/Image';
import BrandImg from './Brand_Img.jpg';
import LinkedinImg from './iconfinder_linkedin_circle_gray_107149 (1).png';
import GithubImg from './iconfinder_github_circle_gray_107139.png';



// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Toolbar } from '../Components/NavBar/Navbar'


class Headline extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { counter: 0 };
    }
    handleClick() {
        this.setState({ counter: this.state.counter + 1 });
    }
    render() {
        return (
            <> 
            <br></br>
                <div>
                    <Spin>
                        <header>
                            <a><Image alt="Icon" style={{height: "150px"}} src={BrandImg} roundedCircle/>
                            </a>
                        </header>
                    </Spin>
                            <a>
                                <h1>
                                    Briana Bricher
                                </h1>
                            </a>
                    <HeadShake>
                        <header>
                            <a href="https://www.linkedin.com/in/brianabricher/">
                                <Image src={LinkedinImg} roundedCircle />
                            </a>
                            <a href="https://www.linkedin.com/in/brianabricher/">
                                <Image src={GithubImg} roundedCircle />
                            </a>
                        </header>
                    </HeadShake>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <Fade big>
                        <h4>
                            Scroll to embark on a coding journey so boldly taken by a Biology major on June 4th 2019...
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
                <div>
                    <Fade bottom big>
                        <h4>
                            This journey began with a foundation of classic web development languages [HTML, CSS, JavaScript]
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
                <div>
                    <Fade bottom big>
                        <h4>
                            Here are a couple of basic websites created with this newly found knowledge:
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
            </>
        )
    }
}

export default Headline;
