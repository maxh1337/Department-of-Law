import p2 from '../../images/p2.jpg'
import './ChooseCharacter.css'
import res1 from '../../images/buttons/Resurs_1_4x.png'
import res2 from '../../images/buttons/Resurs_2_4x.png'
import { Link } from 'react-router-dom';


function ChooseCharacter(changeCharacterState2, changeCharacterState3, nextPage){

    const changeCharacterState1 = () => {
        document.getElementsById("12").style.border = "border: 5px solid yellow;";
        console.log("Залупа")
    }
    
    return(
        <div className='App'>
        <div>
            <button id='12' className='buttonToChoose1' onClick={changeCharacterState1}/>
            <button className='buttonToChoose2' onClick={changeCharacterState2}/>
            <button className='buttonToChoose3' onClick={changeCharacterState3}/>
            <img width="640" height="542" src={p2} alt="p2"></img>
            <a title='Следователь' target="_blank" rel='nooper noreferrer' href='https://drive.google.com/file/d/1Qqku69nm-I09zpUbsrNlUvIVsbru2P1m/view'>
                <img alt='Следователь' src={res2} style={{position: 'absolute', width: '30px', top: '157px', left: 'calc(50% - 132px)'}}/>
            </a>
            <a title='Формы предварительного расследования' target="_blank" rel='nooper noreferrer' href='https://drive.google.com/file/d/1M1JpFqho86C8ZXcCcwUprGmtN0ILFSef/view'>
                <img className='criminal-case' alt='Следователь' src={res1}/>
            </a>
            <div className="Buttons">
                <button className='linkButton' onClick={nextPage}>Дальше</button>
            </div>

        </div>
        </div>
    )
}
export default ChooseCharacter;