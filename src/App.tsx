import React from 'react'
import Header from './components/Header'
import Headline from './components/Headline'
import './app.scss'
function App() {
	return (
		<main>
			<Header />
			<section className='section'>
				<Headline header='Posts' descr='Get a new post' />
			</section>
		</main>
	)
}

export default App
