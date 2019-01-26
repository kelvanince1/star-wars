import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Typography } from '@material-ui/core';

import './intro.css';

const intro = props => {
  return (
    <ReactCSSTransitionGroup
      transitionName="slide"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      <Typography>
        {props.location.openingCrawl}
      </Typography>
    </ReactCSSTransitionGroup>
  )
}

export default intro;
