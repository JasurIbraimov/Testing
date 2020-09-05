import React from 'react'
import Button, { ButtonPropsType } from './Button'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../../../utils/func'
import { wrapperType, elemsType } from '../../../utils/types'
const shallowRender = (props: ButtonPropsType) => shallow(<Button {...props} />)
enum DataTestAttrs {
	Button = 'button'
}
describe('Button Component', () => {
	let props: ButtonPropsType
	let wrapper: wrapperType
	let buttonElem: elemsType
	let mockFunction: jest.Mock<any, any>
	describe('when has all props', () => {
		beforeEach(() => {
			mockFunction = jest.fn()
			props = {
				buttonText: 'Add',
				onSubmitEvent: mockFunction
			}
			wrapper = shallowRender(props)
			buttonElem = findByTestAttr(wrapper, DataTestAttrs.Button)
		})
		it('renders without error', () => {
			expect(buttonElem).toHaveLength(1)
		})
		it('renders button with text provided by props', () => {
			expect(buttonElem.text()).toBe(props.buttonText)
		})
		it('emits click event provided by props', () => {
			buttonElem.simulate('click')
			const callback = mockFunction.mock.calls.length
			expect(callback).toBe(1)
		})
	})
	describe('when has no non-required props', () => {
		beforeEach(() => {
			props = {
				onSubmitEvent: () => null
			}
			wrapper = shallowRender(props)
		})
		it('renders button with default text', () => {
			expect(buttonElem.text()).toBe(Button.defaultProps?.buttonText)
		})
	})
})
