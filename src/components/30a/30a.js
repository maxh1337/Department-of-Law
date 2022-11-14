import React from "react";
import { Navigate } from "react-router-dom";
import p30а from "../../images/p30а.webp"
import Criminal from "../ui/criminal-case/criminal-case"
import Error from "../error/error";
import styles from './30a.module.css'
const step = JSON.parse(localStorage.getItem("step"));
if (step !== 17) { localStorage.setItem("step", 17)};


class ThirtyA extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            multiSet: new Set(),
            orderMap: {},
            redirect: false,
            error: false
        }
    }
    toggleMultiSet = (e) => {
        const value = +e.currentTarget.dataset.multiValue;
        const cloneSet = new Set(this.state.multiSet);
        if (cloneSet.has(value)) {
            cloneSet.delete(value);
        } else {
            cloneSet.add(value);
        }
        this.setState({multiSet: cloneSet});

        if (cloneSet.size === 4) {
            this.setState({
                multiSet: new Set(),
                redirect: true
            });
        }
    }
    render(){
        return(
            (this.state.redirect === false) ?
            (this.state.error === false) ?
            <div className={styles.mainDiv}>
                <Criminal/>
                <img width="640px" height="542px" src={p30а}  alt="p30a"/>
                <div data-multi-value="1" onClick={this.toggleMultiSet}  className={"multiple-cloud" + (this.state.multiSet.has(1) ? ' selected' : '')} style={{position: 'absolute', top: 1, left: 'calc(50% - 320px)', width: 50, height: 66 }}>&nbsp;</div>
                <div data-multi-value="2" onClick={this.toggleMultiSet}  className={"multiple-cloud" + (this.state.multiSet.has(2) ? ' selected' : '')} style={{position: 'absolute', top: 210, left: 'calc(50% - 320px)', width: 50, height: 75}}>&nbsp;</div>
                <div data-multi-value="3" onClick={this.toggleMultiSet}  className={"multiple-cloud" + (this.state.multiSet.has(3) ? ' selected' : '')} style={{position: 'absolute', top: 330, left: 'calc(50% - 320px)', width: 50, height: 85}}>&nbsp;</div>
                <div data-multi-value="4" onClick={this.toggleMultiSet}  className={"multiple-cloud" + (this.state.multiSet.has(4) ? ' selected' : '')} style={{position: 'absolute', top: 430, left: 'calc(50% - 320px)', width: 50, height: 75}}>&nbsp;</div>
                <div onClick={() => {this.setState({error: true})}} className={"multiple-cloud"} style={{position: 'absolute', top: 1, left: 'calc(50% - 0px)', width: 50, height: 75}}>&nbsp;</div>
                <div onClick={() => {this.setState({error: true})}} className={"multiple-cloud"} style={{position: 'absolute', top: 210, left: 'calc(50% - 0px)', width: 50, height: 85}}>&nbsp;</div>
                <div onClick={() => {this.setState({error: true})}} className={"multiple-cloud"} style={{position: 'absolute', top: 330, left: 'calc(50% - 0px)', width: 50, height: 75}}>&nbsp;</div>
                <div onClick={() => {this.setState({error: true})}} className={"multiple-cloud"} style={{position: 'absolute', top: 430, left: 'calc(50% - 0px)', width: 50, height: 75}}>&nbsp;</div>             
            </div>
            : <Error text="Да... А протокол ты составлять так и не научился" button1="назад" button2style={{display: "none"}} onClick1={() => {this.setState({error: false})}}/>
            : <Navigate to="/31"/>
        )
    }
}

export default ThirtyA;