import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './ChooseCharacter2.css'
import res2 from '../../../images/buttons/Resurs_2_4x.webp'
import p4 from '../../../images/p4.webp'

function ChooseCharacter2() {
        const [currentCharacter, setCurrentCharacter] = useState(1)
        const navigate = useNavigate();
        const nextPage = () => {
            if(currentCharacter == 1) {navigate("/finisheduniversity")}
            if(currentCharacter == 2) {navigate("/finisheduniversity")}
            if(currentCharacter == 3) {navigate("/finisheduniversity")}
        }


    return(
            <div>
            <img src={p4} width="640px" height="542px" alt='p4'/>
            <a title='Следователь' target="_blank" rel='nooper noreferrer' href='https://drive.google.com/file/d/1E5MxtbaEAoGSmNoKfgV3KRWtc7FcoMT8/view'>
                <img alt='Следователь' src={res2} style={{position: 'absolute', width: '30px', top: '127px', left: 'calc(50% - 42px)'}}/>
            </a>
            <div className="Buttons">
                <button className='linkButton' onClick={nextPage}>Дальше</button>
            </div>
            </div>
    );
}

export default ChooseCharacter2;