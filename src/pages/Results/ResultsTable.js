import React from 'react';
import {Card, Typography} from "@material-tailwind/react";
import initialPayload from "../../db/payload.json"
import {useSelector} from "react-redux";

const ResultsTable = () => {
    const TABLE_HEAD = ["Health Concern", "Score", "Severity"];
    const TABLE_ROWS = initialPayload.finalResults;
    const finalResults = useSelector(state => state?.finalResults)
    const {sex} =  useSelector(state => state?.user)

    return (
        <>
            <Card className="overflow-scroll h-full w-full">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {TABLE_ROWS.map(({ id, score, severity, health_concern }, index) => (
                        <tr key={id} className="even:bg-blue-gray-50/50">
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {health_concern}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {(sex === "Female" && id === "14") ||
                                    (sex === "Female" && id === "15") ||
                                    (sex === "Male" && id === "16") ||
                                    (sex === "Male" && id === "17")
                                        ? "-" : finalResults["CAT"+(index+1)+"Result"]?.score}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {(sex === "Female" && id === "14") ||
                                    (sex === "Female" && id === "15") ||
                                    (sex === "Male" && id === "16") ||
                                    (sex === "Male" && id === "17")
                                        ? "-" : finalResults["CAT"+(index+1)+"Result"]?.severity}
                                </Typography>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Card>
        </>
    );
};

export default ResultsTable;