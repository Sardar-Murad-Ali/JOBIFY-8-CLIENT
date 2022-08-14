import { act } from "react-dom/test-utils"
import { DISPLAY_ALERT } from "./actions"
import { CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_ERROR,REGISTER_USER_SUCCESS } from "./actions"

const reducer =(state,action)=>{
//   throw new Error (`no such action :${action.type}`)
  if(action.type===DISPLAY_ALERT){
      return{
          ...state,
          showAlert:true,
          alertText:"Please Provide All The Fields!",
          alertType:"danger"
      }
  }
  if(action.type===CLEAR_ALERT){
      return{
          ...state,
          showAlert:false,
          alertText:"",
          alertType:""
      }
  }

if(action.type===REGISTER_USER_BEGIN)
  return{
      ...state,
      
    }
    
    if(action.type===REGISTER_USER_SUCCESS){
      return{
        ...state,
        isLoading:false,
        user:action.payload.user,
        token:action.payload.token,
        Userlocation:action.payload.location,
        showAlert:true,
        alertType:"success",
        alertText:"You Have Registered Sucessfully"
    }
  }
  
  if(action.type===REGISTER_USER_ERROR){
    return{
        ...state,
        isLoading:false,
        alertType:"danger",
        alertText:action.payload.msg,
        showAlert:true
    }
  }
}

export default reducer