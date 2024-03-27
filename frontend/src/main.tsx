import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import axios from "axios";
import App from "./App.tsx";
import {ThemeProvider} from "@material-tailwind/react";

axios.defaults.baseURL = "http://localhost:8000/api/"
axios.defaults.withCredentials = true;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
