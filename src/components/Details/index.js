import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { InfoOutlined, InfoRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './style';

const Details = props => {
  const { character, classes } = props;

  console.log('CHAR', character);
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
                <Typography
                  className={classes.innerText}
                  color="primary"
                >
                    {character.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.element}>
            <Grid item className={classes.elementChild}>
              <Grid item className={classes.elementInner}>
                <Grid item className={classes.squareElement}></Grid>
                <Grid item className={classes.iconElement}>
                  <InfoRounded />
                </Grid>
                <Typography
                  className={classes.innerText}
                  color="primary"
                >
                  {character.name}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default (withStyles(styles)(Details));
