import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    backgroundColor: '#000000',
    height: '100px',
    paddingTop: theme.spacing.unit * 2,
  },
  elements: {
    color: theme.palette.primary.main,
    fontFamily: 'Staatliches',
    padding: theme.spacing.unit * 4,
  },
})

const Footer = props => {
  const { classes } = props;
  return (
    <Grid container justify="center" align="center" className={classes.container}>
      <Grid item>
        <Typography className={classes.elements} align="center">
          Kelvan Ince
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.elements} align="center">
          2019
        </Typography>
      </Grid>
    </Grid>
  )
}

export default (withStyles(styles)(Footer));
