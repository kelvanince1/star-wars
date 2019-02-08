import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { images } from './characterImages';
import { starWarsData } from './characters';

const styles = theme => ({
  characterAvatar: {
    borderRadius: 0,
    cursor: 'pointer',
    height: 450,
    width: 330,
    '&:hover': {
       outline: `10px solid ${theme.palette.primary.main}`,
       transition: 'outline 0.6s linear',
       margin: '0.1em',
    },
  },
  characterName: {
    color: theme.palette.primary.main,
    padding: theme.spacing.unit * 2.5,
  },
});

const Characters = props => {
  const { classes } = props;
  const characters = starWarsData.characters;

  return (
    <Grid container justify="space-around" align="center" spacing={40} className={classes.container}>
      <Grid item>
        <Typography variant="h5" color="primary">
          CHOOSE YOUR CHARACTER
        </Typography>
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
