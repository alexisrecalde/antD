/** @format */

import React from 'react'
import { Form, Input } from 'antd'

import { rules } from './rules'
import './style.css'

export default function CustomInput(props) {
	return (
		<>
			<h3 className='own-form-label'>
				{props.label} {props.rules ? '*' : ''}
			</h3>
			<Form.Item name={props.name} rules={rules[props.rules]} extra={props.extra}>
				<Input
					size={props.size || 'large'}
					className={props.className || 'own-form-input'}
					placeholder={props.componentPlaceholder || 'Escribe aquí'}
					autoComplete={props.autoComplete || 'large'}
					{...props}
				/>
			</Form.Item>
			<p className='own-form-example-input'>{props.example}</p>
		</>
	)
}
