import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../../utils/func'
import { wrapperType, elemsType } from '../../../utils/types'
import { HeadlinePropsType } from './Headline'
import Headline from './Headline'

const shallowRender = (props: HeadlinePropsType) =>
	shallow(<Headline {...props} />)
describe('Headline Component', () => {
	let wrapper: wrapperType
	let props: HeadlinePropsType
	describe('when has props', () => {
		beforeEach(() => {
			props = {
				header: 'Posts',
				descr: 'Get a new post'
			}
			wrapper = shallowRender(props)
		})

		it('renders without errors', () =>
			expect(findByTestAttr(wrapper, 'headline')).toHaveLength(1))

		describe('headline header', () => {
			let headerElem: elemsType
			beforeEach(() => {
				headerElem = findByTestAttr(wrapper, 'headline-header')
			})
			it('renders without errors', () => expect(headerElem).toHaveLength(1))
			it('renders headline-header with text provided by props: header', () =>
				expect(headerElem.text()).toBe(props.header))
		})

		describe('headline descr', () => {
			let descrElem: elemsType
			beforeEach(() => {
				descrElem = findByTestAttr(wrapper, 'headline-descr')
			})
			it('renders without errors', () => expect(descrElem).toHaveLength(1))
			it('renders headline-descr with text provided by props: descr', () =>
				expect(descrElem.text()).toBe(props.descr))
		})
	})
	describe('when has no props', () => {
		beforeEach(() => {
			props = {}
			wrapper = shallowRender(props)
		})
		it('renders without errors', () =>
			expect(findByTestAttr(wrapper, 'headline')).toHaveLength(1))
		describe('headline header', () => {
			let headerElem: elemsType
			beforeEach(() => {
				headerElem = findByTestAttr(wrapper, 'headline-header')
			})
			it('renders without errors', () => expect(headerElem).toHaveLength(1))
			it('renders headline-header using default props', () =>
				expect(headerElem.text()).toBe(Headline.defaultProps?.header))
		})
		describe('headline descr', () => {
			let descrElem: elemsType
			beforeEach(() => {
				descrElem = findByTestAttr(wrapper, 'headline-descr')
			})
			it('renders without errors', () => expect(descrElem).toHaveLength(1))
			it('renders headline-descr using default props', () =>
				expect(descrElem.text()).toBe(Headline.defaultProps?.descr))
		})
	})
})
