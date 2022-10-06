import './SecondScreen.css'
import p1 from '../../images/p1.jpg'


function MainScreen(){
    return(
        <div className='App'>
        <div>
            <img width="640" height="542" src={p1} alt="p0"></img>
            <div className="Buttons">
                <a data-to-page="newgame" className="shkaf" style={{ position: 'absolute', top: '45px', left: 'calc(50% - 150px)', width: '295px', height: '70px', color: 'white',}}></a>
                <a data-to-page="continue" className="shkaf" style={{ position: 'absolute', top: '126px', left: 'calc(50% - 150px)', width: '295px', height: '60px', color: 'white',}}></a>
                <a data-to-page="save" className="shkaf" style={{ position: 'absolute', top: '200px', left: 'calc(50% - 150px)', width: '295px', height: '60px', color: 'white',}}></a>
                <a data-to-page="download" className="shkaf" style={{ position: 'absolute', top: '270px', left: 'calc(50% - 150px)', width: '295px', height: '60px', color: 'white',}}></a>
                <a data-to-page="exit" className="shkaf" href='/' style={{ position: 'absolute', top: '345px', left: 'calc(50% - 150px)', width: '295px', height: '60px', color: 'white',}}></a>
                <a data-to-page="about game" className="shkaf" style={{ position: 'absolute', top: '416px', left: 'calc(50% - 150px)', width: '295px', height: '70px', color: 'white',}}></a>
            </div>
        </div>
        </div>
    );
}
export default MainScreen;