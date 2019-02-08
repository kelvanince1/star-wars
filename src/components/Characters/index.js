import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Grid, Typography } from '@material-ui/core';
import {ArrowBack, ArrowForward } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { images } from './characterImages';
import { starWarsData } from './characters';

const styles = theme => ({
  arrows: {
    marginTop: theme.spacing.unit * 8,
  },
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

class Characters extends Component {
  state = {
    counter: 0,
  }
  render() {
    const { classes } = this.props;
    const { counter } = this.state;
    const characters = starWarsData.characters;

    return (
      <Grid container justify="center">
        <Grid item>
          <Typography variant="h5" color="primary">
            CHOOSE YOUR CHARACTER
          </Typography>
        </Grid>
        <Grid container justify="center" align="center">
          <Grid item key={counter} xs={12} sm={6}>
            <Typography
              className={classes.characterName}
            >
              {characters[counter].name}
            </Typography>
            <Link to={{ pathname: '/character' }}>
              <Avatar
                className={classes.characterAvatar}
                src={images[counter]}
                alt={characters[counter].name}
              />
            </Link>
          </Grid>
          <Grid item xs={6}>
            <ArrowForward
              className={classes.arrows}
              onClick={() => {
                  if (this.state.counter === 3) {
                    return this.setState({ counter: 0 })
                  }

                  this.setState(prevState => {
                     return {counter: prevState.counter + 1}
                  })
              }}
              color="primary"
            />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default (withStyles(styles)(Characters));
