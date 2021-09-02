import React, { Component } from 'react'
import User from '../../containers/user'
import store from './redux/store'

export default class IndexUi extends Component {
	render() {
		return (
			<div>
				{/* 给容器组件传递store */}
				<User store={store} />
			</div>
		)
	}
}
