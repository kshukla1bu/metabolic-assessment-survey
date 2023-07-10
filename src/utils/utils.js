
export const aggregateResponses = (surveyCommon, surveySex, finalResults) => {
    const surveyCommonScores = []
    const surveySexScores = []

    for(let key in surveyCommon) {
        surveyCommonScores.push({key: key, score: sum(surveyCommon[key])})
    }

    surveyCommonScores.forEach((obj) => {
        const id = parseInt(obj?.key.replace('CAT', ''))
        if(obj?.score <= parseInt(finalResults[id-1].mild)){
            obj.severity = "Mild"
        }
        else if(obj?.score > parseInt(finalResults[id-1].mild) && obj?.score <= parseInt(finalResults[id-1].moderate)){
            obj.severity = "Moderate"
        }
        else if(obj?.score > parseInt(finalResults[id-1].moderate) && obj?.score <= parseInt(finalResults[id-1].severe)){
            obj.severity = "Severe"
        }
    })

    for(let keySex in surveySex) {
        surveySexScores.push({key: keySex, score: sum(surveySex[keySex])})
    }

    surveySexScores.forEach((obj) => {
        const id = parseInt(obj?.key.replace('CAT', ''))
        if(obj?.score <= parseInt(finalResults[id-1].mild)){
            obj.severity = "Mild"
        }
        else if(obj?.score > parseInt(finalResults[id-1].mild) && obj?.score <= parseInt(finalResults[id-1].moderate)){
            obj.severity = "Moderate"
        }
        else if(obj?.score > parseInt(finalResults[id-1].moderate) && obj?.score <= parseInt(finalResults[id-1].severe)){
            obj.severity = "Severe"
        }
    })

    return { surveyCommonScores, surveySexScores }
}

const sum = (obj) => {
    return Object.values(obj).reduce((a, b) => parseInt(a) + parseInt(b), 0);
}