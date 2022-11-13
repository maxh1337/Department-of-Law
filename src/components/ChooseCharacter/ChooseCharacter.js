import p2 from '../../images/p2.jpg'
import './ChooseCharacter.css'
import res1 from '../../images/buttons/Resurs_1_4x.png'
import res2 from '../../images/buttons/Resurs_2_4x.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function ChooseCharacter() {
    const navigate = useNavigate();
    const [currentCharacter, setCurrentCharacter] = useState(0)
    const [characterChosen, setCharacterChosen] = useState(0)

    const changeCharacterState = (e) => {
        const btn = e.currentTarget
        let chosenCharacter = btn.value

        if (characterChosen === 0 || chosenCharacter === characterChosen){
            if (btn.classList.contains("borderjs")) {
                btn.classList.remove("borderjs")
                chosenCharacter = 0;
                setCharacterChosen(0)
            } else {
                btn.classList.add("borderjs")
                setCharacterChosen(chosenCharacter)
            }
        } else {
            console.log(chosenCharacter, characterChosen)
        }
        if (btn.value === "1") {
            setCurrentCharacter(1)
        } if (btn.value === "2") {
            setCurrentCharacter(2)
        } if (btn.value === "3") {
            setCurrentCharacter(3)
        }
    }

    const nextPage = () => {
        if (currentCharacter === 1) { navigate("/choosecharacter1") }
        if (currentCharacter === 2) { navigate("/choosecharacter1") }
        if (currentCharacter === 3) { navigate("/choosecharacter1") }
    } 

    return (
        <div>
            <button value="1" id="test1" className='buttonToChoose1' onClick={changeCharacterState} />
            <button value="2" id="test2" className='buttonToChoose2' onClick={changeCharacterState} />
            <button value="3" id="test3" className='buttonToChoose3' onClick={changeCharacterState} />
            <img width="640" height="542" src={p2} alt="p2"></img>
            <a title='Следователь' target="_blank" rel='nooper noreferrer' href='https://drive.google.com/file/d/1Qqku69nm-I09zpUbsrNlUvIVsbru2P1m/view'>
                <img alt='Следователь' src={res2} style={{ position: 'absolute', width: '30px', top: '157px', left: 'calc(50% - 132px)' }} />
            </a>
            <a title='Формы предварительного расследования' target="_blank" rel='nooper noreferrer' href='https://drive.google.com/file/d/1M1JpFqho86C8ZXcCcwUprGmtN0ILFSef/view'>
                <img className='criminal-case' alt='Следователь' src={res1} />
            </a>
            <div className="Buttons">
                <button className='linkButton' onClick={nextPage} id="btn1">Дальше</button>
            </div>

        </div>
    )
}
export default ChooseCharacter;