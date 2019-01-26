import React from 'react';

import { Avatar } from '@material-ui/core';
import { shallow } from 'enzyme';

import Characters from '../Characters';
import Luke from '../../images/Characters/luke.png';

it('Shows an avatar containing a character image', () => {
  const virtualComponent = shallow(<Characters />);

  expect(virtualComponent.find(Avatar).contains(Luke));
});
