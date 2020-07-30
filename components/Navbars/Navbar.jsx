import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";

import "../../assets/css/material-dashboard-react.css";
// @material-ui/icons
// core components

import logo from "../../assets/img/COVID.png";
import headerStyle from "../../assets/jss/material-dashboard-react/components/headerStyle.jsx";





function Header({ ...props }) {

   
  const { classes, color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return ( 
      
    <AppBar  className={classes.appBar + appBarClasses} 
         style={{  zIndex: "10"}}>
          <img src={logo} alt="logo"    className="imgg" />
        
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
