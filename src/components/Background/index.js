import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Rotation from './Rotation';

const styles = () => ({
  nameContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '400px',
    height: '160px',
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
      <div className={classes.nameContainer}>
        <div>
          {character.name}
        </div>
      </div>
    </div>
  )
}

export default (withStyles(styles)(Background));
