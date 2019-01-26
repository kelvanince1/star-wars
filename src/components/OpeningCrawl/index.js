import React from 'react';

import { Typography } from '@material-ui/core';

const intro = props => {
  return (
    <Typography>
      {props.location.openingCrawl}
    </Typography>
  )
}

export default intro;
