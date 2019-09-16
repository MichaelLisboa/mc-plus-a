import React, { Component } from "react";
import { Button } from "./presentation/Button";

class Whitepaper extends Component {
    render() {
        return (
            <section className="uk-section uk-section-muted uk-section-large"
                data-uk-height-viewport="true"
                data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > *; delay: 250"
                >
    			<div className="uk-container uk-height-1-1">
    				<div className="uk-grid uk-child-width-1-2@l uk-flex-middle">
    					<div data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; target: > *; delay: 250">
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
    						<Button type="text" size="large" format="primary" data-uk-scrollspy-class="uk-animation-fade">
                                LEARN MORE
                            </Button>
    					</div>
    				</div>
    			</div>
    		</section>
        )
    }
}

export default Whitepaper;
