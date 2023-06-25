/** @format */

import React from 'react'
import { Collapse } from 'antd'
import './style.css'
const { Panel } = Collapse
export default function CustomCollapse(props) {
	return (
		<Collapse {...props}>
			{props.items.map((iterator, key) => {
				return (
					<Panel header={iterator.header} key={key}>
						<p>{iterator.text}</p>
					</Panel>
				)
			})}
		</Collapse>
	)
}
