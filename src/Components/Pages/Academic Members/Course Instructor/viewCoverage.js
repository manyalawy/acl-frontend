import React, { useState, useEffect } from 'react'
import axios from 'axios'
//import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'


export default function viewCoverage() {

  //const id = useSelector((state) => state.id)

  //const dispatch = useDispatch()
  //const history = useHistory()
  //const [validated, setValidated] = useState(false)

//   useEffect(() => {
//     // if (!dispatch(checkTokenExpired(history))) {
//     axios({
//       url: ,
//       method: 'POST',
//       headers: {
//         authorization: token,
//       },
//       data: {
//         Account: {
//           id,
//         },
//         accountId,
//       },
//     })
//       .then((res) => {
//         console.log(res)
//         if (res.data.statusCode === 0) {
//           setExistingCourses(res.data.AllCourses)
//           let y = []
//           y.length = res.data.AllCourses.length
//           console.log(y)
//           res.data.AllCourses.map((element, index) => {
//             y[index] = false
//           })
//           setOpenCourse(y)
//           setLoading(false)
//         }
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//     // }
//   }, [])
//const vCov=()=>{}

  return (
    <div>
      <text style={{marginTop:'3vw', marginLeft:'1vw', fontWeight:'bold', fontSize:'2vw'}}>
        Course Coverage:
      </text>
      
   <text style={{marginTop:'3vw', marginLeft:'0.7vw', fontWeight:'bold', fontSize:'2vw', fontColor:'red'}}>
   526
   </text>
      
    </div>
  )
}