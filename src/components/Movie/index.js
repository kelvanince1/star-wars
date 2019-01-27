import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

import { Typography } from '@material-ui/core';

import { styles } from '../styles';
import { formatDate } from '../../helperFunctions/dateFormatter';

const movie = props => {
  window.scrollTo(0,0);
  const { films } = props;
  const { film } = props.location;
  let releaseDate;
  let openingCrawl;
  let title;


  if (film) {
    for (let ele of films.results) {
      if (ele.episode_id === film.episodeId) {
        releaseDate = formatDate(ele.release_date);
        openingCrawl = ele.opening_crawl;
        title  = film.title;
      }
    }
  }

  return (
    <div style={styles.container}>
      <Link to="/">
        <Typography variant="subtitle2" style={styles.buttonTitle}>
          Select a characer to get started
        </Typography>
      </Link>
      <Typography style={styles.openingCrawl} variant="h3">
        {title}
      </Typography>
      <Typography style={styles.openingCrawl} variant="h3">
        {releaseDate}
      </Typography>
      <Slide bottom effect="fadeInUp">
        <Typography style={styles.openingCrawl} variant="h3">
          {openingCrawl}
        </Typography>
      </Slide>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    films: state.reducer.films,
  }
}

export default connect(mapStateToProps, null)(movie);
