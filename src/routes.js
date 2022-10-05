import { Route, Routes } from "react-router-dom";
import {TestPage} from "./pages/TestPage/TestPage";

export const useRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<TestPage />}/>
		</Routes>
	)
}
