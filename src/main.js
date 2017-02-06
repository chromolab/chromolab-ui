import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Reg from '../modules/reg/reg'
import Page from '../modules/page/page'
import Login from '../modules/login/login'
import Intro from '../modules/intro/intro'
import About from '../modules/about/about'
import Forget from '../modules/forget/forget'
import Success from '../modules/success/success'
import Callback from '../modules/callback/callback'
import Question from '../modules/question/question'
import Discounts from '../modules/discount/discounts'
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
					path="callback"
					component={Callback}
				/>
				<Route
					path="success"
					component={Success}
				/>
				<Route
					path="login"
					component={Login}
				/>
				<Route
					path="reg"
					component={Reg}
				/>
				<Route
					path="forget"
					component={Forget}
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
