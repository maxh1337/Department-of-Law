import i93 from "../../../../images/PART 2/справочный материал/Кадр 93спр.png";
import { useNavigate } from "react-router-dom";

const Help93 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i93");
  };
  return (
    <div>
      <img src={i93} width="640px" height="542px" alt="i93" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help93;
