import React, {useEffect} from 'react';
import Header from "../../components/Header";
import StepperComponent from "../../components/StepperComponent";
import ResultsComponent from "./ResultsComponent";
import {useDispatch, useSelector} from "react-redux";
import {setActiveStep} from "../../redux/slices/userSlice";
import {aggregateResponses} from "../../utils/utils";
import {
    setCAT10Result,
    setCAT11Result,
    setCAT12Result,
    setCAT13Result,
    setCAT14Result,
    setCAT15Result,
    setCAT16Result,
    setCAT17Result,
    setCAT1Result,
    setCAT2Result,
    setCAT3Result,
    setCAT4Result,
    setCAT5Result,
    setCAT6Result,
    setCAT7Result,
    setCAT8Result,
    setCAT9Result
} from "../../redux/slices/finalResultsSlice";

const Results = () => {
    const activeStep = useSelector(state => state?.user?.activeStep)
    const surveyCommon = useSelector(state => state?.surveyCommon)
    const surveyMale = useSelector(state => state?.surveyMale)
    const surveyFemale = useSelector(state => state?.surveyFemale)
    const finalResults = useSelector(state => state?.finalResults)
    const sex = useSelector(state => state?.user?.sex)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setActiveStep(16))
    },[activeStep, dispatch])

    useEffect(() => {
        if((sex === 'Male' && surveyMale?.CAT15) || (sex === 'Female' && surveyFemale?.CAT17)) {
            const scores = sex === "Male" ?
                aggregateResponses(surveyCommon, surveyMale, finalResults) :
                aggregateResponses(surveyCommon, surveyFemale, finalResults)

            scores.surveyCommonScores.forEach((obj) => {
                if (obj.key === 'CAT1')
                    dispatch(setCAT1Result(obj))
                if (obj.key === 'CAT2')
                    dispatch(setCAT2Result(obj))
                if (obj.key === 'CAT3')
                    dispatch(setCAT3Result(obj))
                if (obj.key === 'CAT4')
                    dispatch(setCAT4Result(obj))
                if (obj.key === 'CAT5')
                    dispatch(setCAT5Result(obj))
                if (obj.key === 'CAT6')
                    dispatch(setCAT6Result(obj))
                if (obj.key === 'CAT7')
                    dispatch(setCAT7Result(obj))
                if (obj.key === 'CAT8')
                    dispatch(setCAT8Result(obj))
                if (obj.key === 'CAT9')
                    dispatch(setCAT9Result(obj))
                if (obj.key === 'CAT10')
                    dispatch(setCAT10Result(obj))
                if (obj.key === 'CAT11')
                    dispatch(setCAT11Result(obj))
                if (obj.key === 'CAT12')
                    dispatch(setCAT12Result(obj))
                if (obj.key === 'CAT13')
                    dispatch(setCAT13Result(obj))
            })

            scores.surveySexScores.forEach((obj) => {
                if (obj.key === 'CAT14')
                    dispatch(setCAT14Result(obj))
                if (obj.key === 'CAT15')
                    dispatch(setCAT15Result(obj))
                if (obj.key === 'CAT16')
                    dispatch(setCAT16Result(obj))
                if (obj.key === 'CAT17')
                    dispatch(setCAT17Result(obj))
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header/>
            <StepperComponent />
            <ResultsComponent />
        </>
    );
};

export default Results;