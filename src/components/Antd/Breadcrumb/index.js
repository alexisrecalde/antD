/** @format */

import React from 'react'
import { Breadcrumb } from 'antd'
import './style.css'

export default function CustomBreadcrumb(props) {
	console.log(props)
	return (
		<>
			<Breadcrumb>
				{props.items.map((iterator, key) => {
					return <Breadcrumb.Item key={key}>{iterator}</Breadcrumb.Item>
				})}
			</Breadcrumb>
		</>
	)
}
