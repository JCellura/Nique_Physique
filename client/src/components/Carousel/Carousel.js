import React, { Component } from "react";
import Nique1 from "./Photos/Nique.jpg";
import Nique2 from "./Photos/Nique_Loud.jpeg";
import Nique3 from "./Photos/Nique_Blue_Shorts.jpeg";
import Nique4 from "./Photos/Nique_Red_Shirt.jpeg";
import Nique5 from "./Photos/Nique_Teaching.jpg";
import Nique6 from "./Photos/Nique_Coaching.jpeg";
import NiqueBicep from "./Photos/nique_bicep.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop={true} interval={3000} showArrows={true} autoPlay={true} showThumbs={true} emulateTouch={true} showStatus={false}>
                <div>
                    <img src={Nique1} alt="" />
                    <p className="legend">Nothing Worth Acheiving is Easy to Acheive</p>
                </div>
                <div>
                    <img src={Nique2} alt="" />
                    <p className="legend">Every Single Day, You Have to Grind!</p>
                </div>
                <div>
                    <img src={Nique3} alt="" />
                    <p className="legend">National Competion, Never Satisfied</p>
                </div>
                <div>
                    <img src={Nique4} alt="" />
                    <p className="legend">Get Your Mind Right and Your Body Will Follow</p>
                </div>
                <div>
                    <img src={Nique5} alt="" />
                    <p className="legend">Teaching Values to the Youth in Our Commmunity </p>
                </div>
                <div>
                    <img src={Nique6} alt="" />
                    <p className="legend">Coaching Will Always Be My Number 1 Passion!</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;