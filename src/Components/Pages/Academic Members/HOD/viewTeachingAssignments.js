import React, { useState, useEffect } from "react"
import axios from 'axios'


export default function ViewTeachingAssigments() {
  const [teachingAssignments, setTeachingAssignments]= useState('')
  const token = localStorage.getItem("user");
  useEffect(() => {  
        axios({
          url: 'localhost:8080/headOfDepartment/viewAssignments',
          method: 'POST',
          headers: {
            token: token,
          },
          data: {
            id: "ac-5"
          },
        })
          .then((res) => {
            console.log(res) 
            setTeachingAssignments(res)
          })
          .catch((error) => {
            console.log(error)
          }) 
    });

  return (
    <div>
        <div>
    <text style={{marginTop:'3vw', marginLeft:'1vw', fontWeight:'bold', fontSize:'2vw'}}>
     Staff Member:
    </text> 
 <text style={{marginTop:'3vw', marginLeft:'0.7vw', fontWeight:'bold', fontSize:'2vw', fontColor:'red'}}>
{teachingAssignments.id}
 </text>
 </div>

         <div style={{marginTo:'6vw'}}>
    <text style={{ marginLeft:'1vw', fontWeight:'bold', fontSize:'2vw'}}>
     Assigned Slots :
    </text> 
 <text style={{marginTop:'3vw', marginLeft:'0.7vw', fontWeight:'bold', fontSize:'2vw', fontColor:'red'}}>
{teachingAssignments.slots}
 </text>
 </div>  
  </div>
  )
}