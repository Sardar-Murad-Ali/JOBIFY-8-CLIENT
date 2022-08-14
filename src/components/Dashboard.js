
import React from 'react'

const Dashboard = () => {
  React.useEffect(()=>{
    async function nam(){
      let data=await fetch("/api/v1/auth",{name:"ssa",email:"saradr@gmail.com",password:"xsdscs"})
      let res=await data.json()
      console.log(res)
    }
    nam()
  },[])
  return (

    <div>Dash</div>
  )
}

export default Dashboard
