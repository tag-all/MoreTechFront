import {createContext, useCallback, useContext, useEffect, useState} from "react";
import {getProfile, signOut} from "../api/api";
import toast from "react-hot-toast";

const Auth = createContext({})

const AuthContext = ({children}) => {
	const [accessToken, setAccessToken] = useState(null)
	const [userData, setUserData] = useState(null)
	const [shouldUpdate, setShouldUpdate] = useState(false)

	const getToken = useCallback(
		() => {
			const token = localStorage.getItem('token')
			if (token) {
				setAccessToken(token)
			} else setAccessToken(null)
		},
		[setAccessToken],
	)

	const getUserData = useCallback(
		async () => {
			if (accessToken) {
				const data = await getProfile()
				setUserData(data)
			} else setUserData(null)
		},
		[accessToken, setUserData]
	)

	const logout = useCallback(() => {
		setUserData(null)
		setAccessToken(null)
		signOut()
		toast.success('Выход из аккаунта')
	}, [setUserData, setAccessToken])

	const update = useCallback(
		() => {
			setShouldUpdate(prevState => !prevState)
		},
		[setShouldUpdate]
	)

	useEffect(() => {
		getToken()
	}, [shouldUpdate])

	useEffect(() => {
		getUserData()
	}, [accessToken, shouldUpdate])

	return (
		<Auth.Provider value={{
			accessToken,
			setAccessToken,
			userData,
			setUserData,
			update,
			logout
		}}>
			{children}
		</Auth.Provider>
	)
}

const useAuthContext = () => useContext(Auth)

export { AuthContext, useAuthContext }

