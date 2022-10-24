import { useState } from "react";
import { useNavigate } from "react-router-dom";
import p20 from "../../images/p20.jpg"
import p21 from "../../images/p21.jpg"
import p22 from "../../images/p22.jpg"
import p22a from "../../images/p22a.jpg"
import p23 from "../../images/p23.jpg"
import p24 from "../../images/p24.jpg"
import p25 from "../../images/p25.jpg"
import p26 from "../../images/p26.jpg"
import p26a from "../../images/p26a.jpg"
import Criminal from "../criminal-case/criminal-case";
const step = JSON.parse(localStorage.getItem("step"));
if (step !== 11) { localStorage.setItem("step", 11)};

function Eleven() {
    const [page, setPage] = useState(1)
    const navigate = useNavigate();
    return(
        <div>
            <Criminal/>
            {(page === 1) ?
            <>
                <img width="640px" height="542px" src={p20} alt="p20"/>
                <div className="Buttons">
                    <button onClick={() => {setPage(2)}}>Дальше</button>
                </div>
            </>
            : (page === 2) ?
            <>
                <img width="640px" height="542px" src={p21} alt="p21"/>
                <div className="Buttons">
                    <button onClick={() => {setPage(3)}}>Дальше</button>
                </div>
            </>
            : (page === 3) ?
            <>
                <img width="640px" height="542px" src={p22} alt="p22"/>
                <div className="Buttons">
                    <button onClick={() => {setPage(4)}}>Дальше</button>
                </div>
            </>
            : (page === 4) ?
            <>
                <img width="640px" height="542px" src={p22a} alt="p22a"/>
                <div className="Buttons">
                    <button onClick={() => {setPage(5)}}>Дальше</button>
                </div>
            </>
            : (page === 5) ?
            <>
                <img width="640px" height="542px" src={p23} alt="p23"/>
                <div className="Buttons">
                    <button onClick={() => {setPage(6)}}>Дальше</button>
                </div>
            </>
            : (page === 6) ? 
            <>
                <img width="640px" height="542px" src={p24} alt="p24"/>
                <div className="Buttons">
                    <button onClick={() => {setPage(7)}}>Дальше</button>
                </div>
            </>
            : (page === 7) ? 
            <>
                <img width="640px" height="542px" src={p25} alt="p25"/>
                <div className="Buttons">
                    <button onClick={() => {setPage(8)}}>Дальше</button>
                </div>
            </>
            : (page === 8) ? 
            <>
                <img width="640px" height="542px" src={p26} alt="p26"/>
                <div className="Buttons">
                    <button onClick={() => {setPage(9)}}>Дальше</button>
                </div>
            </>
            : (page === 9) ? 
            <>
                <img width="640px" height="542px" src={p26a} alt="p26a"/>
                <div className="Buttons">
                    <button onClick={() => {navigate("/12")}}>Дальше</button>
                </div>
            </>
            : null
            }
        </div>
    )
}
export default Eleven;