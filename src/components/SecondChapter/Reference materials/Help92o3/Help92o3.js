import i92o3 from "../../../../images/PART 2/справочный материал/Кадр 92.3спр.png";
import { useNavigate } from "react-router-dom";

const Help92o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i92");
  };
  return (
    <div>
      <img src={i92o3} width="640px" height="542px" alt="i92o3" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help92o3;
