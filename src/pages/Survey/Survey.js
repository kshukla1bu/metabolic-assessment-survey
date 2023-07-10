import React, {useEffect} from 'react';
import Header from "../../components/Header";
import StepperComponent from "../../components/StepperComponent";
import SurveyForm from "./SurveyForm";
import {useDispatch, useSelector} from "react-redux";
import {setActiveStep} from "../../redux/slices/userSlice";

const Survey = () => {
    const activeStep = useSelector(state => state?.user?.activeStep)
    const dispatch = useDispatch()

    useEffect(() => {
        if(activeStep === 16){
            dispatch(setActiveStep(15))
        }
        if(activeStep === 0){
            dispatch(setActiveStep(1))
        }
    },[activeStep, dispatch])

    return (
        <>
            <Header/>
            <StepperComponent />
            <SurveyForm />
        </>
    );
};

export default Survey;