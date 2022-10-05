import {useRoutes} from "./routes";
import {BrowserRouter as Router} from "react-router-dom";

export const App = () => {

    const routes = useRoutes();

    return (
        <Router>
            <div>
                {routes}
            </div>
        </Router>
    );
};
