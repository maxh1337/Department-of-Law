import { useNavigate } from "react-router-dom"
import p9a from "../../images/error.jpg"

function ThirdExplanation(){
    const navigate = useNavigate();
    const GoBack = () => {
        navigate("/3e")
    }
    return(
        <div>
            <img width="640" height="542" src={p9a} alt="p9а"></img>
            <div className="error-text">
            Статья 51 Конституции РФ: «Никто не обязан свидетельствовать против себя самого, своего супруга и близких родственников, круг которых определяется федеральным законом»
            <br/>
            <br/>
            <div className="buttons">
                <button onClick={GoBack}>Понятно</button>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1xNBuRjMF6WrEE_I39d5oCKwZHIRm9JgW/view">
                    <button>Не понятно</button>
                </a>
            </div>
            </div>
        </div>
    )
}

export default ThirdExplanation