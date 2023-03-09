import { useParams } from "react-router-dom";
function User() {
const params = useParams();
console.log('params',params);
    return(
        <div>체크</div>
    );
}
export default User;