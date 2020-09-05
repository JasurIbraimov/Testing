import { ShallowWrapper, HTMLAttributes } from 'enzyme'
export type elemsType = ShallowWrapper<
	HTMLAttributes,
	any,
	React.Component<{}, {}, any>
>
export type wrapperType = ShallowWrapper<
	any,
	Readonly<{}>,
	React.Component<{}, {}, any>
>
