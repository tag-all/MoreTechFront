import {request} from "./request";

export const signUp = async (email, name, lastName, password ) => {
	const response = await request('/registration', 'POST', {email, name, lastName, password, notificationFlag: false})
	if (response) {
		localStorage.setItem('token', response.accessToken)
		return response.accessToken
	}
}

export const signIn = async (login, password ) => {
	const response = await request('/login', 'POST', {login, password})
	if (response) {
		localStorage.setItem('token', response.accessToken)
		return response.accessToken
	}
}

export const signOut = async () => {
	request('/logout', 'POST', null)
	localStorage.removeItem('token')
}

export const getProfile = async () => {
	const response = await request('/profile')
	console.log('response', response)
	return response
}
