import React from 'react'
import "./Alert.css"
import  {useGlobalContext} from "../context/appContext"

export default function Alert () {
  let {showAlert,alertType,alertText}=useGlobalContext()
  return (
    <div className={`alert alert-${alertType}`}>
        <p>{alertText}</p>
    </div>
  )
}
 