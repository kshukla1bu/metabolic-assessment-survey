import React, {useState} from 'react';
import {Alert, Button, Radio, Typography} from "@material-tailwind/react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {setActiveStep} from "../../redux/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {aggregateResponses} from "../../utils/utils";

const SurveyCategory = ({ category, surveyList, setCATData, reduxData }) => {
    const { register, handleSubmit } = useForm();
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const onSubmit = data => {
        console.log(data);
        dispatch(setCATData(data))
        dispatch(setActiveStep(parseInt(category)+1))
        if(category === "15" || category === "17"){
            state?.user?.sex === "Male" ?
                aggregateResponses(state?.surveyCommon, state?.surveyMale, dispatch) :
                aggregateResponses(state?.surveyCommon, state?.surveyFemale, dispatch)
            dispatch(setActiveStep(parseInt(category)+1))
            navigate('/results')
        } else {
            dispatch(setActiveStep(parseInt(category)+1))
        }
    }
    return (
        <>
            <Typography variant='h5' color='black'>{`Category ${category}`}</Typography>
            <form className="mt-8 mb-2 md:w-80" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 flex flex-col gap-6">
                    {surveyList.map((query, i) => (
                        <div key={i}>
                        <Typography variant="lead" color='black'>{query.query}</Typography>
                        <div className="flex gap-7 md:gap-10" >
                            <Radio id="zero" value={0} label="0" {...register(query.id, {required: true, value: (reduxData && reduxData[category+(i+1)]) || null})}/>
                            <Radio id="one" value={1} label="1" {...register(query.id, {required: true, value: (reduxData && reduxData[category+(i+1)]) || null})}/>
                            <Radio id="two" value={2} label="2" {...register(query.id, {required: true, value: (reduxData && reduxData[category+(i+1)]) || null})}/>
                            <Radio id="three" value={3} label="3" {...register(query.id, {required: true,value: (reduxData && reduxData[category+(i+1)]) || null})}/>
                        </div>
                        </div>
                    ))}
                    <Button type={"submit"}>Next</Button>
                    <Alert
                        color="red"
                        open={open}
                        onClose={() => setOpen(false)}
                        animate={{
                            mount: { y: 0 },
                            unmount: { y: 100 },
                        }}
                    >
                        Please complete your responses
                    </Alert>
                </div>
            </form>
        </>
    );
};

export default SurveyCategory;