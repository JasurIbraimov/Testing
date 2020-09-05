import React from 'react'
import './styles.scss'
export type ButtonPropsType = {
	buttonText?: string
	onSubmitEvent: () => void
}
const Button: React.FC<ButtonPropsType> = ({ buttonText, onSubmitEvent }) => (
	<button className='button' onClick={() => onSubmitEvent()} data-test='button'>
		{buttonText}
	</button>
)

Button.defaultProps = {
	buttonText: 'Add'
}

export default Button
