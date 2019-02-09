import React from 'react';

import { Grid } from '@material-ui/core';
import { ArrowDropDownCircle } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import Rotation from './Rotation';

const styles = theme => ({
  innerText: {
    color: '#FFF',
    fontFamily: 'Kalam',
    fontSize: theme.spacing.unit * 6,
    fontWeight: 900,
  },
  nameContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '400px',
    height: '275px',
    transform: 'translate(-50%, -50%)',
    border: '2px solid white',
  },
  root: {
    position: 'relative',
  }
});

const Background = props => {
  const { classes, character } = props;
  return (
    <div className={classes.root}>
      <Rotation
        character={character}
      />
      <Grid className={classes.nameContainer}>
        <Grid item className={classes.innerText}>
          {character.name}
        </Grid>
        <Grid item className={classes.innerText}>
          Check out their films below
          <ArrowDropDownCircle />
        </Grid>
      </Grid>
    </div>
  )
}

export default (withStyles(styles)(Background));
