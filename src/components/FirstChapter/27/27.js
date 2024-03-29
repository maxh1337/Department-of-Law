import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import p27 from "../../../images/p27.png";
import Error from "../../ui/error/error";
import CriminalCase from "../../ui/criminal-case/criminal-case";

const step = JSON.parse(localStorage.getItem("step"));
if (step !== 12) {
  localStorage.setItem("step", 12);
}

class Twentyseven extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiSet: new Set(),
      orderMap: {},
      redirect: false,
      error: false,
    };
  }

  toggleMultiSet = (e) => {
    const value = +e.currentTarget.dataset.multiValue;
    const cloneSet = new Set(this.state.multiSet);
    if (cloneSet.has(value)) {
      cloneSet.delete(value);
    } else {
      cloneSet.add(value);
    }
    this.setState({ multiSet: cloneSet });
  };
  checkSet = () => {
    if (
      this.state.multiSet.has(2) &&
      this.state.multiSet.has(3) &&
      this.state.multiSet.size === 2
    ) {
      this.setState({
        redirect: true,
      });
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    return this.state.redirect === false ? (
      this.state.error === false ? (
        <div>
          <CriminalCase />
          <img width="640px" height="542px" src={p27} alt="p27" />
          <div className="Buttons">
            <button onClick={this.checkSet}>Дальше</button>
          </div>
          <div
            data-multi-value="1"
            onClick={this.toggleMultiSet}
            className={
              "multiple-cloud" + (this.state.multiSet.has(1) ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 65,
              left: "calc(50% - 250px)",
              width: 80,
              height: 75,
            }}
          >
            &nbsp;
          </div>
          <div
            data-multi-value="2"
            onClick={this.toggleMultiSet}
            className={
              "multiple-cloud" + (this.state.multiSet.has(2) ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: -5,
              left: "calc(50% - 135px)",
              width: 80,
              height: 90,
            }}
          >
            &nbsp;
          </div>
          <div
            data-multi-value="3"
            onClick={this.toggleMultiSet}
            className={
              "multiple-cloud" + (this.state.multiSet.has(3) ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: -5,
              left: "calc(50% - 20px)",
              width: 80,
              height: 75,
            }}
          >
            &nbsp;
          </div>
          <div
            data-multi-value="4"
            onClick={this.toggleMultiSet}
            className={
              "multiple-cloud" + (this.state.multiSet.has(4) ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 105,
              left: "calc(50% - -90px)",
              width: 80,
              height: 90,
            }}
          >
            &nbsp;
          </div>
          <div
            data-multi-value="5"
            onClick={this.toggleMultiSet}
            className={
              "multiple-cloud" + (this.state.multiSet.has(5) ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 45,
              left: "calc(50% - -210px)",
              width: 80,
              height: 90,
            }}
          >
            &nbsp;
          </div>
        </div>
      ) : (
        <Error
          text="Подумай!"
          onClick1={() => {
            this.setState({ error: false });
          }}
          button1="Понятно"
          newButton={
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1kAzG19Jx-eS4HIm5l_d3O4RJo4ZuntaT/edit?usp=share_link&ouid=103959558910814942921&rtpof=true&sd=true"
            >
              {" "}
              <button>Не понятно</button>
            </a>
          }
          button2style={{ display: "none" }}
        />
      )
    ) : (
      <Navigate to="/27b" />
    );
  }
}

export default Twentyseven;
