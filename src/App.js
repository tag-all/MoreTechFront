import {useRoutes} from "./routes";
import {BrowserRouter as Router} from "react-router-dom";
import {AuthContext} from "./context/AuthContext";
import {Toaster} from "react-hot-toast"

export const App = () => {

    const routes = useRoutes()

    return (
        <AuthContext>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Router>
                <div>
                    {routes}
                </div>
            </Router>
        </AuthContext>
    );
};
