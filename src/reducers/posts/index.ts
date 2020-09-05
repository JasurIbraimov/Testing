import axios from 'axios'
export const initialState = {
	posts: [] as Array<PostType>
}
export type PostType = {
	title: string
	body: string
}
export type postsStateType = typeof initialState
export default (state: postsStateType = initialState, action: ActionTypes) => {
	switch (action.type) {
		case actionsTypes.GET_A_NEW_POST:
			return {
				...state,
				posts: [...action.payload]
			}
		default:
			return state
	}
}

// Action types
export const actionsTypes = {
	GET_A_NEW_POST: 'GET_A_NEW_POST'
}

// Actions
export const actions = {
	getANewPost(posts: Array<PostType>) {
		return {
			type: actionsTypes.GET_A_NEW_POST,
			payload: posts
		} as const
	}
}

// Thunks

export const getPosts = () => async (dispatch: any) => {
	try {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts?_limit=5'
		)
		dispatch(actions.getANewPost(response.data))
	} catch (error) {}
}
export type InferValues<T> = T extends { [key: string]: infer U } ? U : never
export type ActionTypes = ReturnType<InferValues<typeof actions>>
