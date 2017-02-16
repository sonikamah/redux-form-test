import React from 'react';
import Login from '../index';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import update from 'react-addons-update';

test('Login Component snapshot', () => {
    const login = renderer.create(
        <Login/>
    );
    let tree = login.toJSON();
    expect(tree).toMatchSnapshot();

});

