import {BrowserRouter,Routes,Route, createBrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screen/Home";
import About from "./screen/About";
import App from "./App";
import NotFound from "./screen/NotFound";
import ErrorComponents from "./components/ErrorComponent";
const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"about",
                element:<About/>,
               
            },
            {
                path:"" ,
                element:<Home/>,
                errorElement:<ErrorComponents/>
            },
         
        ],
        errorElement:<NotFound/>
    }
]);
export default router;