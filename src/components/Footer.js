import React, { Component } from "react";
import Contact from "./Contact";

class Footer extends Component {
    render() {
        return (
            <footer className="uk-section uk-section-secondary uk-padding-remove-bottom" data-uk-scrollspy="cls: uk-animation-fade uk-animtion-fast; offset-top: 100; delay: 100; hidden: true; repeat: true;">
    			<div className="uk-container" data-uk-parallax="y: 200, -40; easing: 0;">
                    <h2 className="uk-text-center section-title-primary">Free consultation from our experts</h2>
                    <p className="uk-align-center uk-text-center uk-width-1-2@s uk-margin-large-bottom">
                        Simply fill in the form, it’s that easy. An MC+A Associate Expert will reach out to you within 24 hours.
                    </p>
    				<div className="uk-grid uk-grid-large" data-uk-grid data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; delay: 350">
    					<div className="uk-width-1-3@m">
    						<p>MC+A is a leading independent consultancy focused on delivering solutions that provide users with personalized recommendations and insights. Based in Chicago, IL MC+A has over 10 years of technical expertise delivering solutions focused on improved business outcomes through search (NLP), data processing, Machine Learning (ML) and analytics. We help our clients increase revenue, reduce costs and mitigate risk by providing insights and recommendations to users when they need them.</p>
							<a href="" className="uk-icon-button uk-margin-small-right" data-uk-icon="twitter"></a>
							<a href="" className="uk-icon-button uk-margin-small-right" data-uk-icon="facebook"></a>
							<a href="" className="uk-icon-button uk-margin-small-right" data-uk-icon="instagram"></a>
    					</div>
                        <div className="uk-width-2-3@m">
                            <Contact />
                            <div className="uk-child-width-1-3@m" data-uk-grid>
            					<div>
            						<h5>PRODUCTS</h5>
            						<ul className="uk-list">
                                        <li>Insights Search</li>
            							<li>After Market Search</li>
            							<li>Machine Learning</li>
            							<li>Data Analytics</li>
            						</ul>
            					</div>
            					<div>
            						<h5>OUR COMPANY</h5>
            						<ul className="uk-list">
            							<li>Team</li>
            							<li>Work</li>
            							<li>Culture</li>
            							<li>Contact Us</li>
            						</ul>
            					</div>
            					<div>
            						<h5>OFFICES IN</h5>
            						<ul className="uk-list">
            							<li>Chicago, USA</li>
            							<li>Rio De Jeneiro, Brazil</li>
            							<li>Bangkok, Thailand</li>
            						</ul>
            					</div>
                            </div>
                        </div>
    				</div>
    			</div>

    			<div className="uk-text-center uk-padding uk-padding-remove-horizontal">
    				<span className="uk-text-small uk-text-muted">&copy; 2019 <a href="https://www.mcplusa.com">MC+A</a></span>
    			</div>
    		</footer>
        )
    }
}

export default Footer;
