import React from 'react'
import InstructorsListViewPerCourse from './InstructorsListViewPerCourse'

export default function pageCall(){
    return(
        <div>
            <InstructorsListViewPerCourse
            instructors={[[
               'I1', 'email'
            ], 'I2', 'I3']}/>
        </div>
    )
}