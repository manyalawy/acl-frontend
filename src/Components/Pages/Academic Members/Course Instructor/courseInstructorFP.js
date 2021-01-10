import React from 'react'
import viewCoverage from './viewCoverage'

export default function courseInstructorFP() {
    // const ViewCov = () =>{
    //     history('/login/CI/viewCoverage')
    // }
  return (
    <div>
        <table>
            <tr>
  <div style={{fontWeight:'bold',fontColor:'black', fontSize:'2vw', marginTop:'3vw',marginLeft:'1vw'}}>
      Course Instructors
  </div>
  </tr>
  <tr>
<div style={{marginTop:'4vw', marginLeft:'1vw'}}>
<tr>
    <button style={{border:'none', backgroundColor:'gray', fontSize:'1vw',fontWeigt:'bold', marginRight:'1vw'}}
    >
        View Coverage
    </button>
    
    <button style={{border:'none', backgroundColor:'gray', fontSize:'1vw',fontWeigt:'bold', marginRight:'1vw', marginLeft:'0.8vw'}}>
        View Slots Assignment
    </button>
</tr>
<br></br>
<tr >
    <button style={{border:'none', backgroundColor:'gray', fontSize:'1vw',fontWeigt:'bold', marginRight:'1vw'}}>
        View All Staff
    </button>


    <button style={{border:'none', backgroundColor:'gray', fontSize:'1vw',fontWeigt:'bold', marginRight:'1vw', marginLeft:'1.2vw'}}>
        Assign an Academic Member
    </button>

</tr>
<br>
</br>
<tr>
    <button style={{border:'none', backgroundColor:'gray', fontSize:'1vw',fontWeigt:'bold', marginRight:'1vw'}}>
        Update/Remove <br></br>an assignment
    </button>
    <button style={{border:'none', backgroundColor:'gray', fontSize:'1vw',fontWeigt:'bold', marginRight:'1vw'}}>
        Assign an academic <br></br>member to a CI
    </button>
    </tr>
</div>
</tr>
</table>
    </div>
  )
}