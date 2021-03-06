import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
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
  navTitle: {
    fontFamily: 'Staatliches',
    fontSize: theme.spacing.unit * 4,
  }
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
    window.removeEventListener('scroll', this.handleUnScroll);
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

  handleUnScroll = () => {
    this.setState({
      headerTrans: false
    });
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
        color={headerTrans ? 'secondary' : 'primary'}
        className={classes.bar}
      >
        <Toolbar>
          <IconButton
            color={headerTrans ? 'primary' : 'secondary'}
            onClick={() => this.toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <IconButton
              color={headerTrans ? 'primary' : 'secondary'}
              className={classes.navTitle}
            >
              Star Wars
            </IconButton>
          </Link>
          <SideDrawer
            open={open}
            onClose={val => this.toggleDrawer(val)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default (withStyles(styles)(Navbar));
