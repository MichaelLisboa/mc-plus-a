import React from "react";
import { NavLink } from "react-router-dom";
import useRouter from "../../../lib/UseRouter";
import logo from "../../../images/MCA.svg";

const OffCanvas = () => {
    const {location} = useRouter();
    return (
        <div className="nav" data-uk-sticky="cls-active: uk-background-secondary uk-light; top: 5vh; animation: uk-animation-fade uk-hidden@s">
            <div className="uk-container uk-hidden@s">
                <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <div className="uk-navbar-item">
                            {location.pathname === '/' ?
                            <img src={logo} width="100px" alt="MC+A Logo" data-uk-image />
                            : <NavLink to={`/`}><img src={logo} width="100px" alt="MC+A Logo" data-uk-image /></NavLink>
                            }
                        </div>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav uk-iconnav">
                            {location.pathname !== '/' &&
                                <li className="uk-padding-remove">
                                    <NavLink to={`/`} data-uk-icon="icon: home; ratio: 0.75;"></NavLink>
                                </li>
                            }
                            <li className="uk-padding-remove">
                                <NavLink to={`/whitepaper`} data-uk-icon="icon: list; ratio: 0.9;"></NavLink>
                            </li>
                            <li className="uk-padding-remove">
                                <NavLink to={`/solution`} data-uk-icon="icon: video-camera; ratio: 0.9;"></NavLink>
                            </li>
                            <li className="uk-padding-remove">
                                <NavLink to={`/contact`} data-uk-icon="icon: commenting; ratio: 0.8;"></NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default OffCanvas;
