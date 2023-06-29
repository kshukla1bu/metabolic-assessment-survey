import React from 'react';
import {Button, Step, Stepper, Typography} from "@material-tailwind/react";
import  { surveySteps } from "../db/surveySteps"
import {useSelector} from "react-redux";
import {setActiveStep} from "../redux/slices/userSlice";
import {useDispatch} from "react-redux";

const StepperComponent = () => {
    const activeStep = useSelector(state => state?.user?.activeStep)
    const dispatch = useDispatch()

    return (
        <>
            <div className="hidden md:block w-full pt-20 py-10 px-8">
                <Stepper
                    activeStep={activeStep}
                >
                    {surveySteps.map((obj, i) => (
                        <Step onClick={()=>dispatch(setActiveStep(i))} key={i}>{obj.step}</Step>
                    ))}
                </Stepper>
            </div>
            <div className="grid grid-cols-3 gap-4 md:hidden">
                <div>
                    {(activeStep !== 0 && activeStep !== 16) && <Button variant="text" onClick={() => dispatch(setActiveStep(activeStep-1))}>PREV.</Button>}
                </div>
                <div>
                    <Typography className="text-center pt-2"> {activeStep+1 +' / '+ surveySteps.length}</Typography>
                </div>
                <div className="flow-root">
                    {(activeStep !== 0 && activeStep !== 16) && <Button className="float-right" variant="text" onClick={() => dispatch(setActiveStep(activeStep+1))}>NEXT</Button> }
                </div>
            </div>
        </>
    );
};

export default StepperComponent;