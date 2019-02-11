import React from 'react';

import { Avatar } from '@material-ui/core';
import { shallow } from 'enzyme';

import Details from '../Details';
import Luke from '../../images/Rotation/Luke/luke1.jpg';

it('Shows an avatar containing a character image', () => {
  const virtualComponent = shallow(<Details />);

  expect(virtualComponent.find(Avatar).contains(Luke));
});
