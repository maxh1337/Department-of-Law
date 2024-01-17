import React from "react";
import Criminal from "../../ui/criminal-case/criminal-case";
import i90 from "../../../images/PART 2/i90.webp";
import Error from "../../ui/error/error";
import i90901 from "../../../images/PART 2/i90 90.1.webp";
import { Navigate } from "react-router-dom";

class I90 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderMap: {},
      error: false,
      redirect: false,
      redirect2: false,
    };
    const nextValue = Math.max(...Object.values(this.state.orderMap), 0) + 1;
    this.nextValue = nextValue;
    this.error = this.state.error;
  }

  toggleOrderMap = (e) => {
    const orderValue = +e.currentTarget.dataset.orderValue;
    const nextValue = Math.max(...Object.values(this.state.orderMap), 0) + 1;

    if (orderValue === 1 && Object.keys(this.state.orderMap).length === 0) {
      console.log("Work");
    } else if (
      orderValue === 2 &&
      Object.keys(this.state.orderMap).length === 1
    ) {
      console.log("Work");
    } else if (
      orderValue === 3 &&
      Object.keys(this.state.orderMap).length === 2
    ) {
      console.log("Work");
    } else if (
      orderValue === 4 &&
      Object.keys(this.state.orderMap).length === 3
    ) {
      this.setState({
        redirect: true,
      });
      console.log("Work");
    } else {
      this.setState({
        error: true,
      });
      return null;
    }

    const newOrderMap = { ...this.state.orderMap };
    if (this.state.orderMap[orderValue]) {
      const currentOrder = this.state.orderMap[orderValue];
      Object.keys(newOrderMap).map((key) => {
        if (newOrderMap[key] > currentOrder) {
          newOrderMap[key] -= 1;
        }
        return null;
      });
      delete newOrderMap[orderValue];
    } else {
      newOrderMap[orderValue] = nextValue;
    }
    this.setState({ orderMap: newOrderMap });
  };

  render() {
    return this.state.redirect === false ? (
      this.state.error === false ? (
        <div>
          <Criminal />
          <img src={i90} alt="i90" width="640px" height="542px" />
          <div
            data-order-value="2"
            onClick={this.toggleOrderMap}
            className={
              "order-cloud" + (this.state.orderMap[2] ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 124,
              left: "calc(50% - 305px)",
              width: 373,
              height: 80,
            }}
          >
            {this.state.orderMap[2] ? this.state.orderMap[2] : this.nextValue}
          </div>
          <div
            data-order-value="3"
            onClick={this.toggleOrderMap}
            className={
              "order-cloud" + (this.state.orderMap[3] ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 220,
              left: "calc(50% + -90px)",
              width: 350,
              height: 70,
            }}
          >
            {this.state.orderMap[3] ? this.state.orderMap[3] : this.nextValue}
          </div>
          <div
            data-order-value="1"
            onClick={this.toggleOrderMap}
            className={
              "order-cloud" + (this.state.orderMap[1] ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 300,
              left: "calc(50% + -310px)",
              width: 340,
              height: 80,
            }}
          >
            {this.state.orderMap[1] ? this.state.orderMap[1] : this.nextValue}
          </div>
          <div
            data-order-value="4"
            onClick={this.toggleOrderMap}
            className={
              "order-cloud" + (this.state.orderMap[4] ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 380,
              left: "calc(50% + -90px)",
              width: 350,
              height: 70,
            }}
          >
            {this.state.orderMap[4] ? this.state.orderMap[4] : this.nextValue}
          </div>
        </div>
      ) : this.state.redirect2 === false ? (
        <Error // 90.1
          loaded="true"
          image={i90901}
          onClick1={() => {
            this.setState({ error: false });
          }}
          button1="Понятно"
          newButton={
            <button
              onClick={() => {
                this.setState({ redirect2: true });
              }}
            >
              Не понятно
            </button>
          }
          button2style={{ display: "none" }}
        />
      ) : (
        <Navigate to="/h90" />
      )
    ) : (
      <Navigate to="/i91" />
    );
  }
}

export default I90;
