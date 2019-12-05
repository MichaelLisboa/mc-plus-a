import React from "react";

import image from "../../images/recommendations.png";

const ConversionsCallout = () =>
    <section className="uk-section uk-padding-remove-top">
                <div className="uk-container">
                    <div className="uk-grid-collapse uk-child-width-1-2@m uk-flex-middle uk-flex-center" data-uk-grid>
                        <div data-uk-scrollspy="cls: uk-animation-fade">
                            <img src={image} data-src={image} data-uk-img alt="Elevated Estate Cannabis Report 2019" />
                        </div>
                        <div className="conversions-cta uk-background-default uk-box-shadow-medium uk-padding">
                            <p className="uk-h3 section-title-primary uk-margin-small-top">
                                Improve conversions and revenue with Recommendations
                            </p>
                            <p className="subtitle-text">
                                It’s not enough to give customers a search box and a list of options. We can help you improve your
                                commerce experience so that you can offer real-time personalized shopping recommendations that increase
                                customer retention and revenue per visitor (RPV)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

export default ConversionsCallout;
