import React from 'react'
import './styles.scss'
export type HeadlinePropsType = {
	header?: string
	descr?: string
}
const Headline: React.FC<HeadlinePropsType> = ({ header, descr }) => (
	<div data-test='headline'>
		<h1 data-test='headline-header'>{header}</h1>
		<hr />
		<p data-test='headline-descr'>{descr}</p>
	</div>
)

Headline.defaultProps = {
	descr: 'Some text',
	header: 'Title'
}
export default Headline
