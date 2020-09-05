import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../../utils/func'
import { wrapperType } from '../../../utils/types'
import Header from './Header'
const shallowRender = (props = {}) => shallow(<Header {...props} />)
enum DataTestAttrs {
	Header = 'header'
}
describe('Header Component', () => {
	let wrapper: wrapperType
	beforeEach(() => {
		wrapper = shallowRender()
	})
	it('renders without errors', () => {
		expect(findByTestAttr(wrapper, DataTestAttrs.Header)).toHaveLength(1)
	})
})
