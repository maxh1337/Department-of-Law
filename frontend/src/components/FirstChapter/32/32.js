/* eslint-disable jsx-a11y/anchor-is-valid */
import Criminal from "../../ui/criminal-case/criminal-case"
import p32 from "../../../images/p32.webp"

import { useState } from "react";
import Error from "../../ui/error/error";
import { useNavigate } from "react-router-dom";

function Thirtytwo(){
    const [error,setError] = useState(false)
    const navigate = useNavigate()
    const step = JSON.parse(localStorage.getItem("step"));
    if (step !== 19) { localStorage.setItem("step", 19)};



    return(
        <div>
                <Criminal/>
                {(error === false) ?
                <>
                <img width="640px" height="542px" src={p32} alt="p32"/>
                <a data-to-page="p32б"  onClick={() => navigate("/32б")} className="shkafi" style={{position: 'absolute', top: 200, left: 'calc(50% - 280px)', width: 300, height: 100, color: "white"}}>{""}</a>
                <a data-to-page="p32о"  onClick={() => {setError(true)}} className="shkafi" style={{position: 'absolute', top: 70, left: 'calc(50% - 280px)', width: 300, height: 80, color: "white"}}>{""}</a>
                <a data-to-page="p32о"  onClick={() => {setError(true)}} className="shkafi" style={{position: 'absolute', top: 100, left: 'calc(50% - 0px)', width: 300, height: 100, color: "white"}}>{""}</a>
                <a data-to-page="p32о"  onClick={() => {setError(true)}} className="shkafi" style={{position: 'absolute', top: 270, left: 'calc(50% - 0px)', width: 300, height: 80, color: "white"}}>{""}</a>
                </>
                : <Error text="Подумай!" onClick1={() => {setError(false)}} button1="Понятно"
                newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1KDVs9OQs31MTTIFIP-zIVe9hDEwONRhE/view"><button>Не понятно</button></a>}
                button2style={{display: "none"}}/>
}
        </div>
    )
}
export default Thirtytwo;