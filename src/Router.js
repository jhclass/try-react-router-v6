import {BrowserRouter,Routes,Route, createBrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screen/Home";
import About from "./screen/About";
import App from "./App";

const router = createBrowserRouter([
    {
        path:"",
        element:<App/>,
    }
]);
export default router;