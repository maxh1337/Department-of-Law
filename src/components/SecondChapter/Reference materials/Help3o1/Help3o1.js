import i3o1 from "../../../../images/PART 2/справочный материал/Кадр 3.1спр.png";
import { useNavigate } from "react-router-dom";

const Help3o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i3");
  };

  return (
    <div>
      <img src={i3o1} width="640px" height="542px" alt="i3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help3o1;
