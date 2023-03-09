import {BrowserRouter,Routes,Route, createBrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Home from "./screen/Home";
import About from "./screen/About";
import User from "./screen/users/User"
import App from "./App";
import NotFound from "./screen/NotFound";
import ErrorComponents from "./components/ErrorComponent";
/**useNavigator() */
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
            {
                // path:"user/:userId",
                // element:<User/>
                path:"user",
                children:{
                    path:":userId",
                    element:<User/>
                }
            }
         
        ],
        errorElement:<NotFound/>
    }
]);
export default router;