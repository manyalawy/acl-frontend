import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { useDispatch, useSelector } from 'react-redux'
//import { useHistory } from 'react-router'

export default function ViewCoverage() {
  //const id = useSelector((state) => state.id)
  //const dispatch = useDispatch()
  //const history = useHistory()
  const token = localStorage.getItem("user");
  const [coverage, setCoverage] = useState('')

  useEffect(() => {
    axios({
      url:'localhost:8080/courseInstructor/viewCourseCoverage ' ,
      method: 'POST',
      headers: {
        token: token,
      },
      data: {
        academicMemberID:"ac44", 
        status:"assigned" 
      },
    })
      .then((res) => {
        console.log(res)
        setCoverage(res)
      })
      .catch((error) => {
        console.log(error)    
      }) 
  }, [])

  return (
    <div>
      <text style={{marginTop:'3vw', marginLeft:'1vw', fontWeight:'bold', fontSize:'2vw'}}>
        Course Coverage:
      </text> 
   <text style={{marginTop:'3vw', marginLeft:'0.7vw', fontWeight:'bold', fontSize:'2vw', fontColor:'red'}}>
   {coverage}
   </text> 
    </div>
  )
}