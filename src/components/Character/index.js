import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { filmMap } from './filmMap';
import  { styles } from '../styles';
import { fetchCharacters, fetchMovies } from '../../store/actions';

class Character extends Component {
  componentDidMount() {
    if (this.props.location.ele) {
      const { url } = this.props.location.ele;
      this.props.fetchCharacters(url);
      this.props.fetchMovies();
    }
  }

  render() {
    const { character, classes, error, films } = this.props;
    const lastElements = [];
    let errorMessage;

    if (error) {
      console.log('ERROR', error);
      errorMessage = (
        <Typography variant="h4" className={classes.errorTitle}>We cannot find the data for this character. Try another</Typography>
      )
    }

    if (character.films) {
      for (let ele of character.films) {
        ele = ele.split('');
        ele.pop();
        lastElements.push(JSON.parse(ele.pop()));
      }
    }

    return (
      <Grid container className={classes.filmContainer} justify="center" align="center" spacing={40}>
        <Grid item xs={12}>
          {
            character.name && !error ?
            <Link to="/">
              <Typography className={classes.buttonTitle}>
                Select a different character
              </Typography>
              <Typography className={classes.buttonTitle}>
                {character.name}s films
              </Typography>
            </Link>
            :
            <Link to="/">
              <Typography className={classes.buttonTitle}>
                Select your character
              </Typography>
            </Link>
          }
          {errorMessage}
        </Grid>
        {
          !error ?
          filmMap.map(film => {
          if (lastElements.includes(film.id)) {
            return (
              <Grid item xs={12} sm={6} key={film.title}>
                <Typography className={classes.buttonTitle}>{film.title}</Typography>
                <Avatar
                  className={classes.filmAvatar}
                  src={film.image}
                  alt={film.title}
                />
              </Grid>
            )
          }
        })
        : null
      }
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    character: state.reducer.characters,
    error: state.reducer.error,
    films: state.reducer.films,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: url => dispatch(fetchCharacters(url)),
    fetchMovies: () => dispatch(fetchMovies()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Character));
