import React from "react";
import EmailForm from "../Forms/EmailForm";
import TabModule from "./TabModule";

import "./Content.css";
import heroImage from "../../images/hero-image.png";

const Content = () =>
    <div id="#content" className="uk-section uk-section-default"
        data-uk-height-viewport="true"
        >
        <section className="uk-container uk-container-small uk-margin-large-bottom">
            <p className="uk-text-lead">
                Acquiring traffic in a competitive market like aftermarket auto parts is expensive.
                You can’t afford to lose revenue from converting visitors into customers when they go
                somewhere else because they can’t find the product they are looking for. AI-powered search
                can give your site similar search and personalization features of e-commerce giants like Amazon,
                helping you keep more customers on your site and buying from you.
            </p>
            <p className="subtitle-text">Get in touch with us today to schedule a demo.</p>
            <EmailForm />
        </section>

        <blockquote className="uk-h2 uk-text-center uk-text-muted uk-container uk-container-small uk-margin-large-bottom" cite="#">
            <p>Amazon reports that 35% of their sales come from their recommendations systems.</p>
        </blockquote>

        <section className="uk-section uk-margin-large uk-padding-large uk-section-muted">
            <div className="uk-container">
                <div className="uk-grid uk-child-width-1-2@l uk-flex-middle uk-flex-center">
                    <div data-uk-scrollspy="cls: uk-animation-fade">
                        <img src={heroImage} data-src={heroImage} data-uk-img alt="Image" />
                    </div>
                    <div style={{marginLeft: "-100px", backgroundColor: "#fff"}} className="uk-position-relative uk-box-shadow-medium uk-padding">
                        <h2 className="uk-margin-small-top">Improve conversions and revenue with Recommendations</h2>
                        <p className="subtitle-text">
                            It’s not enough to give customers a search box and a list of options. We can help you improve your
                            commerce experience so that you can offer real-time personalized shopping recommendations that increase
                            customer retention and revenue per visitor (RPV)
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <TabModule />

        <section className="uk-margin-large uk-section-muted uk-padding-large">
            <div className="uk-container uk-container-small" data-uk-scrollspy-class="uk-animation-slide-bottom">
                <h2 className="uk-margin-small-top">AI-powered e-Commerce </h2>
                <p className="subtitle-text">
                    Major online retailers built their success on a powerful, scalable search back end with
                    many impactful key features. These features are available for you to take advantage of
                    today, including:
                </p>
                <ul className="uk-list">
                    <li>Indexing large and complex data catalogs with fitment</li>
                    <li>Capture analytics signals that provide behavior insights you can use to improve relevance and recommendation automatically</li>
                    <li>Powerful clustering and classification algorithms that hyper personalize the search experience your customers</li>
                </ul>
            </div>
        </section>
    </div>

export default Content;
