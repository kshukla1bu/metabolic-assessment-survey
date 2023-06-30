import React from 'react';
import {Button, Card, CardBody, Typography} from "@material-tailwind/react";
import ResultsTable from "./ResultsTable";
import {useDispatch} from "react-redux";
import {setActiveStep} from "../../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";
import {persistor} from "../../redux/store";

const ResultsComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleReset = () => {
        dispatch(setActiveStep(0))
        navigate(-1)
        persistor.pause();
        persistor.flush().then(() => {
            return persistor.purge();
        });
    }

    return (
        <>
            <Card className="mt-1 md:mx-40 flex items-center">
                <CardBody>
                    <Typography variant='h5' color='black'>{`Results`}</Typography>
                    <ResultsTable />
                </CardBody>
                <Button onClick={handleReset} className="m-4 w-3/4">Done</Button>
            </Card>
        </>
    );
};

export default ResultsComponent;