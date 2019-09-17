import React, { Component } from "react";
import { AnchorButton } from "../components/presentation/Button";

import paperPlane from "../images/Icons/Paperplane.png"

class Content extends Component {
    render() {
        return (
            <section className="uk-section uk-section-default"
                data-uk-height-viewport="true"
                data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: div > *; delay: 100"
                >
    			<div className="uk-container uk-height-1-1">
    				<div className="uk-margin">
    					<div className="uk-grid uk-flex-middle" data-uk-grid>
    						<div style={{height: "400px !important", minHeight: "400px"}} className="uk-flex uk-flex-middle uk-width-1-3@m uk-background-primary">
                                <p className="big-message-dark uk-h1">E-Commerce Giants help customers find the right products fast</p>
    						</div>
    						<div className="uk-width-2-3@m">
    							<p className="subtitle-text">
    								Customers did not come to your site to search.  Better understand the customer’s search intent with Natural Language Processing (NLP) and get them to what they are looking for fast.  Infer what your customer is searching for (i.e OEM or VIN search) by classifying a customer’s search when they submit it.
    							</p>
                                <p className="subtitle-text">
                                    Create dynamical relevant filter fields for categories relating to their query and tune the query based on that. 
                                </p>
    							<div className="uk-grid" data-uk-grid>
    								<div className="uk-align-center uk-text-center">
    									<h4>Download Our Primer on How to Compete with Amazon.</h4>
    									<AnchorButton type="text" size="large" format="primary" path="/whitepaper">
                                            <img className="uk-margin-small-right" src={paperPlane} height="24" width="24" alt="download whitepaper" />
                                            Download whitepaper
                                        </AnchorButton>
    								</div>
    							</div>
    						</div>
    					</div>

    					<div className="uk-grid uk-flex-middle" data-uk-grid>
    						<div className="uk-width-2-3@m">
    							<p className="subtitle-text">
    								Customers expect highly personalized recommendations when shopping online.  Using artificial intelligence generates laser-focused recommendations that can dynamically boost search and browse revenue. Delivering tailored content using dynamic signals instead of rigid rule sets.
    							</p>
                                <div className="uk-grid" data-uk-grid>
    								<div className="uk-align-center uk-text-center">
    									<h4>See our webinar about personalized search experiences.</h4>
    									<AnchorButton type="text" size="large" format="primary" path="/webinar">
                                            <img className="uk-margin-small-right" src={paperPlane} height="24" width="24" alt="view webinar" />
                                            View webinar
                                        </AnchorButton>
    								</div>
    							</div>
    						</div>
                            <div style={{height: "400px !important", minHeight: "400px"}} className="uk-flex uk-flex-middle uk-width-1-3@m uk-background-warning">
                                <p className="big-message-dark uk-h1">E-Commerce Giants provide personalized experiences customers expect.</p>
    						</div>
    					</div>

    					<div className="uk-grid uk-flex-middle" data-uk-grid>
    						<div style={{height: "400px !important", minHeight: "400px"}} className="uk-flex uk-flex-middle uk-width-1-3@m uk-background-success">
                                <p className="big-message-dark uk-h1">E-Commerce Giants increase revenue per visitor</p>
    						</div>
    						<div className="uk-width-2-3@m">
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
