import React from "react";
import { NavLink } from "react-router-dom";

export const Button = ({children, ...props}) =>
    <button className={`uk-button uk-button-${props.size} uk-button-${props.format}`}>{children}</button>

export const AnchorButton = ({children, ...props}) =>
    <NavLink to={props.path} className={`uk-button uk-button-${props.size} uk-button-${props.format}`}>{children}</NavLink>
