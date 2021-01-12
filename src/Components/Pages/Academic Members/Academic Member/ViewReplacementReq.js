import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import {useHistory} from 'react-router'

export default function ViewReplacementReq() {
  const [requests, setRequests]= useState('')
  const [status, setStatus]= useState('')
  const [senderId, setSenderId]= useState('')
  const [receiverId, setReceiverId]= useState('')
  const [dateToBeReq, setDateToBeReq]= useState('')

  const history = useHistory()
  const requests1 =[
    ["status : Pending",
    "_id : 5fe5e4c0750d936ee4b3e4c1", 
   "type : replacement", 
   "sender_id : 204030303de4",
    "receiver_id : 5fe5e4c0750d936ee4b3e4c1", 
]
   ["status : Pending",
   "_id : 5fe5e4c0750d936ee4b3e4c1", 
  "type : replacement", 
  "sender_id : 204030303de4",
   "receiver_id : 5fe5e4c0750d936ee4b3e4c1"
],
  ["status : Pending",
  "_id : 5fe5e4c0750d936ee4b3e4c1", 
 "type : replacement", 
 "sender_id : 204030303de4",
  "receiver_id : 5fe5e4c0750d936ee4b3e4c1", 
]
   
    ]
  const token = localStorage.getItem("user");
  useEffect(() => {  
        axios({
          url: 'localhost:8080/academicMember/viewReplacementReq',
          method: 'GET',
          headers: {
            token: token,
          },
        })
          .then((res) => {
            console.log(res) 
            setRequests({
                status: res.status,
                senderId: res.sender_id ,
                receiverId: res.receiver_id,
                dateToBeReq: res.date_to_be_req,
              
            })
          })
          .catch((error) => {
            console.log(error)
          }) 
    });

    return(
      <div style={{ marginTop:'2vw'}}>
         <h style={{fontWeight:'bold', marginLeft:'40vw', fontSize:'1.5vw'}}>
        
         All Replacements Requests
       
        </h>
       
          <div  style={{fontSize:'1vw', marginTop:'3vw', marginLeft:'1vw', marginBottom:'3vw'}}>
          {requests1.map((element,index) => {
              return(
          <table style={{marginTop:'1vw'}}>
          <tr> 
              <td>
                
               <Card style={{width:'50vw', height:'8vw', borderWidth:'0.2vw', borderColor:'#a9a9a9'}}>
            

                     <tr>
                      <td>
                     <text style={{marginLeft:'2vw', fontWeight:'bold', fontSize:'1vw'}}> status: </text></td>
                     <td>
                     <text style={{marginLeft:'2vw', fontWeight:'bold', fontSize:'1vw', color:'red'}}> {status} pending </text></td>
                     </tr>
                     <tr>
                     <td>
                     <text style={{marginLeft:'2vw', fontWeight:'bold', fontSize:'1vw'}}> sender id: </text></td>
                    <td>
                     <text style={{marginLeft:'2vw', fontWeight:'bold', fontSize:'1vw', color:'red'}}> {senderId} absde</text></td>
                     </tr>
                     <tr>
                     <td>
                     <text style={{marginLeft:'2vw', fontWeight:'bold', fontSize:'1vw'}}> receiver id: </text></td>
                    <td>
                     <text style={{marginLeft:'2vw', fontWeight:'bold', fontSize:'1vw', color:'red'}}> {receiverId} 21424r2feave  </text></td>
                     </tr>
                     <tr>
                     <td>
                     <text style={{marginLeft:'2vw', fontWeight:'bold', fontSize:'1vw'}}> date to be requested:</text></td>
                    <td>
                     <text style={{marginLeft:'2vw', fontWeight:'bold', fontSize:'1vw', color:'red'}}> {dateToBeReq}  12/5/2020  </text></td>
                     </tr>
               
                 
               </Card>
           
             </td>
          </tr>
          </table>
           )
         })}
         </div>
      
      </div>
      )
}