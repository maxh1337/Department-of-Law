import React from "react";
import p9a from "../../../images/error.webp";

class Error extends React.Component {
  render() {
    return (
      <div>
        <img
          width="640"
          height="542"
          src={this.props.loaded ? this.props.image : p9a}
          alt="p9а"
        ></img>
        <div className="error-text" id="2323">
          {this.props.text}
          <br />
          <br />
          <div className="buttons" style={this.props.styleButtons}>
            <button onClick={this.props.onClick1}>{this.props.button1}</button>
            <button
              style={this.props.button2style}
              onClick={this.props.onClick2}
            >
              {this.props.button2}
            </button>
            {this.props.newButton}
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
