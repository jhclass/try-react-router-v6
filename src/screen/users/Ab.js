import { useOutletContext,useSearchParams } from "react-router-dom";

function Ab() {
    const {nameOfMyUser} = useOutletContext();
    const [read,setRead] = useSearchParams();
    console.log(nameOfMyUser);
    console.log('read',read.getAll("geo"))
    return (
        <div>안녕하세요 {nameOfMyUser} 매직 유랑단</div>
    );
}
export default Ab;