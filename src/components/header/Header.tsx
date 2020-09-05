import React from 'react'
import './styles.scss'
import Logo from '../Logo'

const Header = () => (
	<header data-test='header'>
		<div className='wrapper'>
			<Logo />
		</div>
	</header>
)

//
export default Header
