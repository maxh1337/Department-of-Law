import vud1 from "../../../images/перед-коллажем-ВУД.webp";
import { useNavigate } from "react-router-dom";

const Vud1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src={vud1} width="640px" height="542px" alt="vud1" />
      <div className="Buttons">
        <button
          className="linkButton"
          onClick={() => navigate("/finisheduniversity")}
        >
          Далее
        </button>
      </div>
    </div>
  );
};

export default Vud1;
