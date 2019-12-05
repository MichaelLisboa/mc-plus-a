import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import useRouter from "../../../lib/UseRouter";

const OffCanvas = () => {
    const {location} = useRouter();
    return (
        <div id="offcanvas-nav" data-uk-offcanvas="mode: push; overlay: true; flip: true">
            <div className="uk-offcanvas-bar uk-flex uk-flex-column uk-background-secondary">
                <button className="uk-offcanvas-close uk-close" type="button" data-uk-close></button>
                <ul className="uk-nav uk-nav-primary uk-margin-auto-vertical">
                    {location.pathname !== '/' &&
                        <li className="uk-padding-remove">
                            <NavLink to={`/`}><span data-uk-icon="icon: home; ratio: 0.75;" /> Home</NavLink>
                        </li>
                    }
                    <li className="uk-padding-remove">
                        <NavLink to={`/solution`}><span data-uk-icon="icon: video-camera; ratio: 0.9;" /> The Solution</NavLink>
                    </li>
                    <li className="uk-padding-remove">
                        <NavLink to={`/contact`}><span data-uk-icon="icon: commenting; ratio: 0.8;" /> Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default OffCanvas;
