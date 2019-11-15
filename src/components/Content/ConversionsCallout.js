import React from "react";

import image from "../../images/recommendations.png";

const TabModule = () =>
    <section className="uk-section uk-margin-large uk-padding-large">
        <div className="uk-container">
            <div className="uk-grid uk-child-width-1-2@l uk-flex-middle uk-flex-center">
                <div data-uk-scrollspy="cls: uk-animation-fade">
                    <img src={image} data-src={image} data-uk-img alt="Image" />
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

export default TabModule;
