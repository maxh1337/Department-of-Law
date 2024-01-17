import i81o3 from "../../../../images/PART 2/справочный материал/Кадр 81.3спр.png";
import { useNavigate } from "react-router-dom";

const Help81o3 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/i81");
  };
  return (
    <div>
      <img src={i81o3} width="640px" height="542px" alt="i81o3" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help81o3;
