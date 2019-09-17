import React, { Component } from "react";
import PageStyles from "./presentation/PageStyles";

import heroImage from "../images/hero-image.png";

class Webinar extends Component {
    render() {
        return (
            <section style={PageStyles} className="uk-cover-container">
    			<img
                    src={heroImage}
                    alt=""
                    data-sizes="100vw"
                    data-uk-cover
                    data-uk-img
                />
    			<div className="uk-container uk-position-z-index uk-position-relative uk-section uk-section-xlarge">
    				<div className="uk-grid uk-flex-left">
    					<div className="uk-width-2-5@m">
    						<h6 className="uk-margin-remove">FREE WEBINAR</h6>
                            <h2 className="uk-margin-remove">Part search.<br />Taking e-commerce to the next level.</h2>
                            <p>Watch the webinar to learn how you can leverage AI and machine learning to create uniquely personal customer experiences for your own part e-commerce website.</p>
    					</div>
    				</div>
    			</div>
    		</section>
        )
    }
}

export default Webinar;
