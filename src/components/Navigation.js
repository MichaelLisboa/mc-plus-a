import React, { Component } from "react";
import { Button } from "./presentation/Button";

import logo from "../images/MCA.svg"

class Navigation extends Component {
    render() {
        return (
            <div className="nav" data-uk-sticky="cls-active: uk-background-secondary uk-box-shadow-medium; top: 100vh; animation: uk-animation-slide-top">
				<div className="uk-container">
					<nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
						<div className="uk-navbar-left">
							<div className="uk-navbar-item uk-padding-remove-horizontal">
                                <img src={logo} width="150px" alt="Phoenix Logo" data-uk-image />
							</div>
						</div>
						<div className="uk-navbar-right" data-uk-scrollspy="cls: uk-animation-fade; offset-top: 400; delay: 100; hidden: true;">
                            <Button type="text" size="large" format="danger" data-uk-scrollspy-class="uk-animation-fade">
                                GET STARTED
                            </Button>
						</div>
					</nav>
				</div>
			</div>
        )
    }
}

export default Navigation;
