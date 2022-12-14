import "./MainScreen.css";
import p0 from "../../../images/p0.webp";
import { useNavigate } from "react-router-dom";

function MainScreen({ GoNext }) {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/start");
  };

  return (
    <div>
      <img width="640" height="542" src={p0} alt="p0"></img>
      <div className="Buttons">
        <button onClick={nextPage} className="linkButton">
          Дальше
        </button>
      </div>
    </div>
  );
}
export default MainScreen;
