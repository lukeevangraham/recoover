import React from "react";

import GoogleAuth from "../../../containers/GoogleAuth/GoogleAuth"

import classes from "./NavigationItems.module.css"

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
    <GoogleAuth />
    </ul>
)

export default navigationItems