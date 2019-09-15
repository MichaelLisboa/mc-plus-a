import React from "react";

export const Button = ({children, ...props}) =>
    <button title="Learn More" className={`uk-button uk-button-${props.size} uk-button-${props.format}`}>{children}</button>
