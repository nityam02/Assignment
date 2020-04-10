import React from 'react';

import Header from "../../dumb-components/Header"
import {
    Link
  } from "react-router-dom";
import VideoController from "../../components/VideoController"
import "./Home.scss"

export default function Home() {
    return (
        <>
            <Header />

            <div className="component-video-gallery container-holder">
                <h1 className="opacity-50 font-500">Concept Videos</h1>
                <h6 className="opacity-50 font-400 text-12">Select a number</h6>
                <VideoController />
            </div>

            <div className="component-live-classes container-holder">
                <h1 className="opacity-50 font-500">Live Classes</h1>
                <h6 className="opacity-50 font-400 text-12">Select a number</h6>
                <div className="mb-20">
                    <div className="level-selector flex justify-between">
                        <div className="text-16 font-600 opacity-50">5</div>
                        <div className="text-16 font-600 opacity-50">6</div>
                        <div className="text-16 font-600 opacity-50">7</div>
                        <div className="text-16 font-600 opacity-50">8</div>
                        <div className="text-16 font-600 opacity-50">9</div>
                        <div className="text-16 font-600 opacity-50">10</div>
                    </div>
                </div>
            </div>


        </>
    )
}
