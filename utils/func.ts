import { rootReducer, middlewares } from './../src/store'
import { createStore, applyMiddleware } from 'redux'
import { ShallowWrapper } from 'enzyme'
export const findByTestAttr = (
	component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
	attr: string
) => component.find(`[data-test='${attr}']`)

export const createTestStore = (initialState: any) => {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middlewares)
	)
	return store
}
