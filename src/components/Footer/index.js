import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: '100px',
    paddingTop: theme.spacing.unit * 2,
  },
  elements: {
    padding: theme.spacing.unit * 4,
  },
})

const Footer = props => {
  const { classes } = props;
  return (
    <Grid container justify="center" align="center" className={classes.container}>
      <Grid item className={classes.elements}>
        <Typography align="center">
          Kelvan Ince
        </Typography>
      </Grid>
      <Grid item className={classes.elements}>
        <Typography align="center">
          2019
        </Typography>
      </Grid>
    </Grid>
  )
}

export default (withStyles(styles)(Footer));
