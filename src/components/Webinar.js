import React, { Component } from "react";

import heroImage from "../images/hero-image.png"
import heroSrcImage from "../images/hero-image.png"

class Webinar extends Component {
    render() {
        return (
            <section className="uk-cover-container overlay-wrap">
    			<img
                    src={heroImage}
                    alt=""
                    data-srcset={heroSrcImage}
                    data-sizes="100vw"
                    data-src={heroImage}
                    data-uk-cover
                    data-uk-img
                    data-uk-parallax="opacity: 1, 0; easing: 0"
                />
    			<div className="uk-container uk-position-z-index uk-position-relative uk-section uk-section-xlarge">
    				<div className="uk-grid uk-flex-left">
    					<div className="uk-width-2-5@m" data-uk-parallax="y: 100,-150; easing: 0;">
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
