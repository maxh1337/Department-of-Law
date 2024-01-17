import {useNavigate} from "react-router-dom";
import CriminalCase from "../../ui/criminal-case/criminal-case";
import e64 from "../../../images/PART 3/e64.webp";

const E64 = () => {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/e65");
    };
    return (
        <div>
            <CriminalCase/>
            <img src={e64} width="640px" height="542px" alt="e64"/>
            <div className="Buttons">
                <button className="linkButton" onClick={nextPage}>
                    Дальше
                </button>
            </div>
        </div>
    );
};

export default E64;