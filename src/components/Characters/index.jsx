import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { images } from './characterImages';
import { starWarsData } from './characters';
import { styles } from '../styles';

const Characters = props => {
  const { classes } = props;
  const characters = starWarsData.characters;

  return (
    <Grid container justify="space-around" align="center" spacing={40} className={classes.container}>
      <Grid item>
        <Typography variant="h5" className={classes.buttonTitle}>CHOOSE YOUR CHARACTER</Typography>
      </Grid>
      <Grid container justify="space-around" spacing={40}>
        {characters.map((ele, index) => {
          return (
            <Grid item key={ele.name} xs={12} sm={6}>
              <Typography
                className={classes.characterName}
              >
                {ele.name}
              </Typography>
              <Link to={{ pathname: '/character', ele }}>
                <Avatar
                  className={classes.characterAvatar}
                  src={images[index]}
                  alt={ele.name}
                />
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default (withStyles(styles)(Characters));
