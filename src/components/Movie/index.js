import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { formatDate } from '../../helperFunctions/dateFormatter';

const styles = theme => ({
  openingCrawl: {
    padding: theme.spacing.unit * 4,
    color: theme.palette.primary.main,
  },
});

const movie = props => {
  window.scrollTo(0,0);
  const { character, classes, films } = props;

  return (
    <Grid className={classes.container}>
      {
        films.title ? (
          <div>
            <Link to={{ pathname: '/character', character }}>
              <Typography variant="subtitle2" color="primary">
                Select a different film
              </Typography>
            </Link>
            <Link to={{ pathname: '/' }}>
              <Typography variant="subtitle2" color="primary">
                Select a different character
              </Typography>
            </Link>
            <Typography className={classes.openingCrawl} variant="h3">
              {films.title}
            </Typography>
            <Typography className={classes.openingCrawl} variant="h3">
              {formatDate(films.release_date)}
            </Typography>
            <Slide bottom effect="fadeInUp">
              <Typography className={classes.openingCrawl} variant="h3">
                {films.opening_crawl}
              </Typography>
            </Slide>
          </div>
        ) : (
          <Grid className={classes.container}>
            <Link to="/">
              <Typography variant="subtitle2" color="primary">
                Select a character to get started
              </Typography>
            </Link>
          </Grid>
        )
      }
    </Grid>
  )
}

const mapStateToProps = state => {
  return {
    character: state.reducer.characters,
    films: state.reducer.films,
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(movie));
