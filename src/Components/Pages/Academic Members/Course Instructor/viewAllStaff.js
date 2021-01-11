import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router'
import Checkbox from '@material-ui/core/Checkbox'

export default function ViewAllStaff (props){
  const token = localStorage.getItem("user");
    const history = useHistory()
    const [instructors, setInstructors] = useState('')
    const instructors1=['tadaaaa','nannanana','loodfff']

    useEffect(() => {
    axios({
        url: 'localhost:8080/courseInstructor/viewAllStaff',
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
    const cardClick = () =>{
      history.push('/login/CI/buttonsPage')
    }

   
    return(
        
    <div style={{ marginLeft:'1vw'}}>
        {instructors1.map((element,index) => {
            return(
        <table style={{marginTop:'1vw'}}>
        <tr> 
            <td>
              <button onClick={cardClick}>
             <Card style={{width:'50vw', height:'3vw'}}>
              <tr>
                 <td> {/*instructors[1][1]*/} peewwww </td>
                 <td> &nbsp; &nbsp; &nbsp; pewwwww </td>
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
