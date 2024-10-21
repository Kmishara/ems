import React from 'react'
import Header from '../others/Header'
import Create from '../others/Create'
import AllTask from '../others/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
   <Create/>
   <AllTask/>
    </div>
  )
}

export default AdminDashboard