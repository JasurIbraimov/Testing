import React from 'react'
import Logo from './'
import { LogoPropsType } from './Logo'
import { wrapperType, elemsType } from '../../../utils/types'
import { findByTestAttr } from '../../../utils/func'
import { shallow } from 'enzyme'
const shallowRender = (props: LogoPropsType) => shallow(<Logo {...props} />)
enum DataTestAttrs {
	Logo = 'logo',
	LogoText = 'logoText'
}
describe('Logo Component', () => {
	let props: LogoPropsType
	let wrapper: wrapperType
	describe('when has all props', () => {
		beforeEach(() => {
			props = {
				logoSrc: 'https://image.flaticon.com/icons/svg/888/888879.svg',
				logoText: 'some logo text'
			}
			wrapper = shallowRender(props)
		})

		it('renders without errors', () => {
			expect(findByTestAttr(wrapper, DataTestAttrs.Logo)).toHaveLength(1)
		})

		describe('logo', () => {
			let logoElem: elemsType
			beforeEach(() => {
				logoElem = findByTestAttr(wrapper, DataTestAttrs.Logo)
			})
			it('renders without errors', () => expect(logoElem).toHaveLength(1))
			it('renders using src in props', () =>
				expect(logoElem.prop('src')).toBe(props.logoSrc))
		})

		describe('logoText', () => {
			let logoTextElem: elemsType
			beforeEach(() => {
				logoTextElem = findByTestAttr(wrapper, DataTestAttrs.LogoText)
			})
			it('renders without errors', () => {
				expect(logoTextElem).toHaveLength(1)
			})
			it('renders with text provided by props', () =>
				expect(logoTextElem.text()).toBe(props.logoText))
		})
	})
	describe('when has no non-required props', () => {
		beforeEach(() => {
			props = {
				logoSrc: 'https://image.flaticon.com/icons/svg/888/888879.svg'
			}
			wrapper = shallowRender(props)
		})
		describe('header logoText', () => {
			let logoTextElem: elemsType
			beforeEach(() => {
				logoTextElem = findByTestAttr(wrapper, DataTestAttrs.LogoText)
			})
			it('renders logoText using default props', () => {
				expect(logoTextElem.text()).toBe(Logo.defaultProps?.logoText)
			})
		})
	})
})
