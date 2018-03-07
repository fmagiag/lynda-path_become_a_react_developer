import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'
import { Woops404 } from './components/Woops404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="list-days" component={App}/>
		<Route path="add-day" component={App}/>
		<Route path="*" component={Woops404}/>
	</Router>,
	document.getElementById('react-container')
)