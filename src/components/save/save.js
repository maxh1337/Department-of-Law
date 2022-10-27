import React, { useState } from "react";
import { Navigate } from "react-router-dom";



class Save extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            goBack: false
        }
    }

    render(){
        return(
            (this.state.goBack === false) ?
            <div style={{color: "white"}}>
                <p>У вас нет сохраненной игры</p>
                <button onClick={() => {this.setState({goBack: true})}}>Вернуться назад</button>
            </div>
            : <Navigate to="/"/>
        )
    }
}
export default Save;