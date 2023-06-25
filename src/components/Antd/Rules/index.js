/** @format */
import * as EmailValidator from 'email-validator'

export const rules = {
	required: [
		{
			required: true,
			message: 'Este campo es requerido de forma obligatoria',
		},
	],
	email: [
		{
			required: true,
			message: 'Porfavor ingresa tu Correo',
		},
		{
			validator: (_, value) => {
				if (EmailValidator.validate(value) === true) {
					return Promise.resolve()
				}
				return Promise.reject('Aún faltan completar el c')
			},
		},
	],
	password: [
		{
			required: true,
			message: 'Ingresa tu contraseña!',
		},
		{
			min: 4,
			message: 'Minimo 4 caracteres!',
		},
	],
	dropdown: [
		{
			required: true,
			message: 'Ingresa tu contraseña!',
		},
	],
	text: [
		{
			required: true,
			message: 'Ingresa el nombre de tu cuenta',
		},
		{
			min: 4,
			message: 'Minimo 4 caracteres!',
		},
	],
	phone: [
		{
			required: true,
			message: 'Ingrese sú número telefónico',
		},
		{
			validator: (_, value) => {
				let patron = /^([0-9])*$/
				if (patron.test(value) === true) {
					return Promise.resolve()
				}
				return Promise.reject('Sólo se permiten números')
			},
		},
	],
	price: [
		{
			min: 1,
			message: 'Minimo 1 caracter!',
		},
		{
			validator: (_, value) => {
				let patron = /^([0-9])*$/
				if (patron.test(value) === true) {
					return Promise.resolve()
				}
				return Promise.reject('NO se permitem el símbolos, letras, ni espacios en blanco en el precio')
			},
		},
	],
	select: [
		{
			required: true,
			message: 'Debe seleccionar una opción',
		},
	],
	account: [
		{
			required: true,
			message: 'Debe agregar su cuenta',
		},
		{
			validator: (_, value) => {
				let patron = /^[a-zA-Z0-9._-]+$/
				console.log(patron.test(value))
				if (patron.test(value) === false) {
					return Promise.reject('NO se permiten acentos, NI espacios, NI caractereres [ Ñ, @]')
				}
				return Promise.resolve()
			},
		},
	],
	user: [
		{
			required: true,
			message: 'Debe agregar el nombre del usuario',
		},
		{
			validator: (_, value) => {
				if (value.indexOf('@') === -1 && value.indexOf(' ') === -1) {
					return Promise.resolve()
				}
				return Promise.reject('NO se permite el símbolo @ ni espacios en blanco')
			},
		},
	],
	url: [
		{
			validator: (_, value) => {
				let patron =
					/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i
				if (patron.test(value) === true) {
					return Promise.resolve()
				}
				return Promise.reject('Ingrese una url válida')
			},
		},
	],
}
