import posts, { initialState, actions } from './index'
import { PostType } from './index'
describe('Post reducer', () => {
	it('returns initialState if no match to action-type', () => {
		const newState = posts(initialState, {
			type: 'SOME _MOCK_TYPE',
			payload: []
		})
		expect(newState).toEqual(initialState)
	})
	it('returns a newState if matches to GET_A_NEW_POST action type', () => {
		const newPosts: Array<PostType> = [
			{
				title: 'hello',
				body: 'First post'
			},
			{
				title: 'hello',
				body: 'First post'
			},
			{
				title: 'hello',
				body: 'First post'
			}
		]
		const newState = posts(initialState, actions.getANewPost(newPosts))
		expect(newState).toEqual({
			...initialState,
			posts: [...newPosts]
		})
	})
})
