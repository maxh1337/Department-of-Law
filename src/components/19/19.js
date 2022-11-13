import React from "react";
import {Navigate} from "react-router-dom";
import Criminal from "../ui/criminal-case/criminal-case";
import Error from "../error/error";
import p17 from "../../images/p17.jpg"


class Nineteen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orderMap: {},
            error: false,
            redirect: false
        }
        const nextValue = Math.max(...Object.values(this.state.orderMap), 0) + 1;
        this.nextValue = nextValue;
        this.error = this.state.error;
    }

    toggleOrderMap = (e) => {
        const orderValue = +e.currentTarget.dataset.orderValue;
        const nextValue = Math.max(...Object.values(this.state.orderMap), 0) + 1;
    
        if (orderValue === 1) {
            if (Object.keys(this.state.orderMap).length < 4) {
                this.setState({
                    error: true
                });
                console.log("Ошибочка")
            } else {
                this.setState({
                    redirect: true
                })
            }
            return;
        };
        const newOrderMap = {...this.state.orderMap};
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
        this.setState({orderMap: newOrderMap});
    }
    
    render(){
        return(
            (this.state.redirect === false) ?
            (this.state.error === false) ? 
            <div>
                <Criminal/>
                <img src={p17} alt="15" width="640px" height="542px"/>
                <div data-order-value="1" onClick={this.toggleOrderMap} className={"order-cloud" + (this.state.orderMap[1] ? ' selected' : '')} style={{position: 'absolute', top: 53, left: 'calc(50% - 285px)', width: 242, height: 70}}>{this.state.orderMap[1] ? this.state.orderMap[1] : this.nextValue}</div>
                <div data-order-value="2" onClick={this.toggleOrderMap} className={"order-cloud" + (this.state.orderMap[2] ? ' selected' : '')} style={{position: 'absolute', top: 37, left: 'calc(50% + 45px)', width: 210, height: 70}}>{this.state.orderMap[2] ? this.state.orderMap[2] : this.nextValue}</div>
                <div data-order-value="3" onClick={this.toggleOrderMap} className={"order-cloud" + (this.state.orderMap[3] ? ' selected' : '')} style={{position: 'absolute', top: 165, left: 'calc(50% - 88px)', width: 202, height: 70}}>{this.state.orderMap[3] ? this.state.orderMap[3] : this.nextValue}</div>
                <div data-order-value="4" onClick={this.toggleOrderMap} className={"order-cloud" + (this.state.orderMap[4] ? ' selected' : '')} style={{position: 'absolute', top: 274, left: 'calc(50% - 255px)', width: 232, height: 80}}>{this.state.orderMap[4] ? this.state.orderMap[4] : this.nextValue}</div>
                <div data-order-value="5" onClick={this.toggleOrderMap} className={"order-cloud" + (this.state.orderMap[5] ? ' selected' : '')} style={{position: 'absolute', top: 290, left: 'calc(50% + 73px)', width: 210, height: 70}}>{this.state.orderMap[5] ? this.state.orderMap[5] : this.nextValue}</div>
            </div>
            : <Error text="Ты хочешь раскрыть преступление по горячим следам?" button1="назад" button2style={{display: "none"}} onClick1={() => {this.setState({error: false})}}/>
            : <Navigate to="/20"/>
        )
    }
}
export default Nineteen;