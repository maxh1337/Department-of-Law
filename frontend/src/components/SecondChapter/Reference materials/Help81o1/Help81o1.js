import i81o1 from "../../../../images/PART 2/справочный материал/Кадр 81.1спр.png";
import { useNavigate } from "react-router-dom";

const Help81o1 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i81");
  };
  return (
    <div>
      <img src={i81o1} width="640px" height="542px" alt="i81o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help81o1;
