import React, {useEffect, useState} from 'react';
import PatientInfo from "./PatientInfo";
import {useSelector} from "react-redux";
import {CardBody, Card, Typography} from "@material-tailwind/react";
import SurveyCategory from "./SurveyCategory";
import initialPayload from "../../db/payload.json"
import {
    setCAT1, setCAT10, setCAT11, setCAT12, setCAT13,
    setCAT2,
    setCAT3,
    setCAT4,
    setCAT5,
    setCAT6,
    setCAT7,
    setCAT8, setCAT9
} from "../../redux/slices/surveyCommonSlice";
import {setCat16, setCat17} from "../../redux/slices/surveyFemaleSlice";
import {setCat14, setCat15} from "../../redux/slices/surveyMaleSlice";

const SurveyForm = () => {
    const activeStep = useSelector(state => state?.user?.activeStep)
    const patientSex = useSelector(state => state?.user?.sex)
    const surveyCommon = useSelector(state => state?.surveyCommon)
    const surveyMale = useSelector(state => state?.surveyMale)
    const surveyFemale = useSelector(state => state?.surveyFemale)
    const [category] = useState(initialPayload.surveyCommon)
    const [categoryMale] = useState(initialPayload.surveyMale)
    const [categoryFemale] = useState(initialPayload.surveyFemale)

    return (
        <>
            {(activeStep !== 0 && activeStep !== 16) &&
            <Typography className="mt-4 mx-4 text-center text-xs md:text-xl" >Please select the appropriate number “0 - 3” on all questions below. 0 as the least/never to 3 as the most/always.</Typography>}
            <Card className="mt-1 md:mx-40 flex items-center">
                <CardBody>
                    {activeStep === 1 && <SurveyCategory category={"1"} surveyList={category.CAT1} setCATData={setCAT1} reduxData={surveyCommon?.CAT1}/>}
                    {activeStep === 2 && <SurveyCategory category={"2"} surveyList={category.CAT2} setCATData={setCAT2} reduxData={surveyCommon?.CAT2}/>}
                    {activeStep === 3 && <SurveyCategory category={"3"} surveyList={category.CAT3} setCATData={setCAT3} reduxData={surveyCommon?.CAT3}/>}
                    {activeStep === 4 && <SurveyCategory category={"4"} surveyList={category.CAT4} setCATData={setCAT4} reduxData={surveyCommon?.CAT4}/>}
                    {activeStep === 5 && <SurveyCategory category={"5"} surveyList={category.CAT5} setCATData={setCAT5} reduxData={surveyCommon?.CAT5}/>}
                    {activeStep === 6 && <SurveyCategory category={"6"} surveyList={category.CAT6} setCATData={setCAT6} reduxData={surveyCommon?.CAT6}/>}
                    {activeStep === 7 && <SurveyCategory category={"7"} surveyList={category.CAT7} setCATData={setCAT7} reduxData={surveyCommon?.CAT7}/>}
                    {activeStep === 8 && <SurveyCategory category={"8"} surveyList={category.CAT8} setCATData={setCAT8} reduxData={surveyCommon?.CAT8}/>}
                    {activeStep === 9 && <SurveyCategory category={"9"} surveyList={category.CAT9} setCATData={setCAT9} reduxData={surveyCommon?.CAT9}/>}
                    {activeStep === 10 && <SurveyCategory category={"10"} surveyList={category.CAT10} setCATData={setCAT10} reduxData={surveyCommon?.CAT10}/>}
                    {activeStep === 11 && <SurveyCategory category={"11"} surveyList={category.CAT11} setCATData={setCAT11} reduxData={surveyCommon?.CAT11}/>}
                    {activeStep === 12 && <SurveyCategory category={"12"} surveyList={category.CAT12} setCATData={setCAT12} reduxData={surveyCommon?.CAT12}/>}
                    {activeStep === 13 && <SurveyCategory category={"13"} surveyList={category.CAT13} setCATData={setCAT13} reduxData={surveyCommon?.CAT13}/>}
                    {
                        activeStep === 14 && (patientSex === 'Female' ?
                        <SurveyCategory category={"16"} surveyList={categoryFemale.CAT16} setCATData={setCat16} reduxData={surveyFemale?.CAT16}/> :
                        <SurveyCategory category={"14"} surveyList={categoryMale.CAT14} setCATData={setCat14} reduxData={surveyMale?.CAT14}/>)
                    }
                    {
                        activeStep === 15 && (patientSex === 'Female' ?
                            <SurveyCategory category={"17"} surveyList={categoryFemale.CAT17} setCATData={setCat17} reduxData={surveyFemale?.CAT17}/> :
                            <SurveyCategory category={"15"} surveyList={categoryMale.CAT15} setCATData={setCat15} reduxData={surveyMale?.CAT15}/>)
                    }
                </CardBody>
            </Card>
        </>
    );
};

export default SurveyForm;