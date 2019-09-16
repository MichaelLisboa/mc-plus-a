import React, { Component } from "react";

import heroImage from "../images/hero-image.png"
import heroSrcImage from "../images/hero-image.png"

class Webinar extends Component {
    render() {
        return (
            <section className="uk-cover-container"
                data-uk-height-viewport="true"
                >
    			<img
                    src={heroImage}
                    alt=""
                    data-sizes="100vw"
                    data-uk-cover
                    data-uk-img
                    data-uk-scrollspy="cls: uk-animation-fade; delay: 500"
                />
    			<div className="uk-container uk-position-z-index uk-position-relative uk-section uk-section-xlarge">
    				<div className="uk-grid uk-flex-left">
    					<div className="uk-width-2-5@m">
    						<h6>FREE WEBINAR</h6>
                            <h2>Part search.<br />Taking e-commerce to the next level.</h2>
                            <p>Watch the webinar to learn how you can leverage AI and machine learning to create uniquely personal customer experiences for your own part e-commerce website.</p>
    					</div>
    				</div>
    			</div>
    		</section>
        )
    }
}

export default Webinar;
