import p2 from '../../images/p2.jpg'
import './ChooseCharacter.css'
import res1 from '../../images/buttons/Resurs_1_4x.png'
import res2 from '../../images/buttons/Resurs_2_4x.png'
import { Link } from 'react-router-dom';


function ChooseCharacter(){
    return(
        <div className='App'>
        <div>
            <img width="640" height="542" src={p2} alt="p2"></img>
            <a title='Следователь' target="_blank" rel='nooper noreferrer' href='https://drive.google.com/file/d/1Qqku69nm-I09zpUbsrNlUvIVsbru2P1m/view'>
                <img alt='Следователь' src={res2} style={{position: 'absolute', width: '30px', top: '157px', left: 'calc(50% - 132px)'}}/>
            </a>
            <a title='Формы предварительного расследования' target="_blank" rel='nooper noreferrer' href='https://drive.google.com/file/d/1M1JpFqho86C8ZXcCcwUprGmtN0ILFSef/view'>
                <img className='criminal-case' alt='Следователь' src={res1}/>
            </a>
            <div className="Buttons">
                <Link className='linkButton'>Дальше</Link>
            </div>
        </div>
        </div>
    )
}
export default ChooseCharacter;