import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import { findByTestAttr } from '../../../utils'
import { HeadlinePropsType } from './Headline'
import Headline from './Headline'

const shallowRender = (props = {}) => shallow(<Headline {...props} />)
describe('Headline Component', () => {
	let wrapper: ShallowWrapper<
		HeadlinePropsType,
		Readonly<{}>,
		React.Component<HeadlinePropsType, {}, any>
	>
	describe('when has props', () => {
		let props: HeadlinePropsType
		beforeEach(() => {
			props = {
				header: 'Posts',
				descr: 'Get a new post'
			}
			wrapper = shallowRender(props)
		})
		it('renders without errors', () =>
			expect(findByTestAttr(wrapper, 'headline')).toHaveLength(1))
		it('renders headline-header', () => {
			expect(findByTestAttr(wrapper, 'headline-header')).toHaveLength(1)
		})
		it('renders headline-header with text provided by props: header', () => {
			expect(findByTestAttr(wrapper, 'headline-header').text()).toBe(
				props.header
			)
		})
		it('renders headline-descr', () => {
			expect(findByTestAttr(wrapper, 'headline-descr')).toHaveLength(1)
		})
		it('renders headline-descr with text provided by props: descr', () => {
			expect(findByTestAttr(wrapper, 'headline-descr').text()).toBe(props.descr)
		})
	})
	describe('when has no props', () => {
		beforeEach(() => {
			wrapper = shallowRender()
		})
		it('renders without errors', () =>
			expect(findByTestAttr(wrapper, 'headline')).toHaveLength(1))
		it('does not render headline-header', () => {
			expect(findByTestAttr(wrapper, 'headline-header')).toHaveLength(0)
		})
		it('does not render headline-descr', () => {
			expect(findByTestAttr(wrapper, 'headline-descr')).toHaveLength(0)
		})
	})
})
