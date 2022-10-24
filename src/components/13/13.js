import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import p27а from "../../images/p27а.jpg"
import p28 from "../../images/p28.jpg"
import Criminal from "../criminal-case/criminal-case";
const step = JSON.parse(localStorage.getItem("step"));
if (step !== 13) { localStorage.setItem("step", 13)};

function Thirteen(){
    const [page, setPage] = useState(1)
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/14")
    }
    return(
        <div>
            <Criminal/>
            {(page === 1) ?
            <>
                <img width="640px" height="542px" src={p27а} alt="p27a"/>
                <div className="Buttons">
                    <button onClick={() => {setPage(2)}}>Дальше</button>
                </div>
            </>
            : 
            <>
                <img width="640px" height="542px" src={p28} alt="p28"/>
                <div className="Buttons">
                    <button onClick={nextPage}>Дальше</button>
                </div>
            </>
            }
        </div>
    )
}
export default Thirteen;