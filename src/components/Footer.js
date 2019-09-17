import React, { Component } from "react";
import ContactForm from "./presentation/ContactForm";
import PageStyles from "./presentation/PageStyles";

class Footer extends Component {
    render() {
        return (
            <footer style={PageStyles} className="uk-section uk-section-secondary uk-padding-remove-bottom">
    			<div className="uk-container uk-margin-medium-top">
                    <h2 className="uk-text-center section-title-primary">Free consultation from our experts</h2>
                    <p className="uk-align-center uk-text-center uk-width-1-2@s uk-margin-large-bottom">
                        Simply fill in the form, it’s that easy. An MC+A Associate Expert will reach out to you within 24 hours.
                    </p>
    				<div className="uk-grid uk-grid-large" data-uk-grid >
    					<div className="uk-width-1-3@m">
    						<p>MC+A is a leading independent consultancy focused on delivering solutions that provide users with personalized recommendations and insights. Based in Chicago, IL MC+A has over 10 years of technical expertise delivering solutions focused on improved business outcomes through search (NLP), data processing, Machine Learning (ML) and analytics. We help our clients increase revenue, reduce costs and mitigate risk by providing insights and recommendations to users when they need them.</p>
							<a href="/" className="uk-icon-button uk-margin-small-right" data-uk-icon="twitter">&nbsp;</a>
							<a href="/" className="uk-icon-button uk-margin-small-right" data-uk-icon="facebook">&nbsp;</a>
							<a href="/" className="uk-icon-button uk-margin-small-right" data-uk-icon="instagram">&nbsp;</a>
    					</div>
                        <div className="uk-width-2-3@m">
                            <ContactForm />
                        </div>
    				</div>
    			</div>

    			<div className="uk-text-center uk-padding-small uk-padding-remove-horizontal">
    				<span className="uk-text-small uk-text-muted">&copy; 2019 <a href="https://www.mcplusa.com">MC+A</a></span>
    			</div>
    		</footer>
        )
    }
}

export default Footer;
