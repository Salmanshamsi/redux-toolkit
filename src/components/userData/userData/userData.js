import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../../redux/slices/userSlice';

const UserData = () => {

    const data = useSelector(state=>state?.user)
    const dispatch = useDispatch();

   const onDelHandler = (id) => {
    dispatch(removeUser(id))
   }


    console.log(data)

   const user = data.map((el,ind)=>{
     return <>
        <li key={ind} >{el}</li>
        <button  onClick={()=>{onDelHandler(ind)}}  className='btn btn-danger'>Delete</button>
        </>;
   })
    

  return (
    <div>
        {user} 
    </div>
  )
}

export default UserData