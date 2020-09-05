import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import { wrapperType, elemsType } from '../utils/types'
import { findByTestAttr, createTestStore } from '../utils/func'
import Header from './components/Header'
import { RootState } from './store'
import Headline from './components/Headline'
import Button from './components/Button'
import ListItem from './components/ListItem'
enum DataTestAttrs {
	App = 'app',
	PostsItemSection = 'posts-item-section',
	PostsButtonWrap = 'posts-button-wrap',
	PostsMenuSection = 'posts-menu-section'
}
const shallowRender = (initialState = {}) => {
	const store = createTestStore(initialState)
	return shallow(<App store={store} />)
		.childAt(0)
		.dive()
}
describe('App Component', () => {
	let wrapper: wrapperType
	let appElem: elemsType
	beforeEach(() => {
		wrapper = shallowRender()
		appElem = findByTestAttr(wrapper, DataTestAttrs.App)
	})
	it('renders without error', () => {
		expect(appElem).toHaveLength(1)
	})
	it('renders Header component', () => {
		expect(appElem.find(Header)).toHaveLength(1)
	})
	it('does not render a posts-item-section cause no posts in store', () => {
		expect(
			findByTestAttr(appElem, DataTestAttrs.PostsItemSection)
		).toHaveLength(0)
	})
	describe('posts menu section', () => {
		let headElem: elemsType
		beforeEach(() => {
			headElem = findByTestAttr(appElem, DataTestAttrs.PostsMenuSection)
		})
		it('renders without error', () => {
			expect(headElem).toHaveLength(1)
		})
		it('renders Headline Component', () => {
			expect(headElem.find(Headline)).toHaveLength(1)
		})
		describe('posts button wrapper', () => {
			let buttonWrapElem: elemsType
			beforeEach(() => {
				buttonWrapElem = findByTestAttr(appElem, DataTestAttrs.PostsButtonWrap)
			})
			it('renders without error', () => {
				expect(buttonWrapElem).toHaveLength(1)
			})
			it('renders Button Component', () => {
				expect(buttonWrapElem.find(Button)).toHaveLength(1)
			})
		})
	})
	describe('when posts are in store', () => {
		let wrapper: wrapperType
		let postsItemSectionElem: elemsType
		let initialState: RootState
		beforeEach(() => {
			initialState = {
				posts: {
					posts: [
						{
							body: 'some text 1',
							title: 'title 1'
						},
						{
							body: 'some text 2',
							title: 'title 2'
						},
						{
							body: 'some text 3',
							title: 'title 3'
						},
						{
							body: 'some text 4',
							title: 'title 4'
						}
					]
				}
			}
			wrapper = shallowRender(initialState)
			postsItemSectionElem = findByTestAttr(
				wrapper,
				DataTestAttrs.PostsItemSection
			)
		})
		it('renders section body', () => {
			expect(postsItemSectionElem).toHaveLength(1)
		})
		it('renders ListItem Component as much as posts count', () => {
			expect(postsItemSectionElem.find(ListItem)).toHaveLength(
				initialState.posts.posts.length
			)
		})
	})
})
