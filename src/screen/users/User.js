import { useParams,Outlet, Link } from "react-router-dom";
import { users } from "../../db";
import Followers from "./Followers";
import Ab from "./Ab"

function User() {
const params = useParams();

console.log('params',params);
    return(
        
        <div>
            <h1>User with id {users[params.userId-1].name}</h1>
            <hr/>
            
        <Link to={`ab`}>See Followers</Link>
        <Outlet/>
       
       
        </div>
        
       
        
    );
}
export default User;