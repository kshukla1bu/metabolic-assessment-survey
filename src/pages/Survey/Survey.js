import React from 'react';
import Header from "../../components/Header";
import StepperComponent from "../../components/StepperComponent";
import SurveyForm from "./SurveyForm";

const Survey = () => {
    return (
        <>
            <Header/>
            <StepperComponent />
            <SurveyForm />
        </>
    );
};

export default Survey;