import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { useHistory } from 'react-router'

export default function InstructorsListViewPerCourse (props){
    const [instructors, setInstructors] = useState('')
    const instructors1 = ['tadaa','peeep', 'oopsss']
    const history = useHistory()
    const token = localStorage.getItem("user");
    const nav = () =>{
        history.push('/buttonsPageHod')
    }
    useEffect(() => {
    axios({
        url: 'localhost:8080/headOfDepartment/viewStaffCourse',
        method: 'POST',
        headers: {
          token: token,
        },
        data: {
          course_name: "csen701"
        },
      })
        .then((res) => {
          console.log(res) 
          setInstructors(res)
        })
        .catch((error) => {
          console.log(error)
        })   
    });

    return(
        
    <div style={{ marginLeft:'1vw'}}>
        {instructors1.map((element,index) => {
            return(
        <table style={{marginTop:'1vw'}}>
        <tr>  
            <td>
                <button
                onClick={nav}>
             <Card style={{width:'50vw', height:'3vw'}}>
                 <tr>
                 <td>
      Instructor 1
        </td>
        <td > &nbsp; &nbsp; &nbsp;{instructors[2]}</td>
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
