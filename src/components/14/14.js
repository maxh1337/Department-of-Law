/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react"
import p29 from "../../images/p29.jpg"
import p29г from "../../images/p29г.jpg"
import p29а from "../../images/p29а.jpg"
import p29б from "../../images/p29б.jpg"
import p29д from "../../images/p29д.jpg"
import p29в from "../../images/p29в.jpg"
import Criminal from "../criminal-case/criminal-case"
import Error from "../error/error"
import { useNavigate } from "react-router-dom"
const step = JSON.parse(localStorage.getItem("step"));
if (step !== 14) { localStorage.setItem("step", 14)};

function Fourteen(){
    const [error, setError] = useState(0)
    const [evidence, setEvidence] = useState(0)
    const navigate = useNavigate()
    const nextPage = () => {
        navigate("/15")
    }
    return(
        <div>
            {(error === 0) ?
            (evidence === 0) ?
            <>
            <Criminal/>
            <img width="640px" height="542px" src={p29} alt="p29"/>
            <div className="Buttons">
                <a data-to-page="p29г" onClick={() => {setEvidence(1)}} className="shkafi" style={{position: 'absolute', top: 110, left: 'calc(50% - 250px)', width: 100, height: 100, color: "white"}}></a>
                <a data-to-page="p29а" onClick={() => {setEvidence(2)}} className="shkafi" style={{position: 'absolute', top: 450, left: 'calc(50% - 50px)', width: 100, height: 80, color: "white"}}></a>
                <a data-to-page="p29д" onClick={() => {setEvidence(3)}} className="shkafi" style={{position: 'absolute', top: 400, left: 'calc(50% - 285px)', width: 100, height: 100, color: "white"}}></a>
                <a data-to-page="p29в" onClick={() => {setEvidence(4)}} className="shkafi" style={{position: 'absolute', top: 170, left: 'calc(50% - -60px)', width: 50, height: 80, color: "white"}}></a>
                <a data-to-page="p29б" onClick={() => {setEvidence(5)}} className="shkafi" style={{position: 'absolute', top: 380, left: 'calc(50% - -50px)', width: 80, height: 80, color: "white"}}></a>
                <button onClick={nextPage}>Дальше</button>
            </div>
            </>
            : (evidence === 1) ?
            <>
            <div>
                <Criminal/>
                <img width="640px" height="542px" src={p29г} alt="p29г"/>
                <a onClick={() => {setEvidence(0)}} className="shkafi" style={{position: 'absolute', top: 70, left: 'calc(50% - 95px)', width: 350, height: 80, color: "white"}}>{""}</a>
                <a onClick={() => {setError(1)}} className="shkafi" style={{position: 'absolute', top: 300, left: 'calc(50% - 90px)', width: 350, height: 80, color: "white"}}>{""}</a>
            </div>
            </>
            : (evidence === 2) ?
            <>
            <div>
                <Criminal/>
                <img width="640px" height="542px" src={p29а} alt="p29а"/>
                <a onClick={() => {setEvidence(0)}} className="shkafi" style={{position: 'absolute', top: 70, left: 'calc(50% - 270px)', width: 350, height: 80, color: "white"}}>{""}</a>
                <a onClick={() => {setError(2)}} className="shkafi" style={{position: 'absolute', top: 300, left: 'calc(50% - 265px)', width: 350, height: 80, color: "white"}}>{""}</a>
            </div>
            </>
            : (evidence === 3) ?
            <>
            <div>
                <Criminal/>
                <img width="640px" height="542px" src={p29д} alt="p29д"/>
                <a onClick={() => {setEvidence(0)}} className="shkafi" style={{position: 'absolute', top: 70, left: 'calc(50% - 90px)', width: 350, height: 80, color: "white"}}>{""}</a>
                <a onClick={() => {setError(3)}} className="shkafi" style={{position: 'absolute', top: 300, left: 'calc(50% - 95px)', width: 350, height: 80, color: "white"}}>{""}</a>
            </div>
            </>
            : (evidence === 4) ?
            <>
            <div>
                <Criminal/>
                <img width="640px" height="542px" src={p29в} alt="p29в"/>
                <a onClick={() => {setError(4)}} className="shkafi" style={{position: 'absolute', top: 70, left: 'calc(50% - 270px)', width: 350, height: 80, color: "white"}}>{""}</a>
                <a onClick={() => {setEvidence(0)}} className="shkafi" style={{position: 'absolute', top: 300, left: 'calc(50% - 265px)', width: 350, height: 80, color: "white"}}>{""}</a>
            </div>
            </>
            : 
            <>
            <div>
                <Criminal/>
                <img width="640px" height="542px" src={p29б} alt="p29б"/>
                <a onClick={() => {setEvidence(0)}} className="shkafi" style={{position: 'absolute', top: 70, left: 'calc(50% - 270px)', width: 350, height: 80, color: "white"}}>{""}</a>
                <a onClick={() => {setError(5)}} className="shkafi" style={{position: 'absolute', top: 300, left: 'calc(50% - 265px)', width: 350, height: 80, color: "white"}}>{""}</a>
            </div>
            </>
            : (error === 1) ? <Error text="Подумай!" onClick1={() => {setError(0)}} button1="Понятно"
            newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1lMDhOuE5Wb75TV5G4OxRB7sRuNyW7P16/view"> <button>Не понятно</button></a>}
            button2style={{display: "none"}}/>
            : (error === 2) ? <Error text="Подумай!" onClick1={() => {setError(0)}} button1="Понятно"
            newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1xWvu9AnfNT_fRCiEVAUXXR0XEN0AyKD6/view"> <button>Не понятно</button></a>}
            button2style={{display: "none"}}/>
            : (error === 3) ? <Error text="Подумай!" onClick1={() => {setError(0)}} button1="Понятно"
            newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1KDVs9OQs31MTTIFIP-zIVe9hDEwONRhE/view"> <button>Не понятно</button></a>}
            button2style={{display: "none"}}/>
            : (error === 4) ? <Error text="Подумай!" onClick1={() => {setError(0)}} button1="Понятно"
            newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1e8gLT2Yg_LoFf7wgnMIYvtDTE-xzyQrP/view"> <button>Не понятно</button></a>}
            button2style={{display: "none"}}/>
            : <Error text="Подумай!" onClick1={() => {setError(0)}} button1="Понятно"
            newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1jOdo_sb3Osmz-xrjimoenvbjNpaENJlb/view"> <button>Не понятно</button></a>}
            button2style={{display: "none"}}/>
            }
        </div>
    )
}
export default Fourteen;