import "./SecondScreen.css";
import p1 from "../../../images/p1new.webp";
import { Link } from "react-router-dom";

function MainScreen() {
  return (
    <div>
      <img width="640" height="542" src={p1} alt="p0"></img>
      <div className="Buttons">
        <Link
          to="/choosecharacter"
          className="buttonToChoose1"
          style={{
            position: "absolute",
            top: "336px",
            left: "calc(50% - 155px)",
            width: "322px",
            height: "70px",
            color: "white",
          }}
        ></Link>
        <Link
          to="/about"
          className="buttonToChoose1"
          style={{
            position: "absolute",
            top: "415px",
            left: "calc(50% - 155px)",
            width: "320px",
            height: "70px",
            color: "white",
          }}
        ></Link>
      </div>
    </div>
  );
}

export default MainScreen;
