import React from 'react'
import './styles.scss'
export type LogoPropsType = {
	logoSrc?: string
	logoText?: string
}
const Logo: React.FC<LogoPropsType> = ({ logoSrc, logoText }) => {
	return (
		<div className='logo'>
			<img data-test='logo' src={logoSrc} alt='logo' />
			<span data-test='logoText'>{logoText}</span>
		</div>
	)
}
Logo.defaultProps = {
	logoSrc: 'https://image.flaticon.com/icons/svg/888/888879.svg',
	logoText: 'Logo'
}
export default Logo
