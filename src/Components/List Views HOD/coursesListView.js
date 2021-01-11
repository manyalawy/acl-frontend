import React, { useState, useEffect } from "react"
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router'

export default function CoursesListView (){
  const [courses, setCourses] = useState('')
  const course1 =['cs','abc','blablabla']
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
        url: 'localhost:8080//headOfDepartment/viewAllCourses',
        method: 'POST',
        headers: {
         // token: token,
        },
        data: {
          // course_name: "csen701",
        },
      })
        .then((res) => {
          console.log(res) 
          setCourses(res)
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
        {course1.map((element,index) => {
            return(
        <table style={{marginTop:'1vw'}}>
        <tr> 
            <td>
              <button onClick={theOnClick}>
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
    </div>
    )
}
