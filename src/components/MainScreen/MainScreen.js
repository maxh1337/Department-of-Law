import './MainScreen.css'
import p0 from '../../images/p0.jpg'
import { Link, Redirect } from 'react-router-dom'


function MainScreen({GoNext}){
    return(
        <div className='App'>
        <div>
            <img width="640" height="542" src={p0} alt="p0"></img>
            <div className="Buttons">
                <Link to='/start' className='linkButton' onClick={GoNext}>Дальше</Link>
            </div>
        </div>
        </div>
    );
}
export default MainScreen;


