import { Route, Routes } from "react-router-dom";
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import {AchievementsPage} from "./pages/AchievementsPage/AchievementsPage";
import {MainPage} from "./pages/MainPage/MainPage";

export const useRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />}/>
			<Route path="/profile" element={<ProfilePage/>}/>
			<Route path="/achievements" element={<AchievementsPage/>}/>
		</Routes>
	)
}
