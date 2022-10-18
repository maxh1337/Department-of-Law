import { useNavigate } from 'react-router-dom';
import p5 from '../../images/p5.jpg'


function FinishedUniversity(){
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/1")
    }

    return(
            <div>
            <img src={p5} width="640px" height="542px" alt='p5'/> 
                <div className="Buttons">
                    <button className='linkButton' onClick={nextPage}>Дальше</button>
                </div>
            </div>
    )
}
export default FinishedUniversity;