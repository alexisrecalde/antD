/** @format */

import React from 'react'
import { Form, Button } from 'antd'
import './style.css'

export default function CustomButton(props) {
	console.log(props);
	return (
		<>
			<Form.Item>
				<Button className={props.className || 'own-submit-button'} {...props}>
					{props.label}
				</Button>
			</Form.Item>
		</>
	)
}
