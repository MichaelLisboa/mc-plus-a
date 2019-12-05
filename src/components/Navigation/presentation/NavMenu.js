import React from "react";
import { NavLink } from "react-router-dom";
import OffCanvas from "./OffCanvas";
import useRouter from "../../../lib/UseRouter";
import logo from "../../../images/MCA.svg";
import lucidLogo from "../../../images/Logos/lucidworks-partners.png";

import "./Navigation.css";

const NavMenu = () => {
    const {location} = useRouter();
    return (
        <>
        <OffCanvas />
        <div className="nav"
            data-uk-sticky="cls-active: uk-background-default uk-box-shadow-medium;">
            <div className="uk-container uk-container-expand uk-padding-remove">
                <nav className="uk-navbar uk-navbar-container" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <div className="uk-navbar-item">
                            {location.pathname === '/' ?
                            <div className="uk-text-nowrap">
                                <img className="uk-margin-small-right" src={logo} width="80px" alt="MC+A Logo" data-uk-image />
                                <img src={lucidLogo} width="100px" alt="LucentWorks Logo" data-uk-image />
                            </div>
                            : <NavLink to={`/`}>
                            <div className="uk-text-nowrap">
                                <img className="uk-margin-small-right" src={logo} width="80px" alt="MC+A Logo" data-uk-image />
                                <img src={lucidLogo} width="100px" alt="LucentWorks Logo" data-uk-image />
                            </div>
                            </NavLink>
                            }
                        </div>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav uk-visible@m">
                            {location.pathname !== '/' &&
                                <li>
                                    <NavLink to={`/`}><span className="uk-icon uk-margin-small-right" data-uk-icon="icon: home; ratio: 0.85"></span> Home</NavLink>
                                </li>
                            }
                            <li>
                                <NavLink to={`/solution`}><span className="uk-icon uk-margin-small-right" data-uk-icon="icon: grid; ratio: 0.85"></span> The Solution</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/contact`}><span className="uk-icon uk-margin-small-right" data-uk-icon="icon: commenting; ratio: 0.85"></span> Contact</NavLink>
                            </li>
                        </ul>
                        <a className="uk-navbar-toggle uk-hidden@m" href="#offcanvas-nav" data-uk-toggle="target: #offcanvas-nav">
                            <span className="uk-float-left" data-uk-icon="icon: menu; ratio: 1" />
                            <small className="uk-float-left">&nbsp;MENU</small>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}

export default NavMenu;
