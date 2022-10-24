import p10 from "../../images/p10.jpg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Error from "../error/error";
import criminalcase from '../../images/buttons/criminal_case.png'

function Four(){
    const [IsPopupOpened, setIsPopupOpened] = useState(false)
    const [errorShowed, setErrorShowed] = useState(false)
    const navigate = useNavigate();
    const [j1, setJ1] = useState(0);
    const [j2, setJ2] = useState(0);
    const [j3, setJ3] = useState(0);
    const [j4, setJ4] = useState(0);
    const [j5, setJ5] = useState(0);

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
    const nextPage = () => {
        if (j1 === 1 & j2 === 1 & j3 === 1 & j4 === 1 & j5 === 1) {
            navigate("/5");
            localStorage.setItem("step", 5)
        } else {
            setErrorShowed(true)
        }
    }
    const TriggerStyle1 = () => {
        
        const cloud = document.getElementById("4-1")
        if (j1===0) {
            cloud.classList.add("selected")
            setJ1(1)
        } else {
            cloud.classList.remove("selected")
            setJ1(0)
        }
        
    }
    const TriggerStyle2 = () => {
        const cloud = document.getElementById("4-2")
        if (j2===0) {
            cloud.classList.add("selected")
            setJ2(1)
        } else {
            cloud.classList.remove("selected")
            setJ2(0)
        }
    }
    const TriggerStyle3 = () => {
        const cloud = document.getElementById("4-3")
        if (j3===0) {
            cloud.classList.add("selected")
            setJ3(1)
        } else {
            cloud.classList.remove("selected")
            setJ3(0)
        }
    }
    const TriggerStyle4 = () => {
        const cloud = document.getElementById("4-4")
        if (j4===0) {
            cloud.classList.add("selected")
            setJ4(1)
        } else {
            cloud.classList.remove("selected")
            setJ4(0)
        }
    }
    const TriggerStyle5 = () => {
        const cloud = document.getElementById("4-5")
        if (j5===0) {
            cloud.classList.add("selected")
            setJ5(1)
        } else {
            cloud.classList.remove("selected")
            setJ5(0)
        }
    }
        const GoBack = () => {
        setErrorShowed(false)
    }
    
    return(
        <>
        {(errorShowed === false) ?
        <div>
            <a title='Материалы дела'>
                <img alt='Материалы дела' className='criminal-case' src={criminalcase} onClick={showPopup}/>
                <div className='criminal-case-modal' id="criminal-case-modal">
                    <a href='https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view' target="_blank" rel='noopener noreferrer'>
                    <button>Заявление о преступлении</button> 
                    </a>
                </div>
            </a>
            <img src={p10} alt="2" width="640px" height="542px"/>
            <div className="Buttons">
                <button onClick={nextPage}>Продолжить</button>
            </div>
            <div className="multiple-cloud" id="4-1" onClick={TriggerStyle1} style={{position: "absolute", top: "53px", left: "calc(50% - 312px)", width: "232px", height: "75px"}}></div>
            <div className="multiple-cloud" id="4-2" onClick={TriggerStyle2} style={{position: "absolute", top: "38px", left: "calc(50% - 44px)", width: "260px", height: "90px"}}></div>
            <div className="multiple-cloud" id="4-3" onClick={TriggerStyle3} style={{position: "absolute", top: "157px", left: "calc(50% - 275px)", width: "260px", height: "95px"}}></div>
            <div className="multiple-cloud" id="4-4" onClick={TriggerStyle4} style={{position: "absolute", top: "160px", left: "calc(50% + 45px)", width: "220px", height: "85px"}}></div>
            <div className="multiple-cloud" id="4-5" onClick={TriggerStyle5} style={{position: "absolute", top: "278px", left: "calc(50% - 110px)", width: "295px", height: "90px"}}></div>
        </div>
        : <Error text="И ЭТО ВСЕ, ЧТО ТЫ ПОМНИШЬ ?" button1="Назад" button2style={{display: "none"}} onClick1={GoBack}/>
        }
        </>
    )
}

export default Four;