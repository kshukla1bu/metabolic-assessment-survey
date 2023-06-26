import React from 'react';
import {Step, Stepper} from "@material-tailwind/react";
import  { surveySteps } from "../db/surveySteps"
import {useSelector} from "react-redux";
import {setActiveStep} from "../redux/slices/userSlice";
import {useDispatch} from "react-redux";

const StepperComponent = () => {
    const activeStep = useSelector(state => state?.user?.activeStep)
    const dispatch = useDispatch()

    return (
        <>
            <div className="w-full pt-20 py-10 px-8">
                <Stepper
                    activeStep={activeStep}
                >
                    {surveySteps.map((obj, i) => (
                        <Step onClick={()=>dispatch(setActiveStep(i))} key={i}>{obj.step}</Step>
                    ))}
                </Stepper>
            </div>
        </>
    );
};

export default StepperComponent;