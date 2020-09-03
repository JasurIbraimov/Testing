import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../../utils'
import Header from './index'
const shallowRender = (props = {}) => shallow(<Header {...props} />)

describe('Header Component', () => {
	let component
	beforeEach(() => (component = shallowRender()))
	it('renders without errors', () =>
		expect(findByTestAttr(component, 'rc-header')).toHaveLength(1))
	it('renders logo', () =>
		expect(findByTestAttr(component, 'rc-header-logo')).toHaveLength(1))
})
