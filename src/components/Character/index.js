import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import { Avatar, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { filmMap } from './filmMap';
import { fetchCharacters, fetchMovies } from '../../store/actions';

const styles = theme => ({
  errorTitle: {
    padding: theme.spacing.unit * 4,
    color: theme.palette.primary.main,
  },
  filmAvatar: {
    borderRadius: 0,
    cursor: 'pointer',
    height: 420,
    width: 300,
    '&:hover': {
       outline: `10px solid ${theme.palette.primary.main}`,
       transition: 'outline 0.6s linear',
       margin: '0.1em',
    },
  },
});

class Character extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
    if (this.props.location.ele) {
      const { url } = this.props.location.ele;
      this.props.fetchCharacters(url);
    }
  }

  render() {
    const { character, classes, error } = this.props;
    const lastElements = [];
    let errorMessage;

    if (error) {
      errorMessage = (
        <Typography variant="h4" className={classes.errorTitle}>
          We cannot find the data for this character. Try another
        </Typography>
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
      <Fade left>
        <Grid container className={classes.container} justify="center" align="center" spacing={40}>
          <Grid item xs={12}>
            {
              character.name && !error ?
              <div>
                <Typography variant="h5" color="primary">
                  CHOOSE A FILM TO SEE SOME COOL DETAILS
                </Typography>
                <Link to="/">
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    color="primary"
                  >
                    Select a different character
                  </Typography>
                </Link>
                <Typography variant="subtitle1" color="primary">
                  {character.name}s films
                </Typography>
              </div>
              :
              <Link to="/">
                <Typography color="primary">
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
                  <Typography color="primary">
                    {film.title}
                  </Typography>
                  <Link to="/movie">
                    <Avatar
                      onClick={() => this.props.fetchMovies(film.id)}
                      className={classes.filmAvatar}
                      src={film.image}
                      alt={film.title}
                    />
                  </Link>
                </Grid>
              )
            }})
            : null
          }
        </Grid>
      </Fade>
    );
  }
}

const mapStateToProps = state => {
  return {
    character: state.reducer.characters,
    error: state.reducer.error,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: url => dispatch(fetchCharacters(url)),
    fetchMovies: id => dispatch(fetchMovies(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Character));
