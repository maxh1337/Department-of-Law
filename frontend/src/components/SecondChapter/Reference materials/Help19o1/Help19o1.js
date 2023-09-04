import i19o1 from "../../../../images/PART 2/справочный материал/Кадр 19спр.png";
import { useNavigate } from "react-router-dom";

const Help19o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i19");
  };
  return (
    <div>
      <img src={i19o1} width="640px" height="542px" alt="i19o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help19o1;
