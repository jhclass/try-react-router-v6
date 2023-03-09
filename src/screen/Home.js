import {users} from "../db"
import {Link} from "react-router-dom"
function Home(){
    
    return(
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((data,i)=>(
                    <div>
                        <Link to={`/users/${data.id}`}>{data.name}</Link>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Home;