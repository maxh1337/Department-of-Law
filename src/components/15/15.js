import { useState } from "react";
import p15 from "../../images/p15.jpg"
import Error from "../error/error";
import { Navigate } from "react-router-dom";
import Criminal from "../ui/criminal-case/criminal-case";

function Fifthteen(){
    const way = JSON.parse(localStorage.getItem("mediumWay"));
    var jija = 0;
    const [redirect, setRedirect] = useState(false)
    const [errorShowed, setErrorShowed] = useState(0);
    const step = JSON.parse(localStorage.getItem("step"));

    if (step !== 9) { localStorage.setItem("step", 9)}

    const TriggerStyle = (e) => {
        const cloud = e.currentTarget
        if (cloud.classList.contains("selected")) {
            cloud.classList.remove("selected")
            cloud.dataset.status = 0
            if (cloud.dataset.status && cloud.dataset.status !== 0) {
                jija--;
            }
        } else {
            cloud.classList.add("selected")
            cloud.dataset.status = 1
            if (cloud.dataset.status) {
                jija++;
            }
            
        }
        if (jija === 4) {
            setRedirect(true)
        }
    }
    return(
        <>
        {(redirect === true) ? <Navigate to="/19"/> :
        (errorShowed === 0) ?
        <div>
            <Criminal/>
            <img src={p15} alt="15" width="640px" height="542px"/>   
            <div data-status="0" id="9-1" onClick={TriggerStyle}  className="multiple-cloud" style={{position: 'absolute', top: 35, left: 'calc(50% - 295px)', width: 192, height: 66}}></div>
            <div data-status="0" id="9-2" onClick={TriggerStyle}  className="multiple-cloud" style={{position: 'absolute', top: 128, left: 'calc(50% - 185px)', width: 181, height: 95}}></div>
            <div data-status="0" id="9-3" onClick={TriggerStyle}  className="multiple-cloud" style={{position: 'absolute', top: 219, left: 'calc(50% - 305px)', width: 200, height: 85}}></div>
            <div data-status="0" id="9-4" onClick={TriggerStyle}  className="multiple-cloud" style={{position: 'absolute', top: 228, left: 'calc(50% - 60px)', width: 185, height: 95}}></div>
            <div className="multiple-cloud" onClick={() => {setErrorShowed(1)}} style={{position: 'absolute', top: 24, left: 'calc(50% - 60px)', width: 180, height: 95}}></div>
            <div className="multiple-cloud" onClick={() => {setErrorShowed(2)}} style={{position: 'absolute', top: 128, left: 'calc(50% + 60px)', width: 200, height: 85}}></div>
            <div className="multiple-cloud" onClick={() => {setErrorShowed(3)}} style={{position: 'absolute', top: 318, left: 'calc(50% + 110px)', width: 185, height: 95}}></div>
        </div>
        
        : (errorShowed === 1) ? <Error onClick1={() => {setErrorShowed(0)}} text="Ты бы еще портативную рентгеновскую установку взял!" button1="Назад" button2style={{display : "none"}}/>
        : (errorShowed === 2) ? <Error onClick1={() => {setErrorShowed(0)}} text="Ты бы еще портативную рентгеновскую установку взял!" button1="Назад" button2style={{display : "none"}}/>
        : <Error onClick1={() => {setErrorShowed(0)}} text="Ты бы еще портативную рентгеновскую установку взял!" button1="Назад" button2style={{display : "none"}}/>
        }
        </>
    )
}
export default Fifthteen;