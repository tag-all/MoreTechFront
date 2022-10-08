import {BASE_API_URL} from "../config";

export const request = async (url, method = 'GET', body = null ) => {
	let response
	// console.log('request body', body)
	let options = {
		method: method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}

	if (body) {
		options.body = JSON.stringify(body)
	}

	try {
		response = await fetch(`${BASE_API_URL}${url}`, options)

		console.log('request response', response)

		if (response.ok) {
			return response.json()
		} else if (response.status === 500 || response.status === null) {
			console.log("ERROR 500")
			window.location.href = '/maintenance'
		} else {
			const responseJson = await response.json()
			console.log('status', response.status)
			// console.log('request responseJson', responseJson)
			throw new Error(await responseJson.message)
		}
	} catch (e) {
		// console.log('request error: ', e.message)
		// if (response.status === 500) {
		// 	console.log("ERROR 500")
		// 	window.location.href = '/maintenance'
		// }
		throw e
	}
}
