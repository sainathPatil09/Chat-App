import React from 'react'
import Search from './Search'
import Users from './Users'
import Logout from './Logout'

const Left = () => {
  return (
    <>
    <div className='bg-slate-800  w-[30%]'>
      <Search/>
      <div  className='hide-scrollbar overflow-y-auto' style={{minHeight:"calc(92vh - 10vh)"}}>

      <Users/>
      </div>
      <Logout/>
    </div>
    </>
  )
}

export default Left
