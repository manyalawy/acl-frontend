import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router'
import { Form } from "react-bootstrap"
import Checkbox from '@material-ui/core/Checkbox'

export default function InstructorsListViewPerCourse (props){
    const [instructors, setInstructors] = useState('')
    const history = useHistory()
    const useStyles = makeStyles({
        card:{
        width:'50vw',
        height:'3vw'
        },
        button:{
            border:'none', 
            backgroundColor:'white', 
            textAlign:'left'
        }
        
    })
    useEffect(() => {
    axios({
        url: 'localhost:8080/headOfDepartment/viewStaffCourse ',
        method: 'POST',
        headers: {
          //token: token,
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

    const theOnClick = () =>{
        history.push()
    }

    return(
        
    <div style={{ marginLeft:'1vw'}}>
           <div style={{marginTop:'1vw', marginLeft:'54vw'}}>
             
            <button style={{backgroundColor:'black', border:'none', color:'white'}}>
                Assign
            </button> 
        </div>
        
        <div style={{marginTop:'1vw', marginLeft:'52vw'}}>
            <button style={{backgroundColor:'black', border:'none', color:'white'}}>
             Delete
            </button>
            &nbsp;
            <button style={{backgroundColor:'black', border:'none', color:'white'}}>
            Update
            </button>
        </div>
        {props.instructors.map((element,index) => {
            return(
        <table style={{marginTop:'1vw'}}>
        <tr>
            <td>
            <Checkbox /> 
            </td>
            <td>
             <Card style={{width:'50vw', height:'3vw'}}>
                 <tr>
                 <td>
        {props.instructors[1][1]}
        </td>
        <td > &nbsp; &nbsp; &nbsp;{props.instructors[1][2]}</td>
        </tr>
        </Card>
        </td>
        </tr>
        </table>
    )
})}
    </div>
    )
}
