import React, {useEffect} from 'react';
import Header from "../../components/Header";
import StepperComponent from "../../components/StepperComponent";
import PatientInfo from "../Survey/PatientInfo";
import {useDispatch} from "react-redux";
import {setActiveStep} from "../../redux/slices/userSlice";

const Patient = () => {
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(setActiveStep(0))
            dispatch({type:'RESET'})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <Header/>
            <StepperComponent />
            <PatientInfo/>
        </>
    );
};

export default Patient;