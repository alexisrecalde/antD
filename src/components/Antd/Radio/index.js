/** @format */

import React from 'react'
import { Radio } from 'antd'
import './style.css'

export default function CustomRadio(props) {
	return (
		<Radio.Group {...props}>
			{props.items.map((iterator, key) => {
				return (
					<Radio key={key} value={iterator.value}>
						{iterator.label}
					</Radio>
				)
			})}
		</Radio.Group>
	)
}
