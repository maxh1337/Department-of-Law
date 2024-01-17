import i92o1 from "../../../../images/PART 2/справочный материал/Кадр 92.1спр.png";
import { useNavigate } from "react-router-dom";

const Help92o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i92");
  };
  return (
    <div>
      <img src={i92o1} width="640px" height="542px" alt="i92o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help92o1;
