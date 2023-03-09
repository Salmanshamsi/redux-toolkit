import React, { useState } from 'react'
import "../../App.css"
import { fakeData } from '../../api/userApi'; 
import UserData from './userData/userData';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,clearAll } from '../../redux/slices/userSlice';

const User = () => {

    const dispatch = useDispatch()

    const onAddHandler = (payload) => {
        dispatch(addUser(payload));
    }
 
    const ClaerAllHandler = () => {
      dispatch(clearAll())
    }

     

  return (
    <div className='App-header'>
        <div className="name">User's List</div>
        <ul>
            <UserData/>
        </ul>
        <button className='btn btn-primary' onClick={()=>{onAddHandler(fakeData())}}  >Add User</button><br />
        <button className='btn btn-primary' onClick={()=>{ClaerAllHandler()}} >Clear All</button>
    </div>
  )
}

export default User