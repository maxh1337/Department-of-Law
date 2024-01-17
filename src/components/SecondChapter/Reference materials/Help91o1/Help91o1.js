import i91o1 from "../../../../images/PART 2/справочный материал/Кадр 91.1спр.png";
import { useNavigate } from "react-router-dom";

const Help91o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i91");
  };
  return (
    <div>
      <img src={i91o1} width="640px" height="542px" alt="i91o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help91o1;
