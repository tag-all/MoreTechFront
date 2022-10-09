import {BASE_API_URL} from "../config";
import toast from "react-hot-toast";

export const request = async (url, method = 'GET', body = null ) => {
	let response

	const token = localStorage.getItem('token')

	let options = {
		method: method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	}

	if (body) {
		options.body = JSON.stringify(body)
	}

	try {
		response = await fetch(`${BASE_API_URL}${url}`, options)


		if (response.ok) {
			return response.json()
		} else {
			const responseJson = await response.json()
			console.log('request response', responseJson)
			toast.error(responseJson.message)
			throw new Error(await responseJson.message)
		}
	} catch (e) {
		throw e
	}
}
