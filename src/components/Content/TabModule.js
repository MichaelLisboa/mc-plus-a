import React from "react";
import { Card } from "../Card";
import { AnchorButton } from "../Forms/Button";

import tab_a from "../../images/nlp-detection.png";
import tab_b from "../../images/user-specific.png";
import tab_c from "../../images/feedback.png";

const TabModule = () =>
    <section
        className="tab-container uk-section-muted">
        <div className="uk-container">
            <Card className="uk-padding">
                <h2 className="uk-text-center">If they can’t find it, they can’t buy it</h2>

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
                                <h6>Exact Search</h6>
                                <h2 className="uk-margin-small-top">Users are looking for an exact product match</h2>
                                <p className="subtitle-text">
                                    You spend a lot of effort to get a customer to your site. They know exactly what they are looking
                                    for but can’t find it. Often they simply cut and paste other sites’ product tiles directly into
                                    your search box.  If a product doesn’t appear in the results, then the customer assumes you don’t
                                    carry the item and leaves your site.  We can help you deploy an AI-powered platform that is extremely
                                    fast, scales to any catalog size, can self-tune for misspellings, finds variations with other query
                                    types, and fitment.
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
                                <h6>Recommendations</h6>
                                <h2 className="uk-margin-small-top">Automatic personalizations</h2>
                                <p className="subtitle-text">
                                    Navigation does not need to be static. An AI-powered platform can provide a hyper-personalized browsing
                                    experience so that each customer’s experience is unique and tailored.  Understanding and predicting user
                                    intent allows for optimized cross-sell, upsell and ATC experiences.
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
                                <h6>AI</h6>
                                <h2 className="uk-margin-small-top">Merchandising Feedback Loop</h2>
                                <p className="subtitle-text">
                                    Make data-driven decisions using the customer traffic patterns or signals to help you optimize the customer
                                    experience on your site.  Run A/B test experiments to remove the guesswork with optimizing your e-commerce.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </Card>
        </div>
    </section>

export default TabModule;
