import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Avatar, Grid, Typography } from '@material-ui/core';
import { ArrowRight, ArrowLeft,InfoOutlined, InfoRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { fetchMovies } from '../../store/actions';
import { filmMap } from '../Character/filmMap';
import { styles } from './style';
import { formatDate } from '../../helperFunctions/dateFormatter';

class Details extends Component {
  state = {
    counter: 1
  }
  componentDidMount() {
    const { characterFilms } = this.props;
    this.props.fetchMovies(characterFilms[0]);
  }

  handleNext = () => {
    const { characterFilms } = this.props;
    const { counter } = this.state;
    this.props.fetchMovies(characterFilms[counter]);

    if (counter === characterFilms.length -1) {
      return this.setState({
        counter: 0
      });
    }

    this.setState({
      counter: counter + 1
    });
  }

  render() {
    const { character, classes, error, characterFilms, films } = this.props;

    return (
      <Grid>
        <Grid item className={classes.cental}>
          <Grid item className={classes.outerWrapper}>
            <Grid item className={classes.element}>
              <Grid item className={classes.elementChild}>
                <Grid item className={classes.elementInner}>
                  <Grid item className={classes.squareElement}></Grid>
                  <Grid item className={classes.iconElement}>
                    <InfoOutlined />
                  </Grid>
                  {films.title ?
                    (
                      <div>
                        <Typography
                          className={classes.innerText}
                          color="primary"
                        >
                          {films.title}
                        </Typography>
                        <Typography
                          className={classes.innerText}
                          color="primary"
                        >
                          {formatDate(films.release_date)}
                        </Typography>
                      </div>
                    ) : null
                  }
                </Grid>
              </Grid>
              <Typography
                className={classes.innerText}
                color="primary"
              >
                  {films.opening_crawl}
              </Typography>
            </Grid>
            <Grid item className={classes.element}>
              <Grid item className={classes.squareElement}></Grid>
              <Grid item className={classes.iconElement}>
                <InfoRounded />
              </Grid>
                {filmMap.map(film => {
                  if (films.title === film.title) {
                    return (
                      <Avatar
                        key={films.title}
                        className={classes.filmAvatar}
                        src={film.image}
                        alt={films.title}
                      />
                    )
                  }
                })}
                <Typography
                  color="primary"
                  onClick={() => this.handleNext()}
                  className={classes.helperText}
                >
                  NEXT FILM <ArrowRight />
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    films: state.reducer.films,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMovies: id => dispatch(fetchMovies(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Details));
