/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react"
import Criminal from "../ui/criminal-case/criminal-case"
import Error from "../error/error"
import p29к from "../../images/p29к.jpg"
import p29к2 from "../../images/p29к2.jpg"
import p29к3 from "../../images/p29к3.jpg"
import p29к4 from "../../images/p29к4.jpg"
import p29к5 from "../../images/p29к5.jpg"
import p29к6 from "../../images/p29к6.jpg"
import { useNavigate } from "react-router-dom"
const step = JSON.parse(localStorage.getItem("step"));
if (step !== 15) { localStorage.setItem("step", 15)};

function Twentynine2() {
    const [error, setError] = useState(0)
    const [evidence, setEvidence] = useState(0)
    const navigate = useNavigate()
    const nextPage = () => {
        navigate("/30")
    }
    return(
        <div>
            {(error === 0) ?
            (evidence === 0) ?
            <>
            <Criminal/>
            <img width="640px" height="542px" src={p29к} alt="p29к"/>
            <div className="Buttons">
                <a data-to-page="p29к2"  onClick={() => {setEvidence(2)}} className="shkafi" style={{position: 'absolute', top: 400, left: 'calc(50% - 250px)', width: 100, height: 100, color: "white"}}>{""}</a>
                <a data-to-page="p29к3"  onClick={() => {setEvidence(3)}} className="shkafi" style={{position: 'absolute', top: 450, left: 'calc(50% - 50px)', width: 100, height: 80, color: "white"}}>{""}</a>
                <a data-to-page="p29к4"  onClick={() => {setEvidence(4)}} className="shkafi" style={{position: 'absolute', top: 400, left: 'calc(50% - 330px)', width: 50, height: 50, color: "white"}}>{""}</a>
                <a data-to-page="p29к5"  onClick={() => {setEvidence(5)}} className="shkafi" style={{position: 'absolute', top: 480, left: 'calc(50% - -180px)', width: 50, height: 80, color: "white"}}>{""}</a>
                <a data-to-page="p29к6"  onClick={() => {setEvidence(6)}} className="shkafi" style={{position: 'absolute', top: 450, left: 'calc(50% - 130px)', width: 80, height: 80, color: "white"}}>{""}</a>
                <button onClick={nextPage}>Дальше</button>
            </div>
            </>
            : (evidence === 2) ?
            <>
            <Criminal/>
            <img width="640px" height="542px" src={p29к2} alt="p29к2"/>
            <div className="Buttons">
                <a data-to-page="p29к"  onClick={() => {setEvidence(0)}} className="shkafi" style={{position: 'absolute', top: 80, left: 'calc(50% - 150px)', width: 300, height: 80, color: "white"}}>{""}</a>
                <a data-to-page="p29к2о"  onClick={() => {setError(1)}} className="shkafi" style={{position: 'absolute', top: 400, left: 'calc(50% - 250px)', width: 450, height: 80, color: "white"}}>{""}</a>
            </div>
            </>
            : (evidence === 3) ?
            <>
            <Criminal/>
            <img width="640px" height="542px" src={p29к3} alt="p29к3"/>
            <div className="Buttons">
                <a data-to-page="p29к"  onClick={() => {setEvidence(0)}} className="shkafi" style={{position: 'absolute', top: 80, left: 'calc(50% - 150px)', width: 300, height: 80, color: "white"}}>{""}</a>
                <a data-to-page="p29к3о"  onClick={() => {setError(2)}} className="shkafi" style={{position: 'absolute', top: 400, left: 'calc(50% - 250px)', width: 450, height: 80, color: "white"}}>{""}</a>
            </div>
            </>
            : (evidence === 4) ?
            <>
            <Criminal/>
            <img width="640px" height="542px" src={p29к4} alt="p29к4"/>
            <div className="Buttons">
                <a data-to-page="p29к"  onClick={() => {setEvidence(0)}} className="shkafi" style={{position: 'absolute', top: 80, left: 'calc(50% - 150px)', width: 300, height: 80, color: "white"}}>{""}</a>
                <a data-to-page="p29к4о"  onClick={() => {setError(3)}} className="shkafi" style={{position: 'absolute', top: 400, left: 'calc(50% - 250px)', width: 450, height: 80, color: "white"}}>{""}</a>
            </div>
            </>
            : (evidence === 5) ?
            <>
            <Criminal/>
            <img width="640px" height="542px" src={p29к5} alt="p29к5"/>
            <div className="Buttons">
                <a data-to-page="p29к"  onClick={() => {setEvidence(0)}} className="shkafi" style={{position: 'absolute', top: 80, left: 'calc(50% - 150px)', width: 300, height: 80, color: "white"}}>{""}</a>
                <a data-to-page="p29к5о"  onClick={() => {setError(4)}} className="shkafi" style={{position: 'absolute', top: 200, left: 'calc(50% - 250px)', width: 450, height: 80, color: "white"}}>{""}</a>
            </div>
            </>
            :
            <>
            <Criminal/>
            <img width="640px" height="542px" src={p29к6} alt="p29к6"/>
            <div className="Buttons">
                <a data-to-page="p29к"  onClick={() => {setEvidence(0)}} className="shkafi" style={{position: 'absolute', top: 80, left: 'calc(50% - 150px)', width: 300, height: 80, color: "white"}}>{""}</a>
                <a data-to-page="p29к6о"  onClick={() => {setError(4)}} className="shkafi" style={{position: 'absolute', top: 360, left: 'calc(50% - 250px)', width: 450, height: 80, color: "white"}}>{""}</a>
            </div>
            </>
            : (error === 1) ? <Error text="Подумай!" onClick1={() => {setError(0)}} button1="Понятно"
            newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1KDVs9OQs31MTTIFIP-zIVe9hDEwONRhE/view"> <button>Не понятно</button></a>}
            button2style={{display: "none"}}/>
            : (error === 2) ? <Error text="Подумай!" onClick1={() => {setError(0)}} button1="Понятно"
            newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1KDVs9OQs31MTTIFIP-zIVe9hDEwONRhE/view"> <button>Не понятно</button></a>}
            button2style={{display: "none"}}/>
            : (error === 3) ? <Error text="Подумай!" onClick1={() => {setError(0)}} button1="Понятно"
            newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1KDVs9OQs31MTTIFIP-zIVe9hDEwONRhE/view"> <button>Не понятно</button></a>}
            button2style={{display: "none"}}/>
            : (error === 4) ? <Error text="Подумай!" onClick1={() => {setError(0)}} button1="Понятно"
            newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1KDVs9OQs31MTTIFIP-zIVe9hDEwONRhE/view"> <button>Не понятно</button></a>}
            button2style={{display: "none"}}/>
            : <Error text="Подумай!" onClick1={() => {setError(0)}} button1="Понятно"
            newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1KDVs9OQs31MTTIFIP-zIVe9hDEwONRhE/view"> <button>Не понятно</button></a>}
            button2style={{display: "none"}}/>
            }            
        </div>
    )
}
export default Twentynine2;