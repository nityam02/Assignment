import React from "react"
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";
import YouTube from 'react-youtube';
import { uuid } from 'uuidv4';

import "./VideoController.scss"

export default  function VideoController(){
    const slides = [
        {
            key: uuid(),
            content: <YouTube videoId="qUBUelAbaDI"/>
        },
        {
            key: uuid(),
            content: <YouTube videoId="5HooD4YWknA"/>
        },
        {
            key: uuid(),
            content: <YouTube videoId="kVldprM7wt0"  />
        }

    ];
    return (
        <div style={{ width: "100%", height: "500px", margin: "0 auto" }}>
        <Carousel showNavigation={true}  offsetRadius={5} animationConfig={config.gentle } slides={slides} />
        </div>
    )
}