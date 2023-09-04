import i91o2 from "../../../../images/PART 2/справочный материал/Кадр 91.2спр.png";
import { useNavigate } from "react-router-dom";

const Help91o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i91");
  };
  return (
    <div>
      <img src={i91o2} width="640px" height="542px" alt="i91o2" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help91o2;
