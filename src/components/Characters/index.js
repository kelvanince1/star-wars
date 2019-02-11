import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';
import { StarBorderRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

import { starWarsData } from './characters';

const styles = theme => ({
  characterName: {
    color: theme.palette.primary.main,
    fontFamily: 'Kalam',
    fontSize: theme.spacing.unit * 5,
    padding: theme.spacing.unit,
  },
  characterTitle: {
    color: theme.palette.primary.main,
    fontFamily: 'Staatliches',
    fontSize: theme.spacing.unit * 6,
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit,
  },
});

const Characters = props => {
  window.scrollTo(0,0);
  const { classes } = props;
  const characters = starWarsData.characters;

  return (
    <Grid container direction="column" justify="space-around" align="center" spacing={40}>
      <Grid item>
        <Typography
          className={classes.characterTitle}
          variant="h3"
          color="primary"
        >
          CHOOSE YOUR CHARACTER
        </Typography>
      </Grid>
      {characters.map((ele, index) => {
        return (
          <Grid
            item
            key={ele.name}
            xs={12}sm={6}
            className={classes.innerContainer}
          >
            <Link
              to={{ pathname: '/character', ele }}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                className={classes.characterName}
                variant="h6"
                color="primary"
              >
                {ele.name} <StarBorderRounded />
              </Typography>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default (withStyles(styles)(Characters));
