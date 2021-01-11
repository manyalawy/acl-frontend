import React, { useState, useEffect } from "react"
import axios from 'axios'
export default function ViewDayOffAll() {
  const [dayOffAll, setDayOffAll]= useState('')
  const token = localStorage.getItem("user");
  useEffect(() => {  
        axios({
          url: 'localhost:8080/headOfDepartment/viewDayOffAll',
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
            setDayOffAll(res)
          })
          .catch((error) => {
            console.log(error)
          }) 
    });

  return (
    <div>
        <div>
    <text style={{marginTop:'3vw', marginLeft:'1vw', fontWeight:'bold', fontSize:'2vw'}}>
      Id:
    </text> 
 <text style={{marginTop:'3vw', marginLeft:'0.7vw', fontWeight:'bold', fontSize:'2vw', fontColor:'red'}}>
     {dayOffAll.id}
 </text>
 </div>

         <div style={{marginTo:'6vw'}}>
    <text style={{ marginLeft:'1vw', fontWeight:'bold', fontSize:'2vw'}}>
      Day Off :
    </text> 
 <text style={{marginTop:'3vw', marginLeft:'0.7vw', fontWeight:'bold', fontSize:'2vw', fontColor:'red'}}>
         {dayOffAll.day_off}
 </text>
 </div>  
  </div>
  )
}