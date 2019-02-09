import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { starWarsData } from './characters';

const styles = theme => ({
  characterAvatar: {
    borderRadius: 0,
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    '&:hover': {
       outline: `10px solid ${theme.palette.primary.main}`,
       transition: 'outline 0.6s linear',
       margin: '0.1em',
    },
  },
  characterName: {
    color: theme.palette.primary.main,
    fontFamily: 'Kalam',
    padding: theme.spacing.unit * 2.5,
  },
});

const Characters = props => {
  const { classes } = props;
  const characters = starWarsData.characters;

  return (
    <Grid container direction="column" justify="space-around" align="center" spacing={40}>
      <Grid item>
        <Typography
          className={classes.characterName}
          variant="h3"
          color="primary"
        >
          CHOOSE YOUR CHARACTER
        </Typography>
      </Grid>
      {characters.map((ele, index) => {
        return (
          <Grid item key={ele.name} xs={12} sm={6}>
            <Link
              to={{ pathname: '/character', ele }}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                className={classes.characterName}
                variant="h6"
                color="primary"
              >
                {ele.name}
              </Typography>
            </Link>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default (withStyles(styles)(Characters));
