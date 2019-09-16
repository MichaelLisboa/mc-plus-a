import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../images/MCA.svg"

const OffCanvas = () =>
    <div className="nav" data-uk-sticky="cls-active: uk-background-secondary uk-light; top: 5vh; animation: uk-animation-fade uk-hidden@s">
        <div className="uk-container uk-hidden@s">
            <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                <div className="uk-navbar-left">
                    <div className="uk-navbar-item">
                        <NavLink to={`/`}><img src={logo} width="100px" alt="Phoenix Logo" data-uk-image /></NavLink>
                    </div>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav uk-iconnav">
                        <li>
                            <NavLink to={`/whitepaper`} data-uk-icon="icon: list;"></NavLink>
                        </li>
                        <li>
                            <NavLink to={`/webinar`} data-uk-icon="icon: video-camera;"></NavLink>
                        </li>
                        <li>
                            <NavLink to={`/contact`} data-uk-icon="icon: commenting;"></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>

export default OffCanvas;
