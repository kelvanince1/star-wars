import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Grid, Typography } from '@material-ui/core';

import { fetchCharacters } from '../../store/actions';

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
    const { characters } = this.props;

    return (
      <Grid container justify="space-around" align="center">
        {characters.map(ele => {
          return (
            <Grid item key={ele.name}>
              <Typography>{ele.name}</Typography>
            </Grid>
          )
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
