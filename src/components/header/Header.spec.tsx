import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { findByTestAttr } from '../../../utils'
import Header from './Header'
const shallowRender = (props = {}) => shallow(<Header {...props} />)

describe('Header Component', () => {
	let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
	beforeEach(() => (wrapper = shallowRender()))
	it('renders without errors', () =>
		expect(findByTestAttr(wrapper, 'header')).toHaveLength(1))
	it('renders logo', () =>
		expect(findByTestAttr(wrapper, 'header-logo')).toHaveLength(1))
})
