import {useNavigate} from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e62 from "../../../images/PART 3/e62.webp";

const E62 = () => {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/e63");
    };
    return (
        <div>
            <CriminalCase/>
            <img src={e62} width="640px" height="542px" alt="e53"/>
            <div className="Buttons">
                <button className="linkButton" onClick={nextPage}>
                    Дальше
                </button>
            </div>
        </div>
    );
};

export default E62;