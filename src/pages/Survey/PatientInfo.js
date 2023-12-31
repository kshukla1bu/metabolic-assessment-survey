import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import {Button, Card, CardBody, Input, Radio, Typography} from "@material-tailwind/react";
import {useDispatch, useSelector} from "react-redux";
import {setActiveStep, setAge, setDate, setName, setSex} from "../../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";

const PatientInfo = () => {
    const { register,
        handleSubmit } = useForm();
    const dispatch = useDispatch()
    const [currentDate] = useState((new Date().getMonth()+1)+" / "+new Date().getDate()+" / "+new Date().getFullYear())
    const {name, age, sex} =  useSelector(state => state?.user)
    const navigate = useNavigate()

    const onSubmit = data => {
        dispatch(setName(data?.patientName))
        dispatch(setAge(data?.patientAge))
        dispatch(setDate(currentDate))
        dispatch(setSex(data?.patientSex))
        dispatch(setActiveStep(1))
        navigate('/survey')
    };

    return (
        <>
            <Card className="mt-1 md:mx-40 flex items-center">
                <CardBody>
            <form className="mt-8 mb-2 md:w-80" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4 flex flex-col gap-6">
                    <Input {...register("patientName", {
                        required: true,
                        pattern: /^[a-zA-Z\s]*$/,
                        value: name || '',
                    })} type="text" size="lg" label="Name" />
                    <Input {...register('patientAge', {
                        required: true,
                        min:10,
                        max:120,
                        value: age || null,
                    })}type="number" size="lg" label="Age" />
                    <Typography variant="h5">Date: {currentDate}</Typography>
                    <div className="flex gap-10 items-center" >
                        <Radio id="male" value="Male" label="Male" {...register('patientSex', {required: true, value: sex || ''})}/>
                        <Radio id="female" value="Female" label="Female" {...register('patientSex', {required: true, value: sex || ''})}/>
                    </div>
                    <Button type="submit">Next</Button>
                </div>
            </form>
                    </CardBody>
            </Card>
        </>
    );
};

export default PatientInfo;