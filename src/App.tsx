import React from 'react'
import Header from './components/Header'
import Headline from './components/Headline'
import './app.scss'
import Button from './components/Button'
import { connect } from 'react-redux'
import { RootState } from './store'
import ListItem from './components/ListItem'
import { getPosts, PostType } from './reducers/posts'
type AppPropsType = {
	posts: Array<PostType>
	getPosts: () => void
	store: any
}
const App: React.FC<AppPropsType> = ({ posts, getPosts }) => {
	const getPostsOnSumbmit = () => {
		getPosts()
	}
	return (
		<main data-test='app'>
			<Header />
			<section data-test='posts-menu-section' className='section'>
				<Headline header='Posts' descr='Get a new post' />
				<div data-test='posts-button-wrap' className='posts-button'>
					<Button
						buttonText='get posts'
						onSubmitEvent={() => getPostsOnSumbmit()}
					/>
				</div>
			</section>
			{posts.length > 0 && (
				<section data-test='posts-item-section' className='section'>
					{posts.map((post, index) => (
						<ListItem key={index} title={post.title} body={post.body} />
					))}
				</section>
			)}
		</main>
	)
}

const mapStateToProps = (state: RootState) => {
	return {
		posts: state.posts.posts
	}
}
export default connect(mapStateToProps, { getPosts })(App)
