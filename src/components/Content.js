import React, { Component } from "react";

import heroImage from "../images/hero-image.png"
import heroSrcImage from "../images/hero-image.png"

class Content extends Component {
    render() {
        return (
            <section id="content" className="uk-section uk-section-default">
    			<div className="uk-container">
    				<div className="uk-section uk-section-small uk-padding-remove-top">
    					<ul className="uk-subnav uk-subnav-pill uk-flex uk-flex-center" data-uk-switcher="connect: .uk-switcher; animation: uk-animation-fade">
    						<li><a className="uk-border-pill" href="#">Your Challenge</a></li>
    						<li><a className="uk-border-pill" href="#">Your Customers</a></li>
    						<li><a className="uk-border-pill" href="#">What They Want</a></li>
    					</ul>
    				</div>

    				<div className="uk-switcher uk-margin">
    					<div style={{borderRight: "5px solid #3D9DD6"}} className="uk-grid uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
    						<div style={{height: "400px !important", minHeight: "400px"}} className="uk-flex uk-flex-middle uk-width-1-3@m uk-background-primary">
                                <p className="big-message-dark uk-h1">E-Commerce Giants help customers find the right products fast</p>
    						</div>
    						<div className="uk-width-2-3@m" data-uk-scrollspy-className="uk-animation-slide-right-medium">
    							<p className="subtitle-text">
    								Customers did not come to your site to search.  Better understand the customer’s search intent with Natural Language Processing (NLP) and get them to what they are looking for fast.  Infer what your customer is searching for (i.e OEM or VIN search) by classifying a customer’s search when they submit it.
    							</p>
                                <p className="subtitle-text">
                                    Create dynamical relevant filter fields for categories relating to their query and tune the query based on that. 
                                </p>
    							<div className="uk-grid" data-uk-grid>
    								<div className="uk-align-center uk-text-center">
    									<h4>Download Our Primer on How to Compete with Amazon.</h4>
    									<a className="uk-button uk-button-large uk-button-primary" href="">
                                            <img className="uk-margin-small-right" src="images/Icons/Paperplane.png" height="24" width="24" />
                                            Download whitepaper
                                        </a>
    								</div>
    							</div>
    						</div>
    					</div>

    					<div style={{borderLeft: "5px solid #3D9DD6"}} className="uk-grid uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
    						<div className="uk-width-2-3@m" data-uk-scrollspy-className="uk-animation-slide-right-medium">
    							<p className="subtitle-text">
    								Customers expect highly personalized recommendations when shopping online.  Using artificial intelligence generates laser-focused recommendations that can dynamically boost search and browse revenue. Delivering tailored content using dynamic signals instead of rigid rule sets.
    							</p>
    						</div>
                            <div style={{height: "400px !important", minHeight: "400px"}} className="uk-flex uk-flex-middle uk-width-1-3@m uk-background-warning">
                                <p className="big-message-dark uk-h1">E-Commerce Giants provide personalized experiences customers expect.</p>
    						</div>
    					</div>

    					<div style={{borderRight: "5px solid #3D9DD6"}} className="uk-grid uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
    						<div style={{height: "400px !important", minHeight: "400px"}} className="uk-flex uk-flex-middle uk-width-1-3@m uk-background-success">
                                <p className="big-message-dark uk-h1">E-Commerce Giants increase revenue per visitor</p>
    						</div>
    						<div className="uk-width-2-3@m" data-uk-scrollspy-className="uk-animation-slide-right-medium">
    							<p className="subtitle-text">
    								Better search for complex catalogs increases revenue per visitor (RPV).  Machine learning improves your customer experience by constantly improving relevancy.  This shortens your customer’s journey, decreasing abandonment and increasing revenue.
    							</p>
    						</div>
    					</div>
    				</div>
    			</div>
    		</section>
        )
    }
}

export default Content;
