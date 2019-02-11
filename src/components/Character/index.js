import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Background from '../Background';
import Details from '../Details';
import { fetchCharacters } from '../../store/actions';

const styles = theme => ({
  errorTitle: {
    padding: theme.spacing.unit * 4,
    fontFamily: 'Kalam',
  },
  helperTitle: {
    paddingTop: theme.spacing.unit * 4,
    fontFamily: 'Kalam',
    fontSize: theme.spacing.unit * 6,
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
        <Typography
          variant="h4"
          className={classes.errorTitle}
          color="primary"
        >
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
      lastElements.sort();
    }

    return (
      <Fade left>
        <Grid container justify="center" align="center">
          {character.name && !error ?
            <Grid container justify="center" align="center">
              <Grid item xs={12}>
                <Background
                  character={character}
                />
              </Grid>
              <Grid item xs={12}>
                <Details
                  character={character}
                  characterFilms={lastElements}
                  error={error}
                />
              </Grid>
            </Grid>
            :
            <Link to="/">
              <Typography
                color="primary"
                className={classes.helperTitle}
              >
                Click here to select your character
              </Typography>
            </Link>
          }
          {errorMessage}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Character));
