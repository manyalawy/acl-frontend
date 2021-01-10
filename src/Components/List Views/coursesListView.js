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
        history.push("/login/InstructorsListView")
    }

    return(
    <div>
     
        <div  style={{fontSize:'1vw', marginTop:'3vw', marginLeft:'1vw'}}>
        <button style={{border:'none', backgroundColor:'white', textAlign:'left'}}
         onClick={theOnClick}>
        <Card style={{width:'50vw', height:'3vw', marginTop:'1vw'}}>
        1) cs 
        </Card>
        </button>
        <button style={{border:'none', backgroundColor:'white', textAlign:'left', marginTop:'1vw'}}
         onClick={theOnClick} >
        <Card  style={{width:'50vw', height:'3vw', marginTop:'1vw'}}>
        2) ff
        </Card>
        </button>
        <br></br>
        <button style={{border:'none', backgroundColor:'white', textAlign:'left'}}
         onClick={theOnClick} >
        <Card  style={{width:'50vw', height:'3vw', marginTop:'1vw'}}>
        3) gg
        </Card>
        </button>
        </div>
    </div>
    )
}
