import CriminalCase from "../../ui/criminal-case/criminal-case";
import e66 from "../../../images/PART 3/e66.webp";
import {useNavigate} from "react-router-dom";

const E66 = () => {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate("/");
    };
    return (
        <div>
            <CriminalCase/>
            <img src={e66} width="640px" height="542px" alt="e53"/>
            <div className="Buttons">
                <button className="linkButton" onClick={nextPage}>
                    Вернуться в меню
                </button>
            </div>
        </div>
    );
};

export default E66;