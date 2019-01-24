import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Avatar, Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { images } from './imageTidier';
import { fetchCharacters } from '../../store/actions';

const styles = {
  avatar: {
    borderRadius: 0,
    cursor: 'pointer',
    height: 450,
    width: 330,
    '&:hover': {
       outline: '10px solid #FFD700',
       transition: 'outline 0.6s linear',
       margin: '0.1em',
    },
  },
  buttonTitle: {
    color: '#FFD700',
  },
  characterName: {
    color: '#FFD700',
  },
  container: {
    background: 'linear-gradient(to right, #000000, #434343)',
  },
}

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarName: '',
      indexStart: 0,
      indexEnd: 3 ,
      page: 0,
    }
  }

  handleClick = () => {
    this.props.fetchCharacters();
  }

  getNextCharacterSet = () => {
    this.setState({
      indexStart: this.state.indexStart + 3,
      indexEnd: this.state.indexEnd + 3,
      page: this.state.page + 1
    });
  }

  render() {
    const { characters, classes } = this.props;
    const { avatarName, indexStart, indexEnd } = this.state;

    return (
      <Grid container justify="space-around" align="center" spacing={40} className={classes.container}>
        <Grid item>
          <Typography variant="h5" className={classes.buttonTitle}>CHOOSE YOUR CHARACTER</Typography>
        </Grid>
        {characters.map((ele, index) => {
          return (
            <Grid item>
              <Typography
                className={classes.characterName}
              >
                {ele.name}
              </Typography>
              <Avatar
                className={classes.avatar}
                src={images[index]}
                alt={ele.name}
              />
            </Grid>
          )
        })}
        <Grid item>
          <Button
            onClick={this.handleClick}
            className={classes.buttonTitle}
          >
            Click
          </Button>
        </Grid>
        <Grid item align="center">
          <Button
            onClick={this.getNextCharacterSet}
            className={classes.buttonTitle}
          >
            Next Three
          </Button>
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
