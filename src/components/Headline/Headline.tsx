import React, { Component } from 'react'
import './styles.scss'
export type HeadlinePropsType = {
	header?: string
	descr?: string
}
class Headline extends Component<HeadlinePropsType> {
	render() {
		const { header, descr } = this.props
		return (
			<div data-test='headline'>
				{header && <h1 data-test='headline-header'>{header}</h1>}
				{descr && <p data-test='headline-descr'>{descr}</p>}
			</div>
		)
	}
}

export default Headline
