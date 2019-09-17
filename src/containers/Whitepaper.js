import React, { Component } from "react";
import Footer from "./Footer";
import { Button } from "../components/presentation/Button";
import PageStyles from "../components/presentation/PageStyles";

class Whitepaper extends Component {
    render() {
        return (
            <section style={PageStyles} className="uk-section uk-section-secondary uk=light uk-section-large">
    			<div className="uk-container">
    				<div className="uk-grid uk-child-width-1-2@l uk-flex-middle">
    					<div>
    						<h2 className="section-title-primary uk-margin-small-top uk-h1">Beating the big retailers at their own game</h2>
    						<p className="subtitle-text">
    							The massive global success of Amazon and other online retailers is built on a powerful, scalable search back end with many impactful key features. There’s no reason you can’t have all of the same features including:
    						</p>
                            <ul className="uk-list uk-list-bullet">
                                <li>
                                    Indexing large and complex data catalogs
                                </li>
                                <li>
                                    Capture analytics signals that provide behavior insights you can use to automatically improve relevance and recommendation
                                </li>
                                <li>
                                    Powerful clustering and classification algorithms that improve the search experience for your and customers
                                </li>
                            </ul>
    						<Button type="text" size="large" format="primary">
                                LEARN MORE
                            </Button>
    					</div>
    				</div>
    			</div>
                <Footer />
    		</section>
        )
    }
}

export default Whitepaper;
