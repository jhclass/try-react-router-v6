import { useOutletContext } from "react-router-dom";
function Ab() {
    const {nameOfMyUser} = useOutletContext();
    console.log(nameOfMyUser);
    return (
        <div>안녕하세요 {nameOfMyUser} 매직 유랑단</div>
    );
}
export default Ab;