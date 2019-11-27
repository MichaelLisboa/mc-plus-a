import React from "react";
import { NavLink } from "react-router-dom";
import useRouter from "../../../lib/UseRouter";
import logo from "../../../images/MCA.svg";

import "./Navigation.css";

const NavMenu = () => {
    const {location} = useRouter();
    return (
        <div className="navbar-container uk-visible@m" data-uk-sticky>
            <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                    <div className="uk-navbar-item">
                        {location.pathname === '/' ?
                        <img src={logo} width="150px" alt="MC+A Logo" data-uk-image />
                        : <NavLink to={`/`}><img src={logo} width="150px" alt="MC+A Logo" data-uk-image /></NavLink>
                        }
                    </div>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
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
                </div>
            </nav>
        </div>
    )
}

export default NavMenu;
