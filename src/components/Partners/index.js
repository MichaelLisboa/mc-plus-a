import React from "react";

import attivioLogo from "../../images/Logos/attivio-partners.png";
import coveoLogo from "../../images/Logos/coveo-partners.png";
import elasticLogo from "../../images/Logos/elastic-partners.png";
import lucidLogo from "../../images/Logos/lucidworks-partners.png";

const Partners = () =>
    <div className="uk-section uk-section-small uk-section-default">
        <div className="uk-container uk-container-small">
            <h2 className="uk-text-center">Our Partners</h2>
            <div className="uk-grid uk-child-width-1-4 uk-child-width-expand@m logos-grid" data-uk-grid data-uk-scrollspy="cls: uk-animation-scale-down; target: > div > img; delay: 500">
                <div>
                    <img src={attivioLogo} data-src={attivioLogo} data-uk-img alt="Attivio" />
                </div>
                <div>
                    <img src={coveoLogo} data-src={coveoLogo} data-uk-img alt="Coveo" />
                </div>
                <div>
                    <img src={elasticLogo} data-src={elasticLogo} data-uk-img alt="Elastic" />
                </div>
                <div>
                    <img src={lucidLogo} data-src={lucidLogo} data-uk-img alt="LucidWorks" />
                </div>
            </div>
        </div>
    </div>

export default Partners;
