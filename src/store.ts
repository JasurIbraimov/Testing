import posts from './reducers/posts'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
export const rootReducer = combineReducers({
	posts
})
export const middlewares = [thunkMiddleware]
export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
