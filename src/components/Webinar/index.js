import React from "react";
import { Button } from "../Forms/Button";
import PageStyles from "../UI/PageStyles";

import heroImage from "../../images/hero-image-webinar.png";

const Webinar = () =>
    <section style={PageStyles} className="uk-cover-container uk-height-1-1">
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
                    <p className="uk-text-lead">
                        Watch the webinar to learn how you can leverage AI and machine learning to create uniquely
                        personal customer experiences for your part e-commerce website.
                    </p>
                    <Button type="text" size="large" format="primary">
                        REGISTER / WATCH ON DEMAND
                    </Button>
                </div>
            </div>
        </div>
    </section>

export default Webinar;
