import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router'

export default function CoursesListView (){
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
        url: 'localhost:8080/headOfDepartment/ ',
        method: 'POST',
        headers: {
         // token: token,
        },
        data: {
          course_name: "csen701",
           id: "ac-1"
        },
      })
        .then((res) => {
          console.log(res.data) 
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
           <div style={{marginTop:'1vw', marginLeft:'46vw'}}>
            <button style={{backgroundColor:'black', border:'none', color:'white'}}>
                Assign
            </button>
        </div>
        <div style={{marginTop:'4vw', marginLeft:'52vw'}}>
            <button style={{backgroundColor:'black', border:'none', color:'white'}}>
             Delete
            </button>
            &nbsp;
            <button style={{backgroundColor:'black', border:'none', color:'white'}}>
            Update
            </button>
        </div>
        
             <Card style={{width:'50vw', height:'3vw'}}>
                 <tr>
                 <td>
        1) I1 name
        </td>
        <td > &nbsp; &nbsp; &nbsp;I1 email</td>
        </tr>
        </Card>
        <Card  style={{width:'50vw', height:'3vw', marginTop:'1vw'}}>
        2) I2 name 
        </Card>
        <div style={{marginTop:'4vw', marginLeft:'52vw'}}>
            <button style={{backgroundColor:'black', border:'none', color:'white'}}>
             Delete
            </button>
            &nbsp;
            <button style={{backgroundColor:'black', border:'none', color:'white'}}>
            Update
            </button>
        </div>
    
        <br></br>
        
        <Card  style={{width:'50vw', height:'3vw', marginTop:'1vw'}}>
        3) I3 name
        </Card>
        <div style={{marginTop:'4vw', marginLeft:'52vw'}}>
            <button style={{backgroundColor:'black', border:'none', color:'white'}}>
             Delete
            </button>
            &nbsp;
            <button style={{backgroundColor:'black', border:'none', color:'white'}}>
            Update
            </button>
        </div>
        
    </div>
    )
}
