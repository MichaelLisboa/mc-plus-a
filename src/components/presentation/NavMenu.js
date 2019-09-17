import React, { useContext } from "react";
import { NavLink, __RouterContext } from "react-router-dom";
import logo from "../../images/MCA.svg"

const useRouter = () => {
  return useContext(__RouterContext)
}

const NavMenu = () => {
    const {location} = useRouter();
    return (
        <div className="nav" data-uk-sticky="cls-active: uk-background-secondary uk-light; top: 5vh; animation: uk-animation-fade uk-visible@s">
    		<div className="uk-container uk-visible@s">
    			<nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
    				<div className="uk-navbar-left">
    					<div className="uk-navbar-item">
                            {location.pathname === '/' ?
                            <img src={logo} width="150px" alt="MC+A Logo" data-uk-image />
                            : <NavLink to={`/`}><img src={logo} width="150px" alt="MC+A Logo" data-uk-image /></NavLink>
                            }
    					</div>
    				</div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            {location.pathname !== '/' &&
                                <li>
                                    <NavLink to={`/`}><span className="uk-icon uk-margin-small-right" data-uk-icon="icon: home; ratio: 0.85"></span> Home</NavLink>
                                </li>
                            }
                            <li>
                                <NavLink to={`/whitepaper`}><span className="uk-icon uk-margin-small-right" data-uk-icon="icon: list; ratio: 0.85"></span> Whitepaper</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/webinar`}><span className="uk-icon uk-margin-small-right" data-uk-icon="icon: video-camera; ratio: 0.85"></span> Webinar</NavLink>
                            </li>
                            <li>
                                <NavLink to={`/contact`}><span className="uk-icon uk-margin-small-right" data-uk-icon="icon: commenting; ratio: 0.85"></span> Contact</NavLink>
                            </li>
                        </ul>
    				</div>
    			</nav>
    		</div>
    	</div>
    )
}

export default NavMenu;
