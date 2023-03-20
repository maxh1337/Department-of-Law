import "./SecondScreen.css";
import p1 from "../../../images/p1new.png";
import { Link } from "react-router-dom";

function MainScreen() {
  return (
    <div>
      <img width="640" height="542" src={p1} alt="p0"></img>
      <div className="Buttons">
        <Link
          to="/choosecharacter"
          data-to-page="choosecharacter"
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
        <a
          href="https://docs.google.com/document/d/1BA5fbrDL4g9TBYQvIV49UUDFfYrTUYn_/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
          target="_blank"
          data-to-page="about game"
          className="buttonToChoose1"
          style={{
            position: "absolute",
            top: "415px",
            left: "calc(50% - 155px)",
            width: "320px",
            height: "70px",
            color: "white",
          }}
        ></a>
      </div>
    </div>
  );
}

export default MainScreen;
