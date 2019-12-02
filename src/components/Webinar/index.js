import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Forms/Button";
import About from "../About";
import PageStyles from "../UI/PageStyles";

import image from "../../images/whitepaper.jpg";
import predictive from "../../images/predictive-autocomplete.png";
import intent from "../../images/user-intent.png";
import personalized from "../../images/personalized.png";
import "./Webinar.css";

const Webinar = () =>
    <>
        <div className="solution-wrap uk-position-relative uk-light">
        	<div className="uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height">
        		<div className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top" data-uk-parallax="y: 0,50; easing:0; opacity:0.2">
        			<div className="uk-width-1-2@s" data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > *; delay: 150">
        				<h6 className="uk-text-primary uk-margin-small-bottom">THE SOLUTION</h6>
        				<h1 className="uk-margin-remove-top">Does your store provide relevant experiences to customers?</h1>
        			</div>
        		</div>
        		<img
                    src={image}
                    alt="The solution"
                    data-uk-cover
                    data-uk-img
                    data-uk-parallax="opacity: 1,0.1; easing:0" />
        	</div>
        </div>
        <section className="uk-margin-large-top">
            <blockquote className="uk-h2 uk-text-center uk-text-muted uk-container uk-container-small uk-margin-large-bottom" cite="#">
                <p>“Sellers that personalize customer experience see greater levels of customer engagement and higher retention.”
                <small className="uk-text-small uk-display-inline-block uk-margin-small-left"> - Gartner 2018</small></p>
            </blockquote>
            <div className="uk-container uk-container-small">
                <p>Amazon, with it highly personalized shopping experience, seems to have a considerable advantage in the e-commerce area.
                    They have a significant platform available to find, sell, and fulfill parts to their existing customers.</p>
            </div>
        </section>

        <section className="uk-margin">
            <div className="uk-container uk-container-small uk-flex-auto uk-position-relative">
                <h3>Beat Amazon at their Own Game</h3>
            </div>
        </section>
        <section className="uk-margin">
            <div className="uk-container uk-container-small uk-flex-auto uk-position-relative">
                <div className="">
                    <p className="subtitle-text">Every customer shopping experience in your store can be a personalized journey that delivers relevant product
                        recommendations your customers have come to expect from other shopping experiences.</p>
                    <p>With recent advancements in commercial software, particularly in artificial intelligence (AI) and machine learning (ML),
                        the technology that Amazon has spent billions on is available for a fraction of the cost.  This advancement allows you to
                        incorporate these technologies within your infrastructure.  Doing so can significantly improve your conversion rates both
                        through the original sale and through recommendations, which lead to upsell and cross-sell opportunities.</p>

                </div>
            </div>
        </section>
        <section className="uk-margin">
            <div className="uk-container uk-container-small uk-flex-auto uk-position-relative">
                <h3 className="uk-heading-line uk-text-center"><span>What does this Solution Look Like?</span></h3>
            </div>
        </section>
        <section className="uk-margin">
            <div className="uk-container uk-container-small uk-flex-auto uk-position-relative">
                <div className="">
                    <p className="uk-h4">It has Predictive Autocomplete</p>
                    <p>With a power autocomplete, you can help suggest your users to highly probable search queries or refinements. Here you can see a
                        search by the department based on the prediction that the user is looking for an iPod touch.</p>
                    <img
                        src={predictive}
                        alt="Predictive autocomplete"
                        className="uk-border-rounded"
                        data-uk-img />
                </div>
            </div>
        </section>
        <section className="uk-margin-large">
            <div className="uk-container uk-container-small uk-flex-auto uk-position-relative">
                <div className="">
                    <p className="uk-h4">It understands the users Intent</p>
                    <p>You can infer what the user is searching for (i.e OEM or VIN search) by classifying the search that the user submits. You can dynamically
                    create relevant facet fields that contain categories relating to the query and tune the query based on that. </p>
                    <img
                        src={intent}
                        alt="Understand user intent"
                        className="uk-border-rounded"
                        data-uk-img />
                </div>
            </div>
        </section>
        <section className="uk-margin-large">
            <div className="uk-container uk-container-small uk-flex-auto uk-position-relative">
                <div className="">
                    <p className="uk-h4">It provides Personalized Recommendations</p>
                    <p>You can personalize and recommend items (i.e. other parts) that are related to the parts that they are looking at our related to the users’ behavior.</p>
                    <img
                        src={personalized}
                        alt="Personalized recommendations"
                        className="uk-border-rounded"
                        data-uk-img />
                </div>
            </div>
        </section>
        <section className="uk-padding-large uk-height-large uk-flex uk-flex-middle uk-section-muted">
            <div style={{maxWidth: "600px"}} className="uk-container uk-container-small" data-uk-scrollspy-class="uk-animation-slide-bottom">
                <h3 className="uk-margin-small-top">Ready to personalize?</h3>
                <p>
                    Today’s e-commerce leaders are elevating the customer experience with personalized on-page engagement, AI-powered recommendations, and much more. MC+A has the technical
                    expertise and experience to help you expand revenue opportunities using state of the art technology.
                </p>
                <Link
                    to="/contact"
                    className="uk-button uk-button-large uk-button-primary uk-border-rounded">
                    Schedule a demo <span uk-icon="icon: arrow-right; ratio: 1.5" />
                </Link>
            </div>
        </section>
        <About />
    </>

export default Webinar;
