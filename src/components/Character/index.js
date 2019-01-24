import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Avatar, Grid, Typography } from '@material-ui/core';

import { images } from './filmImages';
import { fetchCharacters } from '../../store/actions';

class Character extends Component {
  componentWillMount() {
    const { url } = this.props.location.ele;
    this.props.fetchCharacters(url);
  }

  render() {
      return (
        <div>Hello</div>
      );
  }
}
  // let filmSet;

  // for (let film of images) {
  //   if (character.films.inlcudes(film)) {
  //     filmSet = (
  //       <Grid container>
  //         {images.map(index => (
  //           <Avatar
  //             src={images[index]}
  //             alt={character.film}
  //           />
  //         ))}
  //       </Grid>
  //     )
  //   }
  // }
  // return (
  //   <Grid container>
  //     {
  //       character ?
  //       <Grid item>
  //         {character.name}
  //       </Grid>
  //       : <Link to="/"><Typography>Select your character</Typography></Link>
  //     }
  //   </Grid>
  // )

const mapStateToProps = state => {
  return {
    character: state.reducer.characters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: url => dispatch(fetchCharacters(url)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);
