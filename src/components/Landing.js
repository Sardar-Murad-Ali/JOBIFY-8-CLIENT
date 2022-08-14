import React from "react";
import "./Landing.css"
import logo from '../images/logo.svg'
import main from "../images/main.svg"
import {Link} from "react-router-dom"
export default function Landing(){
    return(

    <div className="landing">
        <img alt="ima" src={logo}/>
        <div className="flex-content">


        <div className="content">
            <h1>Job <span>Tracking </span> App</h1>
            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
            <Link to="/register" className="btn">Register/Login</Link>
        </div>
            <div className="image">
                    <img alt="" src={main}/>
            </div>
        
        
        </div>
    </div>
        )
}

