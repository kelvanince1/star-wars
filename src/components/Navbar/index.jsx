import React from 'react';
import PropTypes from 'prop-types';

import {
  AppBar,
  Button,
  Toolbar,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
    paddingBottom: '40px',
  },
  menuButton: {
    marginRight: theme.spacing.unit * 2.5,
  },
});

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Button color="inherit" className={classes.menuButton}>
            <a
              href="https://github.com/kelvanince1/star-wars"
              target="_blank"
              style={{ textDecoration: 'none', color: '#000' }}
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
