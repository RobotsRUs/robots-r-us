import { expect } from 'chai';
import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Home } from '../../client/components/Home';

const adapter = new Adapter();
enzyme.configure({ adapter });

describe('Home', () => {
  let home;

  beforeEach(() => {
    home = shallow(<Home username="cody" />);
  });

  it('renders the email in an h3', () => {
    expect(home.find('h3').text()).to.be.equal('Welcome, cody');
  });
});
