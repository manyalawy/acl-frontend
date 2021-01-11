import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'
// import { useHistory } from 'react-router'

export default function ViewSlots() {
  //const id = useSelector((state) => state.id)
  // const dispatch = useDispatch()
  // const history = useHistory()
  const [slots, setSlots] = useState('')
  const token = localStorage.getItem("user");

  useEffect(() => {
    // if (!dispatch(checkTokenExpired(history))) {
    axios({
      url:'localhost:8080/courseInstructor/viewSlotsAssignment' ,
      method: 'POST',
      headers: {
       token: token,
      },
      data: {
        id:"ac4" 
      },
    })
      .then((res) => {
        console.log(res)
        setSlots(res)
      
      })
      .catch((error) => {
        console.log(error)
      })
    // }
  }, [])

  return (
    <div>

    <text style={{marginTop:'3vw', marginLeft:'1vw', fontWeight:'bold', fontSize:'2vw'}}>
     Assigned Slots : 
    </text>
    <text  style={{marginTop:'3vw', marginLeft:'0.5vw', fontWeight:'bold', fontSize:'2vw'}}>
     {slots}
    </text> 
    
    </div>
  )
}