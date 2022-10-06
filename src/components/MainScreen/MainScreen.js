import './MainScreen.css'
import p0 from '../../images/p0.jpg'


function MainScreen(){
    return(
        <div>
            <img width="640" height="542" src={p0} ></img>
            <div class="Buttons">
                <button>Дальше</button>
            </div>
        </div>
    );
}
export default MainScreen;