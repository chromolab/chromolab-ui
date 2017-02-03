import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Page from '../modules/page/page'
import Intro from '../modules/intro/intro'
import About from '../modules/about/about'
import Discounts from '../modules/discount/discounts'
import Question from '../modules/question/question'
import ErrorPage from '../modules/error/error'

const Root = ({ children }) => children

render(
	<Root>
		<Router history={hashHistory}>
			<Route path="/" component={Page}>
				<IndexRoute components={Intro} />
				<Route
					path="about"
					component={About}
				/>
				<Route
					path="discounts"
					component={Discounts}
				/>
				<Route
					path="question"
					component={Question}
				/>
				<Route
					path="*"
					component={ErrorPage}
				/>
			</Route>
		</Router>
	</Root>,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept()
}
