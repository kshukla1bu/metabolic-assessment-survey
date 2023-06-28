import React from 'react';
import {Button, Radio, Typography} from "@material-tailwind/react";
import {useForm} from "react-hook-form";
import {setActiveStep} from "../../redux/slices/userSlice";
import {useDispatch} from "react-redux";

const SurveyCategory = ({ category, surveyList, setCATData }) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const onSubmit = data => {
        console.log(data);
        dispatch(setCATData(data))
        dispatch(setActiveStep(parseInt(category)+1))
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
                            <Radio id="zero" value={0} label="0" {...register(query.query, {required: true})}/>
                            <Radio id="one" value={1} label="1" {...register(query.query, {required: true})}/>
                            <Radio id="two" value={2} label="2" {...register(query.query, {required: true})}/>
                            <Radio id="three" value={3} label="3" {...register(query.query, {required: true})}/>
                        </div>
                        </div>
                    ))}
                    <Button type={"submit"}>Next</Button>
                </div>
            </form>
        </>
    );
};

export default SurveyCategory;