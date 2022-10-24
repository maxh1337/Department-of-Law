import { useState } from "react";
import p15 from "../../images/p15.jpg"
import Error from "../error/error";
import criminalcase from '../../images/buttons/criminal_case.png'
import { useNavigate } from "react-router-dom";
import Criminal from "../criminal-case/criminal-case";

function Nine(){
    const navigate = useNavigate();
    const way = JSON.parse(localStorage.getItem("mediumWay"));
    const [j1, setJ1] = useState(0);
    const [j2, setJ2] = useState(0);
    const [j3, setJ3] = useState(0);
    const [j4, setJ4] = useState(0);
    const [errorShowed, setErrorShowed] = useState(0);
    const [IsPopupOpened, setIsPopupOpened] = useState(false);
    const step = JSON.parse(localStorage.getItem("step"));

    if (step !== 9) { localStorage.setItem("step", 9)}

    const showPopup = () => {
        const popup = document.querySelector(".criminal-case-modal")
        if (IsPopupOpened === false) {
            popup.classList.add("popup-show")
            setIsPopupOpened(true);
        } else {
            popup.classList.remove("popup-show");
            setIsPopupOpened(false);
        }
    }

    const TriggerStyle1 = () => {
        
        const cloud = document.getElementById("9-1")
        if (j1===0) {
            cloud.classList.add("selected")
            setJ1(1)
        } else {
            cloud.classList.remove("selected")
            setJ1(0)
        }
        
    }
    const TriggerStyle2 = () => {
        const cloud = document.getElementById("9-2")
        if (j2===0) {
            cloud.classList.add("selected")
            setJ2(1)
        } else {
            cloud.classList.remove("selected")
            setJ2(0)
        }
    }
    const TriggerStyle3 = () => {
        const cloud = document.getElementById("9-3")
        if (j3===0) {
            cloud.classList.add("selected")
            setJ3(1)
        } else {
            cloud.classList.remove("selected")
            setJ3(0)
        }
    }
    const TriggerStyle4 = () => {
        const cloud = document.getElementById("9-4")
        if (j4===0) {
            cloud.classList.add("selected")
            setJ4(1)
        } else {
            cloud.classList.remove("selected")
            setJ4(0)
        }
    }
    if (j1===1 & j2===1 & j3===1 & j4===1 ) {
        navigate("/10")
        localStorage.setItem("step", 10)
    }
    return(
        <> 
        {(errorShowed === 0) ?
        <div>
            <Criminal/>
            <img src={p15} alt="15" width="640px" height="542px"/>   
            <div id="9-1" onClick={TriggerStyle1}  className="multiple-cloud" style={{position: 'absolute', top: 35, left: 'calc(50% - 295px)', width: 192, height: 66}}></div>
            <div id="9-2" onClick={TriggerStyle2}  className="multiple-cloud" style={{position: 'absolute', top: 128, left: 'calc(50% - 185px)', width: 181, height: 95}}></div>
            <div id="9-3" onClick={TriggerStyle3}  className="multiple-cloud" style={{position: 'absolute', top: 219, left: 'calc(50% - 305px)', width: 200, height: 85}}></div>
            <div id="9-4" onClick={TriggerStyle4}  className="multiple-cloud" style={{position: 'absolute', top: 228, left: 'calc(50% - 60px)', width: 185, height: 95}}></div>
            <div className="multiple-cloud" onClick={() => {setErrorShowed(1)}} style={{position: 'absolute', top: 24, left: 'calc(50% - 60px)', width: 180, height: 95}}></div>
            <div className="multiple-cloud" onClick={() => {setErrorShowed(2)}} style={{position: 'absolute', top: 128, left: 'calc(50% + 60px)', width: 200, height: 85}}></div>
            <div className="multiple-cloud" onClick={() => {setErrorShowed(3)}} style={{position: 'absolute', top: 318, left: 'calc(50% + 110px)', width: 185, height: 95}}></div>
        </div>
        
        : (errorShowed === 1) ? <Error onClick={() => {setErrorShowed(0)}} text="Ты бы еще портативную рентгеновскую установку взял!" button1="Назад" button2style={{display : "none"}}/>
        : (errorShowed === 2) ? <Error onClick={() => {setErrorShowed(0)}} text="Ты бы еще портативную рентгеновскую установку взял!" button1="Назад" button2style={{display : "none"}}/>
        : <Error onClick={() => {setErrorShowed(0)}} text="Ты бы еще портативную рентгеновскую установку взял!" button1="Назад" button2style={{display : "none"}}/>
        }</>
    )
}
export default Nine;