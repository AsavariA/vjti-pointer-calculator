import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Semester from './Semester';

const steps = ['Select Semester', 'Select Branch', 'Enter Grades'];

const Main = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const matches = useMediaQuery('(max-width:600px)');
    const [userData, setUserData] = React.useState({
        semester: '',
        branch: '',
        grades: '',
    });

    const handleNext = () => {



        if (activeStep === 0 && (userData.semester === 1 || userData.semester === 2)) {
            setActiveStep((prevActiveStep) => prevActiveStep + 2);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setUserData({
            semester: '',
            branch: '',
            grades: '',
        })
    };

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Semester userData={userData} setUserData={setUserData} />
                );
            case 1:
                return (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Step 0
                    </Typography>);
            case 2:
                return (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Step 0
                    </Typography>);
            default:
                return 'Unknown step';
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <div className='stepper-wrapper'>
                <Stepper activeStep={activeStep} orientation={matches ? 'vertical' : 'horizontal'}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                                {matches ? <StepContent>{getStepContent(index)}</StepContent> : null}
                            </Step>
                        );
                    })}
                </Stepper>
            </div>
            {
                !matches ? getStepContent(activeStep) : null
            }
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default Main
