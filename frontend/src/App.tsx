import Dashboard from "./components/Dashboard.tsx";
import {Outlet} from "react-router"

function App() {

    return (
        <>
            <Dashboard />
            <Outlet />
        </>
    );
}


export default App;
