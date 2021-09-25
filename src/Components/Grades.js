import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const gradeArray = [['AA', 10], ['AB', 9], ['BB', 8], ['BC', 7], ['CC',6],['CD',5],['DD',4]]

const Grades = () => {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel>Grade</InputLabel>
                <Select
                    required
                    label="Grade"
                >
                    {
                        gradeArray.map((e, i) => {
                            return (
                                <MenuItem value={e[1]} key={i}>{e[0]}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    )
}

export default Grades
