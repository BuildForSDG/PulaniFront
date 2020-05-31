import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app';

describe('app module', () => {
	const wrapper = shallow(<App />);

	it('that it exists', () => {
		expect(wrapper).toBeDefined();
	});

	it('that it renders without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
