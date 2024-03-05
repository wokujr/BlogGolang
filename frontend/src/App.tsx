import "react-toastify/dist/ReactToastify.css"
import {RouterProvider} from "react-router-dom"
import {Router} from "./routes/AppRoute.tsx";

function App() {

    return (
        <RouterProvider router={Router} />
    );
}

export default App;
