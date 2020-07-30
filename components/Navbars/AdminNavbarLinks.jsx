import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";
import "assets/css/material-dashboard-react.css";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import Stopwatch from "variables/Stopwatch.jsx";


import headerLinksStyle from "assets/jss/material-dashboard-react/components/headerLinksStyle.jsx";

class HeaderLinks extends React.Component {
  state = {
    open: false
  };
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };
  handleButtonClick() {
    this.forceUpdate() ;
    //  console.log("I'm rendering");
  }
  render() {
    const { classes } = this.props;
    const { open } = this.state;
      
    return (
      <div className="hos">
             <div className={classes.searchWrapper} >

                    <Stopwatch />
        </div>
    
            
           
        <Button
          color={window.innerWidth > 959 ? "transparent" : "transparent"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          
          className={classes.buttonLink}
           onClick={this.handleButtonClick.bind(this)}
        >
   
     <i class="material-icons">
autorenew
</i>
          
        </Button>
        
            
            
        <div className={classes.manager}>
          
    
        </div>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "transparent"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
         
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
         
        </Button>
      </div>
    );
  }
}

export default withStyles(headerLinksStyle)(HeaderLinks);
