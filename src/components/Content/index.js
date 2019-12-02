import React from "react";
import EmailForm from "../Forms/EmailForm";
import ConversionsCallout from "./ConversionsCallout";
import TabModule from "./TabModule";

import "./Content.css";

const Content = () =>
    <div id="#content" className="uk-section uk-section-default"
        data-uk-height-viewport="true"
        >

        <blockquote className="uk-h2 uk-text-center uk-text-muted uk-container uk-container-small uk-margin-large-bottom" cite="#">
            <p>“Amazon reports that 35% of their sales come from their recommendations systems.”
            <small className="uk-text-small uk-display-inline-block uk-margin-small-left"> - McKinsey</small></p>
        </blockquote>

        <ConversionsCallout />

        <TabModule />

        <section className="uk-margin-medium-top">
            <div className="uk-container uk-container-small" data-uk-scrollspy-class="uk-animation-slide-bottom">
                <h2 className="uk-margin-small-top">AI-powered e-Commerce</h2>
                <p className="subtitle-text">
                    Major online retailers built their success on a powerful, scalable search back end with many impactful
                    key features. These features are available for you to take advantage of today, including:
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
