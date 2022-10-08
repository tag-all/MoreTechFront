import { Route, Routes } from "react-router-dom";
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import {AchievementsPage} from "./pages/AchievementsPage/AchievementsPage";
import {MainPage} from "./pages/MainPage/MainPage";
import {SignUpPage} from "./pages/AuthPage/SignUpPage";
import {SignInPage} from "./pages/AuthPage/SignInPage";

export const useRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />}/>
			<Route path="/sign-up" element={<SignUpPage />}/>
			<Route path="/sign-in" element={<SignInPage />}/>
			<Route path="/profile" element={<ProfilePage/>}/>
			<Route path="/achievements" element={<AchievementsPage/>}/>
		</Routes>
	)
}
