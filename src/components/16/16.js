/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import p30 from "../../images/p30.jpg"
import Criminal from "../criminal-case/criminal-case";
const step = JSON.parse(localStorage.getItem("step"));
if (step !== 16) { localStorage.setItem("step", 16)};

function Sixteen(){
    const navigate = useNavigate()
    const nextPage = () => {
        navigate("/17")
    }
    return(
        <div>
            <Criminal/>
            <img width="640px" height="542px" src={p30} alt="p30"/>
            <a onClick={nextPage}className="shkafi" style={{position: 'absolute', top: 360, left: 'calc(50% - 250px)', width: 450, height: 80, color: "white"}}></a>            
        </div>
    )
}
export default Sixteen;