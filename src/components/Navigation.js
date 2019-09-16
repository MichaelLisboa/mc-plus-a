import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/MCA.svg"

class Navigation extends Component {
    render() {
        return (
            <>
            <div className="nav" data-uk-sticky="cls-active: uk-background-secondary uk-light; top: 5vh; animation: uk-animation-fade uk-visible@s">
				<div className="uk-container uk-visible@s">
					<nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
						<div className="uk-navbar-left">
							<div className="uk-navbar-item">
                                <NavLink to={`/`}><img src={logo} width="150px" alt="Phoenix Logo" data-uk-image /></NavLink>
							</div>
						</div>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li>
                                    <NavLink to={`/whitepaper`}>Whitepaper</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/webinar`}>Webinar</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/contact`}>Contact</NavLink>
                                </li>
                            </ul>
						</div>
					</nav>
				</div>
			</div>
            <div className="nav" data-uk-sticky="cls-active: uk-background-secondary uk-light; top: 25vh; animation: uk-animation-fade uk-hidden@s">
				<div className="uk-container uk-hidden@s">
                    <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
						<div className="uk-navbar-left">
							<div className="uk-navbar-item">
                                <NavLink to={`/`}><img src={logo} width="75px" alt="Phoenix Logo" data-uk-image /></NavLink>
							</div>
						</div>
                        <div className="uk-navbar-right">
                            <ul className="uk-navbar-nav">
                                <li>
                                    <NavLink to={`/whitepaper`}>W</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/webinar`}>V</NavLink>
                                </li>
                                <li>
                                    <NavLink to={`/contact`}>C</NavLink>
                                </li>
                            </ul>
						</div>
					</nav>
				</div>
			</div>
        </>
        )
    }
}

export default Navigation;
