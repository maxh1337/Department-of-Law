import i92o2 from "../../../../images/PART 2/справочный материал/Кадр 92.2спр.png";
import { useNavigate } from "react-router-dom";

const Help92o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i92");
  };
  return (
    <div>
      <img src={i92o2} width="640px" height="542px" alt="i92o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help92o2;
