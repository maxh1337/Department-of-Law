import Criminal from "../../ui/criminal-case/criminal-case";
import e56 from "../../../images/PART 3/e56.webp";
import Error from "../../ui/error/error";
import e56561 from "../../../images/PART 3/e56 56.1.webp";
import { Navigate } from "react-router-dom";
import React from "react";

class E56 extends React.Component {
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
    const length = Object.keys(this.state.orderMap).length;
    console.log(length + " " + Object.keys(this.state.orderMap));

    if (orderValue === 2 && length > 2) {
      this.setState({
        redirect: true,
      });
    }
    //4312 Правильная последовательность
    if (
      (orderValue !== 4 && length === 0) ||
      (orderValue !== 3 && length === 1) ||
      (orderValue !== 1 && length === 2) ||
      (orderValue !== 2 && length === 3)
    ) {
      this.setState({
        error: true,
      });
      return;
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
          <img src={e56} alt="i42" width="640px" height="542px" />
          <div
            data-order-value="1"
            onClick={this.toggleOrderMap}
            className={
              "order-cloud" + (this.state.orderMap[1] ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 190,
              left: "calc(50% - 305px)",
              width: 400,
              height: 70,
            }}
          >
            {this.state.orderMap[1] ? this.state.orderMap[1] : this.nextValue}
          </div>
          <div
            data-order-value="2"
            onClick={this.toggleOrderMap}
            className={
              "order-cloud" + (this.state.orderMap[2] ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 260,
              left: "calc(50% - 305px)",
              width: 444,
              height: 70,
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
              top: 340,
              left: "calc(50% - 305px)",
              width: 444,
              height: 70,
            }}
          >
            {this.state.orderMap[3] ? this.state.orderMap[3] : this.nextValue}
          </div>
          <div
            data-order-value="4"
            onClick={this.toggleOrderMap}
            className={
              "order-cloud" + (this.state.orderMap[4] ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 420,
              left: "calc(50% - 305px)",
              width: 444,
              height: 70,
            }}
          >
            {this.state.orderMap[4] ? this.state.orderMap[4] : this.nextValue}
          </div>
        </div>
      ) : this.state.redirect2 === false ? (
        <Error // 54.1
          loaded="true"
          image={e56561}
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
        <Navigate to="/he56o1" />
      )
    ) : (
      <Navigate to="/e57" />
    );
  }
}

export default E56;
