import React from "react";
import { Navigate } from "react-router-dom";
import p31 from "../../../images/p31.webp";
import p31б from "../../../images/p31б.webp";
import Criminal from "../../ui/criminal-case/criminal-case";
import Error from "../../ui/error/error";
import { OsmotrMesta, resultObhoda } from "../../ui/allFiles";

const step = JSON.parse(localStorage.getItem("step"));
if (step !== 18) {
  localStorage.setItem("step", 18);
}

class Thirtyone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiSet: new Set(),
      orderMap: {},
      redirect: false,
      error: false,
      goNext: false,
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

    if (cloneSet.size === 5) {
      this.setState({
        multiSet: new Set(),
        redirect: true,
      });
    }
  };

  render() {
    return this.state.goNext === false ? (
      this.state.redirect === false ? (
        this.state.error === false ? (
          <div>
            <Criminal />
            <img width="640px" height="542px" src={p31} alt="p31" />
            <div
              data-multi-value="1"
              onClick={this.toggleMultiSet}
              className={
                "multiple-cloud" +
                (this.state.multiSet.has(1) ? " selected" : "")
              }
              style={{
                position: "absolute",
                top: 1,
                left: "calc(50% - 130px)",
                width: 140,
                height: 66,
              }}
            >
              &nbsp;
            </div>
            <div
              data-multi-value="2"
              onClick={this.toggleMultiSet}
              className={
                "multiple-cloud" +
                (this.state.multiSet.has(2) ? " selected" : "")
              }
              style={{
                position: "absolute",
                top: 1,
                left: "calc(50% - -30px)",
                width: 130,
                height: 75,
              }}
            >
              &nbsp;
            </div>
            <div
              data-multi-value="3"
              onClick={this.toggleMultiSet}
              className={
                "multiple-cloud" +
                (this.state.multiSet.has(3) ? " selected" : "")
              }
              style={{
                position: "absolute",
                top: 150,
                left: "calc(50% - 140px)",
                width: 130,
                height: 85,
              }}
            >
              &nbsp;
            </div>
            <div
              data-multi-value="5"
              onClick={this.toggleMultiSet}
              className={
                "multiple-cloud" +
                (this.state.multiSet.has(5) ? " selected" : "")
              }
              style={{
                position: "absolute",
                top: 285,
                left: "calc(50% - 140px)",
                width: 130,
                height: 85,
              }}
            >
              &nbsp;
            </div>
            <div
              data-multi-value="4"
              onClick={this.toggleMultiSet}
              className={
                "multiple-cloud" +
                (this.state.multiSet.has(4) ? " selected" : "")
              }
              style={{
                position: "absolute",
                top: 150,
                left: "calc(50% - -10px)",
                width: 130,
                height: 75,
              }}
            >
              &nbsp;
            </div>
            <div
              onClick={() => {
                this.setState({ error: true });
              }}
              className="multiple-cloud"
              style={{
                position: "absolute",
                top: 24,
                left: "calc(50% - 270px)",
                width: 130,
                height: 75,
              }}
            >
              &nbsp;
            </div>
            <div
              onClick={() => {
                this.setState({ error: true });
              }}
              className="multiple-cloud"
              style={{
                position: "absolute",
                top: 160,
                left: "calc(50% - 270px)",
                width: 130,
                height: 85,
              }}
            >
              &nbsp;
            </div>
            <div
              onClick={() => {
                this.setState({ error: true });
              }}
              className="multiple-cloud"
              style={{
                position: "absolute",
                top: 310,
                left: "calc(50% - 260px)",
                width: 130,
                height: 85,
              }}
            >
              &nbsp;
            </div>
            <div
              onClick={() => {
                this.setState({ error: true });
              }}
              className="multiple-cloud"
              style={{
                position: "absolute",
                top: 30,
                left: "calc(50% - -170px)",
                width: 70,
                height: 75,
              }}
            >
              &nbsp;
            </div>
            <div
              onClick={() => {
                this.setState({ error: true });
              }}
              className="multiple-cloud"
              style={{
                position: "absolute",
                top: 170,
                left: "calc(50% - -150px)",
                width: 185,
                height: 75,
              }}
            >
              &nbsp;
            </div>
          </div>
        ) : (
          <Error
            text="Ты не для Instagram фотографии выбираешь"
            button1="назад"
            button2style={{ display: "none" }}
            onClick1={() => {
              this.setState({ error: false });
            }}
          />
        )
      ) : (
        <div>
          <Criminal />
          <img width="640px" height="542px" src={p31б} alt="p31б" />
          <div className="Buttons">
            <button
              onClick={() => {
                this.setState({ goNext: true });
                const documents = JSON.parse(localStorage.getItem("documents"));
                const newDocuments = [...documents, OsmotrMesta];
                localStorage.setItem("documents", JSON.stringify(newDocuments));
              }}
            >
              Вперёд
            </button>
          </div>
        </div>
      )
    ) : (
      <Navigate to="/32" />
    );
  }
}

export default Thirtyone;
