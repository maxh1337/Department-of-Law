import CriminalCase from "../../ui/criminal-case/criminal-case";
import e65 from "../../../images/PART 3/e65.webp";
import {useNavigate} from "react-router-dom";

const E65 = () => {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/e66");
    };
    return (
        <div>
            <CriminalCase/>
            <img src={e65} width="640px" height="542px" alt="e53"/>
            <div className="Buttons">
                <button className="linkButton" onClick={nextPage}>
                    Дальше
                </button>
            </div>
        </div>
    );
};

export default E65;