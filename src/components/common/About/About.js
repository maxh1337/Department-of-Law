import about from "../../../images/информация-об-игре.webp";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img src={about} width="640px" height="542px" alt="about" />
      <div className="Buttons">
        <button className="linkButton" onClick={() => navigate("/start")}>
          Назад
        </button>
      </div>
    </div>
  );
};

export default About;
