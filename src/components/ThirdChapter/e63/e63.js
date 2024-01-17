import CriminalCase from "../../ui/criminal-case/criminal-case";
import e63 from "../../../images/PART 3/e63.webp";
import {Navigate, useNavigate} from "react-router-dom";

const E63 = () => {
    const falseWay28 = JSON.parse(localStorage.getItem('e28'))
    const falseWay46 = JSON.parse(localStorage.getItem("e46"));
    const falseWay54 = JSON.parse(localStorage.getItem("e54"));


    return (
        <div>
            <CriminalCase/>
            <img src={e63} width="640px" height="542px" alt="e53"/>
            {(falseWay28 === true || falseWay46 === true || falseWay54 === true) &&
                <Navigate to='/e65' replace={true}/>}
        </div>
    );
};

export default E63;