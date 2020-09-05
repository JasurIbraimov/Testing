import React from 'react'
import ListItem, { ListItemPropsType } from './ListItem'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../../utils/func'
import { wrapperType, elemsType } from '../../../utils/types'
const shallowRender = (props: ListItemPropsType) =>
	shallow(<ListItem {...props} />)
enum DataTestAttrs {
	ListItem = 'listItem',
	ListItemBody = 'listItem-body',
	ListItemTitle = 'listItem-title'
}
describe('Button Component', () => {
	let props: ListItemPropsType
	let wrapper: wrapperType
	beforeEach(() => {
		props = {
			body: 'some text',
			title: 'Title'
		}
		wrapper = shallowRender(props)
	})
	it('renders without error', () => {
		expect(findByTestAttr(wrapper, DataTestAttrs.ListItem)).toHaveLength(1)
	})
	describe('listItem body', () => {
		let bodyElem: elemsType
		beforeEach(() => {
			bodyElem = findByTestAttr(wrapper, DataTestAttrs.ListItemBody)
		})
		it('renders without error', () => {
			expect(bodyElem).toHaveLength(1)
		})
		it('renders button with text provided by props', () => {
			expect(bodyElem.text()).toBe(props.body)
		})
	})
	describe('listItem title', () => {
		let titleElem: elemsType
		beforeEach(() => {
			titleElem = findByTestAttr(wrapper, DataTestAttrs.ListItemTitle)
		})
		it('renders without error', () => {
			expect(titleElem).toHaveLength(1)
		})
		it('renders button with text provided by props', () => {
			expect(titleElem.text()).toBe(props.title)
		})
	})
})
