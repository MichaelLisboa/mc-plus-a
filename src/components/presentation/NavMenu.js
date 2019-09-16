import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../images/MCA.svg"

const NavMenu = () =>
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
                            <NavLink to={`/whitepaper`}><span class="uk-icon uk-margin-small-right" data-uk-icon="icon: list; ratio: 0.85"></span> Whitepaper</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/webinar`}><span class="uk-icon uk-margin-small-right" data-uk-icon="icon: video-camera; ratio: 0.85"></span> Webinar</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/contact`}><span class="uk-icon uk-margin-small-right" data-uk-icon="icon: commenting; ratio: 0.85"></span> Contact</NavLink>
                        </li>
                    </ul>
				</div>
			</nav>
		</div>
	</div>

export default NavMenu;
