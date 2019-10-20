import React from "react";
import { Button } from "../Forms/Button";
import PageStyles from "../UI/PageStyles";

import image from "../../images/whitepaper.jpg";
import "./Whitepaper.css";

const Whitepaper = () =>
    <div className="wrap">
        <section style={PageStyles} className="uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height">
            <div className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top" data-uk-parallax="y: 0,50; easing:0; opacity:0.2">
                <div className="uk-grid uk-flex-left">
                    <div className="uk-width-2-5@m">
                        <h6 className="uk-margin-remove">FREE WHITEPAPER</h6>
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
            <img
                src={image}
                alt=""
                data-sizes="100vw"
                data-uk-cover
                data-uk-img
            />
        </section>
    </div>

export default Whitepaper;
