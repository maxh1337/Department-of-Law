import { useState } from "react"
import doc2 from "../../images/doc2.jpg"
import criminalcase from '../../images/buttons/criminal_case.png'
import { useNavigate } from "react-router-dom"
import Error from "../error/error"
import Criminal from "../criminal-case/criminal-case"

function Seven() {
    const way = JSON.parse(localStorage.getItem("mediumWay"))
    const step = JSON.parse(localStorage.getItem("step"));
    const navigate = useNavigate()
    const [IsPopupOpened, setIsPopupOpened] = useState(false)
    const [j1, setJ1] = useState(0);
    const [j2, setJ2] = useState(0);
    const [j3, setJ3] = useState(0);
    const [j4, setJ4] = useState(0);
    const [errorShowed, setErrorShowed] = useState(0)
    
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
    if (step !== 7) { localStorage.setItem("step", 7)}
    if (j1===1 & j2===1 & j3===1 & j4===1 ) {
        navigate("/8")
        localStorage.setItem("step", 8)
    }
    const TriggerStyle1 = () => {
        
        const cloud = document.getElementById("7-1")
        if (j1===0) {
            cloud.classList.add("selected")
            setJ1(1)
        } else {
            cloud.classList.remove("selected")
            setJ1(0)
        }
        
    }
    const TriggerStyle2 = () => {
        const cloud = document.getElementById("7-2")
        if (j2===0) {
            cloud.classList.add("selected")
            setJ2(1)
        } else {
            cloud.classList.remove("selected")
            setJ2(0)
        }
    }
    const TriggerStyle3 = () => {
        const cloud = document.getElementById("7-3")
        if (j3===0) {
            cloud.classList.add("selected")
            setJ3(1)
        } else {
            cloud.classList.remove("selected")
            setJ3(0)
        }
    }
    const TriggerStyle4 = () => {
        const cloud = document.getElementById("7-4")
        if (j4===0) {
            cloud.classList.add("selected")
            setJ4(1)
        } else {
            cloud.classList.remove("selected")
            setJ4(0)
        }
    }
    
    return(
        <> 
        {(errorShowed === 0) ?
        <div>
            <Criminal/>
            <img src={doc2} alt="5" width="640px" height="542px"/>
            <div className="in-book">
                <div data-error-text="Думаешь, там еще и труп?" onClick={() => {setErrorShowed(1)}}>Иванов И.И. – судмедэксперт 21-16-18</div>
                <div id="7-1" className="" onClick={TriggerStyle1}>Петров П.П. – специалист-криминалист 35-37-69</div>
                <div id="7-2" className="" onClick={TriggerStyle2}>Васильев В.В. - ОУР 32-43-45</div>
                <div id="7-3" className="" onClick={TriggerStyle3}>Данилов Д.Д. - ОУР 54-23-23</div>
                <div id="7-4" className="" onClick={TriggerStyle4}>Артемов А.А. – инспектор-кинолог 33-54-65</div>
                <div data-error-text="Стоматолога или ЛОРа брать будешь?" onClick={() => {setErrorShowed(2)}}>Сидоров С.С. – врач 21-54-32</div>
                <div data-error-text="Не забудь еще взять «Толковый словарь» Даля!" onClick={() => {setErrorShowed(3)}}>Сидоров С.С. - переводчик 65-34-65</div>
                <div data-error-text="Экстрасенс??? Ты бы еще Гарри Поттера взял!" onClick={() => {setErrorShowed(4)}}>Кириллов К.К. – экстрасенс 45-73-76</div>
                <div data-error-text="Боишься переволноваться?" onClick={() => {setErrorShowed(5)}}>Якушев Я.Я. – психолог 65-76-89</div>
            </div>
        </div>
        
        : (errorShowed === 1) ? <Error onClick={() => {setErrorShowed(0)}} text="Думаешь, там еще и труп?" button1="Назад" button2style={{display : "none"}}/>
        : (errorShowed === 2) ? <Error onClick={() => {setErrorShowed(0)}} text="Стоматолога или ЛОРа брать будешь?" button1="Назад" button2style={{display : "none"}}/>
        : (errorShowed === 3) ? <Error onClick={() => {setErrorShowed(0)}} text="Не забудь еще взять «Толковый словарь» Даля!" button1="Назад" button2style={{display : "none"}}/>
        : (errorShowed === 4) ? <Error onClick={() => {setErrorShowed(0)}} text="Экстрасенс??? Ты бы еще Гарри Поттера взял!" button1="Назад" button2style={{display : "none"}}/>
        : <Error onClick={() => {setErrorShowed(0)}} text="Боишься переволноваться?" button1="Назад" button2style={{display : "none"}}/>
        }</>
    )
}

