import React from 'react'
import './styles.scss'
const Header = () => (
	<header data-test='rc-header'>
		<div className='wrapper'>
			<div className='logo'>
				<img
					data-test='rc-header-logo'
					src='https://image.flaticon.com/icons/svg/888/888879.svg'
					alt='logo'
				/>
				Logo
			</div>
		</div>
	</header>
)

export default Header
