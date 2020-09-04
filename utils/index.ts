import { ShallowWrapper } from 'enzyme'
export const findByTestAttr = (
	component: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>,
	attr: string
) => component.find(`[data-test='${attr}']`)
