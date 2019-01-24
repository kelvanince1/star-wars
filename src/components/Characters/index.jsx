import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { images } from './characterImages';
import { starWarsData } from './characters';

const styles = {
  avatar: {
    borderRadius: 0,
    cursor: 'pointer',
    height: 450,
    width: 330,
    '&:hover': {
       outline: '10px solid #FFD700',
       transition: 'outline 0.6s linear',
       margin: '0.1em',
    },
  },
  buttonTitle: {
    color: '#FFD700',
  },
  characterName: {
    color: '#FFD700',
  },
  container: {
    background: 'linear-gradient(to right, #000000, #434343)',
  },
}

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
            <Grid item key={ele.name}>
              <Typography
                className={classes.characterName}
              >
                {ele.name}
              </Typography>
              <Link to={{ pathname: '/character', ele }}>
                <Avatar
                  className={classes.avatar}
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
