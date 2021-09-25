import React from 'react'
import Divider from '@mui/material/Divider';
import { syllabus } from '../Syllabus/Parent'
import Grades from './Grades';

const Subjects = ({ userData }) => {

    const syllabusArray = syllabus[userData.semester][userData.branch]

    return (
        <div>
            <h2>{`${userData.branch} - Semester ${userData.semester}`}</h2>
            {
                syllabusArray.map((elem, i) => {
                    return (
                        <div key={i}>
                            <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                                <p style={{ margin: '2rem 0' }}>{`${elem[0]} - ${elem[1]}`}</p>
                                <Grades />
                            </div>
                            <Divider />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Subjects
