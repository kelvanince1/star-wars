import React from 'react';
import Slider from "react-slick";

import { withStyles } from '@material-ui/core/styles';

import Luke1 from '../../images/Rotation/Luke/luke1.jpg';
import Luke2 from '../../images/Rotation/Luke/luke2.jpg';
import Luke3 from '../../images/Rotation/Luke/luke3.jpg';
import R2d21 from '../../images/Rotation/R2d2/r2d21.jpg';
import R2d22 from '../../images/Rotation/R2d2/r2d22.jpg';
import R2d23 from '../../images/Rotation/R2d2/r2d23.jpg';
import Vader1 from '../../images/Rotation/Vader/vader1.jpg';
import Vader2 from '../../images/Rotation/Vader/vader2.jpg';
import Vader3 from '../../images/Rotation/Vader/vader3.jpg';

const styles = () => ({
  image: {
    backgroundSize: 'cover !important',
    height: `${window.innerHeight}px`,
    width: '100%',
  },
  root: {
    overflow: 'hidden',
    height: `${window.innerHeight}px`,
  }
});

const Rotation = props => {
  const options = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  }

  const { classes, character } = props;

  let start;
  let mid;
  let end;

  if (character.name === 'Luke Skywalker') {
    start = Luke1;
    mid = Luke2;
    end = Luke3;
  } else if (character.name === 'R2-D2') {
    start = R2d21;
    mid = R2d22;
    end = R2d23;
  } else if (character.name === 'Darth Vader') {
    start = Vader1;
    mid = Vader2;
    end = Vader3;
  }

  return (
    <div className={classes.root}>
      <Slider
        {...options}
      >
        <div>
          <div
            className={classes.image}
            style={{
              background: `url(${start})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
        <div>
          <div
            className={classes.image}
            style={{
              background: `url(${mid})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
        <div>
          <div
            className={classes.image}
            style={{
              background: `url(${end})`,
              height: `${window.innerHeight}px`
            }}
          >
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default (withStyles(styles)(Rotation));
