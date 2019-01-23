import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { fetchCharacters } from '../../store/actions';
import C3po from '../../images/c3po.png';
import Luke from '../../images/luke.png';
import Leia from '../../images/leia.png';
import ObiWan from '../../images/obiwan.png';
import Owen from '../../images/owen.png';
import R2d2 from '../../images/r2d2.png';
import R5d4 from '../../images/r5d4.png';
import Vader from '../../images/vader.png';

const styles = {
  avatar: {
    borderRadius: 0,
    width: 330,
    height: 450,
  },
}

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
    }
  }

  handleClick = () => {
    this.props.fetchCharacters();
  }
  render() {
    const { characters, classes } = this.props;

    return (
      <Grid container justify="space-around" align="center" spacing={40}>
        <Grid item>
          <Typography variant="primary">CHOOSE YOUR CHARACTER</Typography>
        </Grid>
        {characters.map(ele => {
          return (
            <Grid item key={ele.name}>
              <Typography>{ele.name}</Typography>
            </Grid>
          )
        })}
        <Grid container align="center" justify="space-around">
          <Avatar className={classes.avatar} src={Luke} alt="Luke" />
          <Avatar className={classes.avatar} src={C3po} alt="C3po" />
          <Avatar className={classes.avatar} src={R2d2} alt="R2D2" />
        </Grid>
        <Grid item>
          <Button onClick={this.handleClick}>Click</Button>
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    characters: state.reducer.characters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: () => dispatch(fetchCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Characters));
