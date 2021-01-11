import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import {useHistory} from 'react-router'

export default function ViewAllReq() {
  const [requests, setRequests]= useState('')
  const history = useHistory()
  const requests1 =['req 1', 'req 2']
  const token = localStorage.getItem("user");
  const nav = () =>{
    history.push('/acceptReject')
  }
  useEffect(() => {  
        axios({
          url: 'localhost:8080/headOfDepartment/viewRequests',
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
            setRequests(res)
          })
          .catch((error) => {
            console.log(error)
          }) 
    });

  return (
    <div>
     
     {requests1.map((element,index) => {
            return(
        <table style={{marginTop:'1vw'}}>
        <tr>  
            <td>
                <button
                onClick={nav}>
             <Card style={{width:'50vw', height:'3vw'}}>
                 <tr>
                 <td>
               {requests1[index]}
        </td>
        <td > &nbsp; &nbsp; &nbsp;{requests1[index]}</td>
        </tr>
        </Card>
        </button>
        </td>
        </tr>
        </table>
    )
     })}
  </div>
  )
}