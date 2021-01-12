import React, { useState, useEffect } from "react"
import axios from 'axios'

export default function ViewAttendanceRecord(props) {
  const [attendanceRecord, setAttendanceRecord]= useState('')
  const token = localStorage.getItem("user");

  useEffect(() => {
    axios
      .post("localhost:8080/hrMember/ViewAttendenceRecord", {
        headers: { token: token },
        body :{id : "hr-8"}
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          return;
        } else {
          const res = response.data;
          setAttendanceRecord({
             res
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
    <text style={{marginTop:'3vw', marginLeft:'1vw', fontWeight:'bold', fontSize:'2vw'}}>
     Attendace Record:
    </text> 
    <text style={{marginTop:'3vw', marginLeft:'0.7vw', fontWeight:'bold', fontSize:'2vw', fontColor:'red'}}>
    {attendanceRecord}
    </text>
    </div>
  )
}