import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./presentation/Button";

import logo from "../images/MCA.svg"

class Navigation extends Component {
    render() {
        return (
            <div className="nav" data-uk-sticky="cls-active: uk-background-secondary uk-light; top: 25vh; animation: uk-animation-fade">
				<div className="uk-container">
					<nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
						<div className="uk-navbar-left">
							<div className="uk-navbar-item">
                                <img src={logo} width="150px" alt="Phoenix Logo" data-uk-image />
							</div>
                            <ul className="uk-navbar-nav">
                                <li className="uk-active">
                                    <NavLink to={`/`}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/services`}>Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/whitepaper`}>Whitepaper</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/webinar`}>Free Webinar</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/contact`}>Get in touch</NavLink>
                                </li>
                            </ul>
						</div>
					</nav>
				</div>
			</div>
        )
    }
}

export default Navigation;
