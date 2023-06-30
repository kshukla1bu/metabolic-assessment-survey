
export const aggregateResponses = (surveyCommon, surveySex) => {
    const surveyCommonScores = []
    const surveySexScores = []

    for(let key in surveyCommon) {
        surveyCommonScores.push({key: key, score: sum(surveyCommon[key])})
    }

    for(let keySex in surveySex) {
        surveySexScores.push({key: keySex, score: sum(surveySex[keySex])})
    }

    return {surveyCommonScores, surveySexScores }
}

const sum = (obj) => {
    return Object.values(obj).reduce((a, b) => parseInt(a) + parseInt(b), 0);
}