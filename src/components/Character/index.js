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
    const { character, classes, films } = this.props;
    const lastElements = [];

    if (character.films) {
      for (let ele of character.films) {
        ele = ele.split('');
        ele.pop();
        lastElements.push(JSON.parse(ele.pop()));
      }
    }

    return (
      <Grid container style={{ marginTop: '50px' }}>
        {
          character.name || <Link to="/"><Typography>Select your character</Typography></Link>
        }
        {filmMap.map(film => {
          if (lastElements.includes(film.id)) {
            return (
              <Grid container justify="space-around" key={film.title}>
                <Grid item>
                  <Typography>{film.title}</Typography>
                  <Avatar
                    className={classes.filmAvatar}
                    src={film.image}
                    alt={film.title}
                  />
                </Grid>
              </Grid>
            )
          }
        })}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    character: state.reducer.characters,
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
