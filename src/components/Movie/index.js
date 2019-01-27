import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

import { Typography } from '@material-ui/core';

import { styles } from '../styles';
import { formatDate } from '../../helperFunctions/dateFormatter';

const movie = props => {
  window.scrollTo(0,0);
  const { character, films } = props;

  return (
    <div style={styles.container}>
      {
        films.title ? (
          <div>
            <Link to={{ pathname: '/character', character }}>
              <Typography variant="subtitle2" style={styles.buttonTitle}>
                Select a different film
              </Typography>
            </Link>
            <Link to={{ pathname: '/' }}>
              <Typography variant="subtitle2" style={styles.buttonTitle}>
                Select a different character
              </Typography>
            </Link>
            <Typography style={styles.openingCrawl} variant="h3">
              {films.title}
            </Typography>
            <Typography style={styles.openingCrawl} variant="h3">
              {formatDate(films.release_date)}
            </Typography>
            <Slide bottom effect="fadeInUp">
              <Typography style={styles.openingCrawl} variant="h3">
                {films.opening_crawl}
              </Typography>
            </Slide>
          </div>
        ) : (
          <div style={styles.container}>
            <Link to="/">
              <Typography variant="subtitle2" style={styles.buttonTitle}>
                Select a character to get started
              </Typography>
            </Link>
          </div>
        )
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    character: state.reducer.characters,
    films: state.reducer.films,
  }
}

export default connect(mapStateToProps, null)(movie);
