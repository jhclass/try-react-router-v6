import { useParams,Outlet, Link } from "react-router-dom";
import { users } from "../../db";


function User() {
const params = useParams();

console.log('params',params);
    return(
        
        <div>
            <h1>User with id {users[params.userId-1].name}</h1>
            <hr/>
            
        <Link to={`ab?type=123&geo=12345&name=json`}>See Followers</Link>
        <Outlet
            context={{nameOfMyUser : users[Number(params.userId)-1].name}}
        />
       
       
        </div>
        
       
        
    );
}
export default User;