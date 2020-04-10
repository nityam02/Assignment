import React from "react"
import "./Header.scss"

export default function Header() {
    return (
        <div className="component-navbar">
            <section className="top-bar container-holder flex align-center justify-between w-full">
                <div className="w-50"></div>
                <div className="w-50">
                    <div className="flex justify-between  cursor-pointer nav-list-items ">

                        <div className="text-14 opacity-70 self-center font-500 nav-list-item">
                            Live Consulation
              </div>
                        <div className="text-14 opacity-70 self-center font-500 nav-list-item">
                            Buy Plans
              </div>
                        <div className="text-14 opacity-70 self-center font-500 nav-list-item">
                            View Plans
              </div>
                        <button className="primary-button"><span className="text-white font-700 text-16">Log In</span></button>
                    </div>
                </div>
            </section>
        </div>)

}