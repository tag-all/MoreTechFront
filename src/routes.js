import { Route, Routes } from "react-router-dom";
import {TestPage} from "./pages/TestPage/TestPage";
import {ProfilePage} from "./pages/ProfilePage/ProfilePage";
import {AchievementsPage} from "./pages/AchievementsPage/AchievementsPage";

export const useRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<TestPage />}/>
			<Route path="/profile" element={<ProfilePage/>}/>
			<Route path="/achievements" element={<AchievementsPage/>}/>
		</Routes>
	)
}
