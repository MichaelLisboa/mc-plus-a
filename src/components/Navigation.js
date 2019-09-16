import React, { Component } from "react";
import NavMenu from "./presentation/NavMenu";
import OffCanvas from "./presentation/OffCanvas";

class Navigation extends Component {
    render() {
        return (
            <>
                <NavMenu />
                <OffCanvas />
            </>
        )
    }
}

export default Navigation;
