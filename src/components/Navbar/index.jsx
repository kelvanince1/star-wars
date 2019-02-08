import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import SideDrawer from '../SideDrawer';

const styles = theme => ({
  bar: {
    fontFamily: 'Staatliches',
    fontSize: theme.spacing.unit * 4,
    padding: '12px 0',
  },
  menuButton: {
    marginRight: theme.spacing.unit * 2.5,
  },
});

class Navbar extends Component {
  state = {
    headerTrans: false,
    open: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerTrans: true
      })
    } else {
      this.setState({
        headerTrans: false
      })
    }
  }

  toggleDrawer = val => {
    this.setState({
      open: val
    })
  }

  render() {
    const { classes } = this.props;
    const { headerTrans, open } = this.state;

    return (
      <AppBar
        position="fixed"
        color={headerTrans ? 'primary' : 'secondary'}
        className={classes.bar}
      >
        <Toolbar>
          <div>Star Wars</div>
          <IconButton
            color={headerTrans ? 'secondary' : 'primary'}
            onClick={() => this.toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <SideDrawer
            open={open}
            onClose={val => this.toggleDrawer(val)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
