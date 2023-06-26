import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import {Button, Input, Radio, Typography} from "@material-tailwind/react";
import {useDispatch} from "react-redux";
import {setActiveStep, setAge, setDate, setName, setSex} from "../../redux/slices/userSlice";

const PatientInfo = () => {
    const { register,
        handleSubmit } = useForm();
    const dispatch = useDispatch()
    const [currentDate] = useState((new Date().getMonth()+1)+" / "+new Date().getDate()+" / "+new Date().getFullYear())
    const onSubmit = data => {
        console.log(data);
        dispatch(setName(data?.patientName))
        dispatch(setAge(data?.patientAge))
        dispatch(setDate(currentDate))
        dispatch(setSex(data?.patientSex))
        dispatch(setActiveStep(1))
    };

    return (
        <>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 flex flex-col gap-6">
                    <Input {...register("patientName", {
                        required: true,
                        pattern: /^[a-zA-Z\s]*$/,
                    })} type="text" size="lg" label="Name" />
                    <Input {...register('patientAge', {required: true, min:10, max:120})}type="number" size="lg" label="Age" />
                    <Typography variant="h5">Date: {currentDate}</Typography>
                    <div className="flex gap-10 items-center" >
                        <Radio id="male" value="Male" label="Male" {...register('patientSex', {required: true})}/>
                        <Radio id="female" value="Female" label="Female" {...register('patientSex', {required: true})}/>
                    </div>
                    <Button type={"submit"}>Next</Button>
                </div>
            </form>
        </>
    );
};

export default PatientInfo;