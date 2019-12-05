import React from "react";

import serverLogo from "../../images/Logos/lucentworks-fusionserver.png";
import aiLogo from "../../images/Logos/lucentworks-fusionai.png";
import appstudioLogo from "../../images/Logos/lucentworks-appstudio.png";
import lucidLogo from "../../images/Logos/lucidworks-partners.png";

import "./Partners.css";

const Partners = () =>
    <section className="partners-section uk-section uk-section-default uk-margin-large-bottom">
        <div className="uk-container uk-container-small">
            <div>
                <div className="uk-width-1-1 uk-text-center uk-margin-bottom">
                    <img
                        src={lucidLogo}
                        alt="LucidWorks"
                         />
                 </div>
                 <div className="uk-grid-collapse uk-width-1-1 uk-child-width-1-3@s" data-uk-grid>
                    <div className="uk-margin-bottom">
                        <img
                            src={serverLogo}
                            alt="LucidWorks Fusion Server"
                             />
                        <p className="uk-h5 uk-padding uk-margin-remove-vertical uk-padding-remove-vertical">Index millions of parts and fitments and serve thousands of queries per second.</p>
                    </div>
                    <div className="uk-margin-bottom">
                        <img
                            src={aiLogo}
                            alt="LucidWorks Fusion AI"
                            data-uk-image
                             />
                        <p className="uk-h5 uk-padding uk-margin-remove-vertical uk-padding-remove-vertical">Us AI to provide personalized shopping experiences to every user.</p>
                    </div>
                    <div className="uk-margin-bottom">
                        <img
                            src={appstudioLogo}
                            alt="LucidWorks App Studio"
                            data-uk-image
                             />
                        <p className="uk-h5 uk-padding uk-margin-remove-vertical uk-padding-remove-vertical">Rapidly build custom commerce experiences with modular UI components for web and mobile.</p>
                    </div>
                 </div>
             </div>
        </div>
    </section>

export default Partners;
