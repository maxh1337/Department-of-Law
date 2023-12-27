import e60o2 from "../../../../images/PART 3/Справочный материал/КАдр 60.2 спр_177.webp";
import { useNavigate } from "react-router-dom";

const Help60o2 = () => {
  const navigate = useNavigate();
  const Return = () => {
    navigate("/e60");
  };

  return (
    <div>
      <img src={e60o2} width="640px" height="542px" alt="e3o1" />
      <div className="Buttons">
        <button className="linkButton" onClick={Return}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default Help60o2;
