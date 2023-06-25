/** @format */

import React from 'react'
import { Dropdown } from 'antd'

export default function CustomDropdown(props) {
	return <Dropdown.Button {...props}>{props.label}</Dropdown.Button>
}
