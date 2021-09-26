import React from 'react'
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { syllabus } from '../Syllabus/Parent'
import Grades from './Grades';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} {...props} />;
});

const Subjects = ({ userData }) => {
    const syllabusArray = syllabus[userData.semester][userData.branch]
    const scoreArray = Array.apply(null, Array(syllabusArray.length)).map(String.prototype.valueOf, "")
    const [open, setOpen] = React.useState(false);

    var totalCreds = 0
    for (let i = 0; i < syllabusArray.length; i++) {
        totalCreds = (totalCreds + syllabusArray[i][1])
    }
    console.log(totalCreds)

    const handleScore = () => {
        var sum = 0
        for (let i = 0; i < scoreArray.length; i++) {
            console.log(scoreArray)
            sum = sum + (scoreArray[i][0] * scoreArray[i][1])
        }
        console.log(isNaN(sum / totalCreds))
        
        if (isNaN(sum / totalCreds)) {
            alert('Invalid pinter! Fill all the fields.')
        } else {
            alert(`Your pointer is ${sum / totalCreds}`)
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Please fill in all the grades!
                </Alert>
            </Snackbar>
            <h2>{`${userData.branch} - Semester ${userData.semester}`}</h2>
            {
                syllabusArray.map((elem, i) => {
                    return (
                        <div key={i}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ margin: '2rem 0' }}>{`${elem[0]} - ${elem[1]}`}</p>
                                <Grades scoreArray={scoreArray} index={i} credit={elem[1]} />
                            </div>
                            <Divider />
                        </div>
                    )
                })
            }
            <Button onClick={handleScore}>Generate Score</Button>
        </div>
    )
}

export default Subjects
