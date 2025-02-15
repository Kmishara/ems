import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  // useEffect(() => {
  //  setLocalStorage()
  // getLocalStorage()
   
  // },)
  // side stack m ek function chalane m help krta h

  const [user, setUser] = useState(null)
  const authData= useContext(AuthContext)
  useEffect(() => {
    if(authData){
    const loggedInUser = localStorage.getItem("loggedInUser")
    if(loggedInUser){
      setUser(loggedInUser.role)
    }
    }
    
  }, [authData])
  
  const handleLogin = (email,password)=>{
    if(email == 'admin@me.com'  && password == 123){
      setUser('admin')
      console.log(user)
      console.log("this is admin")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData && authData.employees.find((e)=>email == e.email && e.password == password)){
      setUser("employee")
      // console.log(user)
      // console.log("this is user")
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))

    }
    else{
      alert("Invalid credential")
    }
  }
  
 
  return (
   <>
   {!user ? <Login handleLogin={handleLogin} />: ''}
   {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard/> }
   {/* <EmployeeDashboard/> */}
   {/* <AdminDashboard /> */}
   </>
  )
}

export default App