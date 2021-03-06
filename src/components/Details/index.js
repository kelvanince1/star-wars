import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar, Grid, Typography } from '@material-ui/core';
import { ArrowRight, InfoOutlined, PersonOutlineRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { fetchMovies } from '../../store/actions';
import { filmMap } from './filmMap';
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
    const { classes, films } = this.props;

    return (
      <Grid>
        <Grid item className={classes.cental}>
          <Grid item xs={12}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography
                className={classes.linkText}
                color="primary"
              >
                Click here to select another character
                <PersonOutlineRounded
                  style={{ verticalAlign: 'middle' }}
                />
              </Typography>
            </Link>
          </Grid>
          <Grid
            container
            justify="center"
            align="center"
            className={classes.outerWrapper}
          >
            <Grid item xs={12} sm={6} className={classes.element}>
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
            </Grid>
            <Grid item xs={12} sm={6} className={classes.element}>
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
            </Grid>
            <Typography
              color="primary"
              onClick={() => this.handleNext()}
              className={classes.nextButtonText}
            >
              NEXT FILM <ArrowRight />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.openingCrawl}
              color="primary"
            >
                {films.opening_crawl}
            </Typography>
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
