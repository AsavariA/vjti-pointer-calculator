import React, { useState } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import StepContent from '@mui/material/StepContent';

const Main = () => {
    const [activeStep, setActiveStep] = useState(0);

    const getSteps = () => {
        return ['Sign Up', 'Create Username', 'Upload Profile Photo']
    }
    const steps = getSteps();

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <h1>Step 0</h1>;
            case 1:
                return <h1>Step 1</h1>;
            case 2:
                return <h1>Step 2</h1>;;
            default:
                return 'Unknown step';
        }
    }

    return (
        <div>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            {getStepContent(index)}
                            <div>
                                <div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                    >Finish</Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}

export default Main
