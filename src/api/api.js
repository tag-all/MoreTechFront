import {request} from "./request";

export const signUp = async (email, name, lastName, password ) => {
	console.log('email', email)
	const response = await request('/registration', 'POST', {email, name, lastName, password, notificationFlag: false})
	console.log(response, 'response')
}