export default Seven;

// {(way === 1) ?
//     <a title='Материалы дела'>
//         <img alt='Материалы дела' className='criminal-case' src={criminalcase} onClick={showPopup}/>
//         <div className='criminal-case-modal' id="criminal-case-modal">
//             <a href='https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view' target="_blank" rel='noopener noreferrer'>
//                 <button>Заявление о преступлении</button> 
//             </a>
//             <a href='https://drive.google.com/file/d/1pjE-OOjKm-Cj78MKxQJqr5UiEXChIxAF/view' target="_blank" rel='noopener noreferrer'>
//                 <button>Протокол допроса потерпевшей</button> 
//             </a>
//         </div>
//     </a>
//     : (way === 2) ?
//     <a title='Материалы дела'>
//     <img alt='Материалы дела' className='criminal-case' src={criminalcase} onClick={showPopup}/>
//     <div className='criminal-case-modal' id="criminal-case-modal">
//         <a href='https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view' target="_blank" rel='noopener noreferrer'>
//         <button>Заявление о преступлении</button> 
//         </a>
//         <a href='https://drive.google.com/file/d/1p5y9GCvhO-zizn7QQAFNkAJLZNZvGYZG/view' target="_blank" rel='noopener noreferrer'>
//         <button>Протокол УЗОП</button> 
//         </a>
//     </div>
//      </a>
//     : (way === 3 ) ?
//     <a title='Материалы дела'>
//     <img alt='Материалы дела' className='criminal-case' src={criminalcase} onClick={showPopup}/>
//     <div className='criminal-case-modal' id="criminal-case-modal">
//         <a href='https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view' target="_blank" rel='noopener noreferrer'>
//         <button>Заявление о преступлении</button> 
//         </a>
//         <a href='https://drive.google.com/file/d/1vMlOar6blg4XyuUdUvM2UYXwNP--13F7/view' target="_blank" rel='noopener noreferrer'>
//         <button>Рапорт об обнаружении признаков преступления</button> 
//         </a>
//         <a href='https://drive.google.com/file/d/1f3E5XSKmwWhc25xdmgKMcrhdhn6ER_y1/view' target="_blank" rel='noopener noreferrer'>
//         <button>Объяснение гражданки синичкиной</button> 
//         </a>
//     </div>
//     </a>
//     :
//     <a title='Материалы дела'>
//     <img alt='Материалы дела' className='criminal-case' src={criminalcase} onClick={showPopup}/>
//     <div className='criminal-case-modal' id="criminal-case-modal">
//         <a href='https://drive.google.com/file/d/1ogUDREkHV6kWEG-wtAslDpj2FrXNxiS1/view' target="_blank" rel='noopener noreferrer'>
//         <button>Заявление о преступлении</button> 
//         </a>
//         <a href='https://drive.google.com/file/d/1f3E5XSKmwWhc25xdmgKMcrhdhn6ER_y1/view' target="_blank" rel='noopener noreferrer'>
//         <button>Объяснение гражданки Синичкиной</button> 
//         </a>
//     </div>
//     </a>
//     }