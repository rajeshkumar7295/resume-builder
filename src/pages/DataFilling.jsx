import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/core/dashboard/SideBar'
const DataFilling = () => {
  return (
    <div >
    <Sidebar/>
    <div className=" ">
      <div >
          <Outlet/>
      </div>
    </div>
  </div>
  )
}

export default DataFilling
