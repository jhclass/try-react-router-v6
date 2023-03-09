import {createBrowserRouter} from "react-router-dom";
import Home from "./screen/Home";
import About from "./screen/About";
import User from "./screen/users/User"
import Followers from "./screen/users/Followers";
import Ab from "./screen/users/Ab"
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
                path:"users/:userId",
                element:<User/>
                // path:"user",
                // children:{
                //     path:":userId",
                //     element:<User/>
                // }
                ,
                children:[
                    {
                    path:"ab",
                    element:<Ab/>
                    }
                ]
            }
         
        ],
        errorElement:<NotFound/>
    }
]);
export default router;