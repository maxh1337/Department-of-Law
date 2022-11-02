/* eslint-disable jsx-a11y/anchor-is-valid */
import Criminal from "../criminal-case/criminal-case";
import p32 from "../../images/p32.jpg"
import p32б from "../../images/p32б.jpg"
import p33 from "../../images/p33.jpg"
import p34 from "../../images/p34.jpg"
import p35 from "../../images/p35.jpg"
import p36 from "../../images/p36.jpg"
import p37 from "../../images/p37.jpg"
import p38 from "../../images/p38.jpg"
import p39 from "../../images/p39.jpg"
import p40 from "../../images/p40.jpg"
import p41 from "../../images/p41.jpg"
import p44 from "../../images/p44.jpg"
import p46 from "../../images/p46.jpg"
import p47 from "../../images/p47.jpg"
import { useState } from "react";
import Error from "../error/error";
import { useNavigate } from "react-router-dom";

function Nineteen(){
    const [error,setError] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [redirect1, setRedirect1] = useState(1)
    const navigate = useNavigate()
    const step = JSON.parse(localStorage.getItem("step"));
    if (step !== 19) { localStorage.setItem("step", 19)};
    const goNext = () => {
        navigate("/20")
    }
    const goToStart = () => {
        navigate("/")
    }
    const CheckAndRedirect = () => {
        const inputValue = document.getElementById("19-1").value
        if (
            inputValue.toLowerCase() === 'дактилоскопическую' ||
            inputValue.toLowerCase() === 'дактилоскопическая' ||
            inputValue.toLowerCase() === 'дактилоскопической' 
        ) {
            setRedirect1(3)
        } else {
            setError(true)
        }
    }
    const CheckAndRedirect1 = () => {
        const inputValue1 = document.getElementById("19-2").value
        if (
            inputValue1.toLowerCase() === 'папиллярных узоров' 
 
        ) {
            setRedirect1(4)
        } else {
            setError(true)
        }
    }
    const CheckAndRedirect2 = () => {
        const inputValue1 = document.getElementById("19-3").value
        if (
            inputValue1.toLowerCase() === 'трасологической' 
        ) {
            setRedirect1(5)
        } else {
            setError(true)
        }
    }
    const CheckAndRedirect4 = () => {
        const inputValue1 = document.getElementById("19-5").value
        if (
            inputValue1.toLowerCase() === 'трасологической' 
        ) {
            setRedirect1(7)
        } else {
            setError(true)
        }
    }
    const CheckAndRedirect3 = () => {
        const inputValue1 = document.getElementById("19-4").value
        const inputValue2 = document.getElementById("19-4-1").value
        const inputValue3 = document.getElementById("19-4-2").value
        const inputValue4 = document.getElementById("19-4-3").value
        const inputValue5 = document.getElementById("19-4-4").value
        if (
            inputValue1.toLowerCase() === 'обуви' ||
            inputValue2.toLowerCase() === 'пол, возраст, рост' ||
            inputValue2.toLowerCase() === 'пол, рост, возраст' ||
            inputValue2.toLowerCase() === 'возраст, рост, пол' ||
            inputValue2.toLowerCase() === 'возраст, пол, рост' ||
            inputValue2.toLowerCase() === 'рост, возраст, пол' ||
            inputValue2.toLowerCase() === 'рост, пол, возраст' ||
            inputValue3.toLowerCase() === 'направлении' ||
            inputValue4.toLowerCase() === 'следы' ||
            inputValue5.toLowerCase() === 'обувь'
        ) {
            setRedirect1(6)
        } else {
            setError(true)
        }
    }
    const CheckAndRedirect5 = () => {
        const inputValue1 = document.getElementById("19-6").value
        const inputValue2 = document.getElementById("19-6-1").value
        const inputValue3 = document.getElementById("19-6-2").value
        if (
            inputValue1.toLowerCase() === 'замок    ' ||
            inputValue2.toLowerCase() === 'взлома' ||
            inputValue3.toLowerCase() === 'предметом'
        ) {
            setRedirect1(8)
        } else {
            setError(true)
        }
    }
    return(
        <div>
                <Criminal/>
                {(redirect1 === 1) ?
                (redirect === false) ?
                (error === false) ?
                <>
                <img width="640px" height="542px" src={p32} alt="p32"/>
                <a data-to-page="p32б"  onClick={() => {setRedirect(true)}} className="shkafi" style={{position: 'absolute', top: 200, left: 'calc(50% - 280px)', width: 300, height: 100, color: "white"}}>{""}</a>
                <a data-to-page="p32о"  onClick={() => {setError(true)}} className="shkafi" style={{position: 'absolute', top: 70, left: 'calc(50% - 280px)', width: 300, height: 80, color: "white"}}>{""}</a>
                <a data-to-page="p32о"  onClick={() => {setError(true)}} className="shkafi" style={{position: 'absolute', top: 100, left: 'calc(50% - 0px)', width: 300, height: 100, color: "white"}}>{""}</a>
                <a data-to-page="p32о"  onClick={() => {setError(true)}} className="shkafi" style={{position: 'absolute', top: 270, left: 'calc(50% - 0px)', width: 300, height: 80, color: "white"}}>{""}</a>
                </>
                : <Error text="Подумай!" onClick1={() => {setError(false)}} button1="Понятно"
                newButton={<a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1KDVs9OQs31MTTIFIP-zIVe9hDEwONRhE/view"><button>Не понятно</button></a>}
                button2style={{display: "none"}}/>
                : 
                <>
                <div>
                    <img width="640px" height="542px" src={p32б} alt="p32б"/>
                    <div className="Buttons">
                        <button onClick={() => {setRedirect1(2)}}>Дальше</button>
                    </div>
                </div>
                </>
                : (redirect1 === 2) ?
                <>
                <div>
                    <img width="640px" height="542px" src={p33} alt="p33"/>
                    <div className="doc-content">
                    ПОСТАНОВЛЕНИЕ:<br/>
                    о назначении
                    <br/>
                    <input placeholder="Заполните пропуск" id="19-1"style={{width: "180"}}/>
                    &nbsp;судебной экспертизы.
                    <br/>
                    ...
                    <br/>
                    <br/>
                    <button onClick={CheckAndRedirect}>Проверить</button>
                    </div>
                </div>
                </>
                : (redirect1 === 3) ?
                <>
                <div>
                    <img width="640px" height="542px" src={p34} alt="p34"/>
                    <div className="doc-content">
                    П1. Имеются ли на представленных объектах следы
                        <br/>
                        <input placeholder="Заполните пропуск" id="19-2" style={{width: 180}}/>
                        &nbsp;и, если да, то пригодны ли они для идентификации
                        человека, оставившего их?
                        <br/>
                        Не оставлены ли следы
                        <input placeholder="Заполните пропуск" id="19-2" style={{width: 180}}/>
                        &nbsp;
                        конкретным
                        человеком?
                        <br/>
                        Какими пальцами и какой руки оставлены следы
                        <input placeholder="Заполните пропуск" id="19-2" style={{width: 180}}/>
                        &nbsp;
                        <br/>
                        Принадлежат ли следы
                        <input placeholder="Заполните пропуск" id="19-2" style={{width: 180}}/>
                        &nbsp;
                        одному или
                        нескольким лицам?
                        <br/>
                        Какова относительная давность следов
                        <input placeholder="Заполните пропуск" id="19-2" style={{width: 180}}/>
                        &nbsp;
                        <br/>

                        <button onClick={CheckAndRedirect1}>Проверить</button>                        
                    </div>
                </div>
                </>
                : (redirect1 === 4) ?
                <>
                <div>
                    <img width="640px" height="542px" src={p35} alt="p35"/>
                    <div className="doc-content">
                            ПОСТАНОВЛЕНИЕ:<br/>

                            о назначении


                            <br/>
                            <input placeholder="Заполните пропуск" style={{width: 180}} id="19-3"/>
                            &nbsp; экспертизы.
                            <br/>
                            ...
                            <br/>
                            <br/>
                            <button onClick={CheckAndRedirect2}>Проверить</button>                        
                    </div>
                </div>
                </>
                : (redirect1 === 5) ?
                <>
                <div>
                    <img width="640px" height="542px" src={p36} alt="p36"/>
                    <div className="doc-content">
                    Каков вид и размер
                            <br/>
                            <input placeholder="Заполните пропуск" id="19-4" style={{width: 180}}/>
                            &nbsp;оставившей следы?
                            <br/>
                            Каковы физические данные
                            <input placeholder="Заполните пропуск" id="19-4-1" style={{width: 180}}/>
                            &nbsp;
                            человека,
                            оставившего данные следы?
                            <br/>
                            В каком
                            <input placeholder="Заполните пропуск" id="19-4-2" style={{width: 180}}/>
                            &nbsp;
                            и каким образом передвигался человек, оставивший следы?
                            <br/>
                            Как давно оставлены
                            <input placeholder="Заполните пропуск" id="19-4-3" style={{width: 180}}/>
                            &nbsp;
                            ?
                            <br/>
                            Какие особенности имеет
                            <input placeholder="Заполните пропуск" id="19-4-4" style={{width: 180}}/>
                            &nbsp;
                            следы которой обнаружены на
                            месте происшествия?
                            <br/>

                            <button onClick={CheckAndRedirect3}>Проверить</button>
                    </div>
                </div>
                </>
                : (redirect1 === 6) ?
                <>
                <div>
                    <img width="640px" height="542px" src={p37} alt="p37"/>
                    <div className="doc-content">
                    ПОСТАНОВЛЕНИЕ:<br/>
                    о назначении
                    <br/>
                    <input placeholder="Заполните пропуск" id="19-5"style={{width: "180"}}/>
                    &nbsp;судебной экспертизы.
                    <br/>
                    ...
                    <br/>
                    <br/>
                    <button onClick={CheckAndRedirect4}>Проверить</button>
                    </div>
                </div>
                </>
                : (redirect1 === 7) ?
                <>
                <div>
                    <img width="640px" height="542px" src={p37} alt="p37"/>
                    <div className="doc-content">
                    Исправен ли представленный на исследование
                    <br/>
                    <input placeholder="Заполните пропуск" style={{width: 180}} id="19-6"/>
                    &nbsp;
                    <br/>
                    Если
                    <input placeholder="Заполните пропуск" style={{width: 180}} id="19-6"/>
                    &nbsp;
                    неисправен, то какова причина его неисправности?
                    <br/>
                    Возможно ли отпереть (запереть)
                    <input placeholder="Заполните пропуск" style={{width: 180}} id="19-6"/>
                    &nbsp;
                    конкретными ключами
                    (ключом)?
                    <br/>
                    Имеются ли на механизме замка следы
                    <input placeholder="Заполните пропуск" style={{width: 180}}id="19-6-1"/>
                    &nbsp;
                    ?
                    <br/>
                    Если «имеются», то каким
                    <input placeholder="Заполните пропуск" style={{width: 180}}id="19-6-2"/>
                    &nbsp;
                    был взломан замок?
                    <br/>

                    <button onClick={CheckAndRedirect5}>Проверить</button>
                    </div>
                </div>
                </>
                : (redirect1 === 8) ?
                <>
                <div>
                    <img width="640px" height="542px" src={p39} alt="p39"/>
                    <div className="Buttons">
                        <button onClick={() => {setRedirect1(9)}}>Продолжить</button>
                    </div>
                </div>
                </>
                : (redirect1 === 9) ?
                <>
                <div>
                    <img width="640px" height="542px" src={p40} alt="p40"/>
                    <div className="Buttons">
                        <button onClick={() => {setRedirect1(10)}}>Продолжить</button>
                    </div>
                </div>
                </>
                : (redirect1 === 10) ?
                <>
                <div>
                    <img width="640px" height="542px" src={p41} alt="p41"/>
                    <a className="shkafi" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1Zjf5mnrMhBdqa6PM-IgB-atVUpFwvhofYT0LILXmtkc/edit?usp=sharing" style={{position: 'absolute',  top: 170, left: 'calc(50% - 50px)', width: 300, height: 80, color: "white"}}>{""}</a>
                    <a className="shkafi" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1CL9B9aThbGRPi9CuaU0GLDsqnhkz_QH3huqXF-mcXUo/edit?usp=sharing" style={{position: 'absolute',  top: 110, left: 'calc(50% - 150px)', width: 300, height: 80, color: "white"}}>{""}</a>
                    <div className="Buttons">
                        <button onClick={() => {setRedirect1(11)}}>Продолжить</button>
                    </div>
                </div>
                </>
                : (redirect1 === 11) ?
                <>
                <div>
                    <img width="640px" height="542px" src={p44} alt="p44"/>
                    <div className="Buttons">
                        <button onClick={() => {setRedirect1(12)}}>Продолжить</button>
                    </div>
                </div>
                </>
                : (redirect1 === 12) ?
                <>
                <div>
                    <img width="640px" height="542px" src={p46} alt="p46"/>
                    <div className="Buttons">
                        <button onClick={() => {setRedirect1(13)}}>Продолжить</button>
                    </div>
                </div>
                </>
                :
                <>
                <div>
                    <img width="640px" height="542px" src={p47} alt="p47"/>
                    <div className="Buttons">
                        <button onClick={goToStart}>Продолжить</button>
                    </div>
                </div>
                </>
                }  
        </div>
    )
}
export default Nineteen;