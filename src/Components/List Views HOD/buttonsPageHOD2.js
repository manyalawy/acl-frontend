import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ViewDayOffX from '../Pages/Academic Members/HOD/viewDayOffX';

export default function ButtonsPageHod2(){
    const token = localStorage.getItem("user");

    const assignInst = () =>{
        axios({
          url: 'localhost:8080/headOfDepartment/assignInst',
          method: 'POST',
          headers: {
            token: token,
          },
          data: {
            id: "ac4", 
            courseName:"mecha" 
          },
        })
          .then((res) => {
            console.log(res) 
          })
          .catch((error) => {
            console.log(error)
          })   
      }

      const unassignInst = () =>{
        axios({
          url: 'localhost:8080/headOfDepartment/unassignInst',
          method: 'POST',
          headers: {
            token: token,
          },
          data: {
            id: "ac4", 
            courseName:"mecha" 
          },
        })
          .then((res) => {
            console.log(res) 
          })
          .catch((error) => {
            console.log(error)
          })   
      }

      const reassignInst = () =>{
        axios({
          url: 'localhost:8080/headOfDepartment/reassignInst',
          method: 'POST',
          headers: {
            token: token,
          },
          data: {
            id: "ac4", 
            courseName:"mecha" 
          },
        })
          .then((res) => {
            console.log(res) 
          })
          .catch((error) => {
            console.log(error)
          })   
      }
  
    return(

        <div style={{marginTop:'3vw'}}>
            <div>
                <ViewDayOffX/>
            </div>
                <div style={{marginTop:'1vw', marginLeft:'54vw'}}>
             
             <button style={{backgroundColor:'black', border:'none', color:'white'}}
             onClick={assignInst}>
                 Assign
             </button> 
         </div>
         
         <div style={{marginTop:'1vw', marginLeft:'52vw'}}>
             <button style={{backgroundColor:'black', border:'none', color:'white'}}
             onClick={unassignInst}>
              Delete
             </button>
             &nbsp;
             <button style={{backgroundColor:'black', border:'none', color:'white'}}
             onClick={reassignInst}>
             Update
             </button>
         </div>
        </div>
    )
}