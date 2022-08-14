import React, { useState, useContext } from 'react';
import { DISPLAY_ALERT } from './actions';
import reducer from "./reducer"
// import axios from 'axios';
import { CLEAR_ALERT,REGISTER_USER_BEGIN,REGISTER_USER_ERROR
,REGISTER_USER_SUCCESS } from './actions';
import axios from 'axios';
const AppContext = React.createContext();

export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user:null,
    Userlocation:"",
    token:null,
    joblocation:""
  }

  console.log(initialState)
  
  
  
  const AppProvider = ({ children }) => {
    let [state,dispatch]=React.useReducer(reducer,initialState)    
    function displayalert(){
      dispatch({type:DISPLAY_ALERT})
      clearalert()
    }

    function clearalert(){
    setTimeout(() => {
        dispatch({type:CLEAR_ALERT})
      }, 3000);
      }

      
        const registeruser=async (user)=>{
          console.log(user)
            // console.log(user)
            dispatch({type:REGISTER_USER_BEGIN})
            try {
              let response=await axios.post("/api/v1/auth/register",user)
              // console.log(response.data)
              dispatch({type:REGISTER_USER_SUCCESS
              ,
              payload:{
                user:response.data.user,
                location:response.data.location,
                token:response.data.token,
              }
            }
            )
            clearalert()
            } catch (error) {
              console.log(error)
              dispatch({type:REGISTER_USER_ERROR,
              payload:{
                msg:error.response.data.msg
              }})
              clearalert()
            }

        }
  return (
    <AppContext.Provider
      value={
      {
        ...state,
        displayalert,
        clearalert,
        registeruser
      }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };


