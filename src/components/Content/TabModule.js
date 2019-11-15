import React from "react";
import { Card } from "../Card";
import { AnchorButton } from "../Forms/Button";

import tab_a from "../../images/nlp-detection.png";
import tab_b from "../../images/user-specific.png";
import tab_c from "../../images/feedback.png";

const TabModule = () =>
    <section
        className="tab-container uk-section-muted"
        data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: div > *;">
        <div className="uk-container">
            <Card className="uk-padding">
                <h2 className="uk-text-center">Lorem ipsum dolor sit amet</h2>

                    <div className="uk-section uk-section-small uk-padding-remove-top">
                        <ul className="uk-subnav uk-subnav-pill uk-flex uk-flex-center"
                            data-uk-switcher="connect: .uk-switcher; animation: uk-animation-fade; autoplay: true; autoplay-interval: 1000;">
                            <li><a className="uk-border-pill" href="/#">Search</a></li>
                            <li><a className="uk-border-pill" href="/#">Browse</a></li>
                            <li><a className="uk-border-pill" href="/#">Curate</a></li>
                        </ul>
                    </div>
                <ul className="uk-switcher uk-margin">
                    <li>
                        <div className="uk-grid uk-child-width-1-2@l uk-flex-middle"
                            data-uk-grid
                            data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
                            <div>
                                <img src={tab_a} data-src={tab_a} alt="" data-uk-img />
                            </div>
                            <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                                <h6>Search</h6>
                                <h2 className="uk-margin-small-top">Help customer find what they want fast</h2>
                                <p className="subtitle-text">
                                    You spend a lot of effort to get a customer to your site.  Now imagine they search for
                                    something like“[INSERT QUERY]”  They know exactly what they are looking for but can’t
                                    find it. This is a lost conversion and revenue.  We can help you deploy an AI-powered
                                    platform that is extremely fast, scales to any catalog size can self-tune for relevance.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-grid uk-child-width-1-2@l uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
                            <div>
                                <img src={tab_b} data-src={tab_b} alt="" data-uk-img />
                            </div>
                            <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                                <h6>Browse</h6>
                                <h2 className="uk-margin-small-top">User-specific browsing experience</h2>
                                <p className="subtitle-text">
                                    Navigation does not need to be static.  An AI-powered platform can provide a
                                    hyper-personalized browsing experience so that each customer’s experience is
                                    unique and tailored.  Understanding and predicting user intent allows for optimized
                                    cross-sell, upsell and ATC experiences.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-grid uk-child-width-1-2@l uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
                            <div>
                                <img src={tab_c} data-src={tab_c} alt="" data-uk-img />
                            </div>
                            <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                                <h6>Curate</h6>
                                <h2 className="uk-margin-small-top">Merchandising Feedback Loop</h2>
                                <p className="subtitle-text">
                                    Make data-driven decisions using the customer traffic patterns or signals to help you
                                    optimize the customer experience on your site.  Run A/B test experiments to remove the
                                    guesswork with optimizing your e-commerce.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="uk-container uk-container-small uk-padding uk-padding-remove-bottom uk-text-center">
                    <AnchorButton path="/whitepaper" className="uk-button-large uk-button-primary">Download Whitepaper</AnchorButton>
                </div>
            </Card>
        </div>
    </section>

export default TabModule;
