import i18 from "../../../images/PART 2/i18.webp";
import React from "react";
import Criminal from "../../ui/criminal-case/criminal-case";
import Error from "../../ui/error/error";
import { Navigate, useNavigate } from "react-router-dom";
import i18181 from "../../../images/PART 2/i18 18.1.webp";

class I18 extends React.Component {
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

    if (orderValue === 5) {
      if (Object.keys(this.state.orderMap).length < 4) {
        this.setState({
          error: true,
        });
        console.log("Ошибочка");
      } else {
        this.setState({
          redirect: true,
        });
      }
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
          <img src={i18} alt="i18" width="640px" height="542px" />
          <div
            data-order-value="1"
            onClick={this.toggleOrderMap}
            className={
              "order-cloud" + (this.state.orderMap[1] ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 84,
              left: "calc(50% - 305px)",
              width: 242,
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
              top: 87,
              left: "calc(50% + 45px)",
              width: 210,
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
              top: 179,
              left: "calc(50% + -312px)",
              width: 350,
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
              top: 274,
              left: "calc(50% + -290px)",
              width: 232,
              height: 80,
            }}
          >
            {this.state.orderMap[4] ? this.state.orderMap[4] : this.nextValue}
          </div>
          <div
            data-order-value="5"
            onClick={this.toggleOrderMap}
            className={
              "order-cloud" + (this.state.orderMap[5] ? " selected" : "")
            }
            style={{
              position: "absolute",
              top: 367,
              left: "calc(50% + -312px)",
              width: 350,
              height: 70,
            }}
          >
            {this.state.orderMap[5] ? this.state.orderMap[5] : this.nextValue}
          </div>
        </div>
      ) : this.state.redirect2 === false ? (
        <Error // 18.1
          loaded="true"
          image={i18181}
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
        <Navigate to="/h18" />
      )
    ) : (
      <Navigate to="/i19" />
    );
  }
}

export default I18;
