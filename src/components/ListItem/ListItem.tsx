import React from 'react'
export type ListItemPropsType = {
	body: string
	title: string
}
const ListItem: React.FC<ListItemPropsType> = ({ body, title }) => (
	<div data-test='listItem'>
		<h3 data-test='listItem-title'>{title}</h3>
		<p data-test='listItem-body'>{body}</p>
	</div>
)
export default ListItem
