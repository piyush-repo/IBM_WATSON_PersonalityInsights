'use strict';
//const personalityInsightV3 = require('watson-developer-cloud/personality-insights/v3');
const personalityInsightV3 = require('ibm-watson/personality-insights/v3');

const personalityInsights = new personalityInsightV3({
    iam_apikey: 'T1J5gZbTtmraXg4ouUDOQEzQLB5gErrNdJA87Wd5Gxq6',
    version: '2017-10-13',
    url: 'https://gateway-lon.watsonplatform.net/personality-insights/api/'
})

class Personality {
    constructor() { }
    analyzePersonality(contentText) {
        return personalityInsights.profile({
                    content: contentText,
                    content_type: 'text/plain',
                    consumption_preferences: true
                }).then((result)=> {
                    console.log(JSON.stringify(result, null, 2));
                    return result;
                }).catch(()=> {
                    console.log('error :', error);
                    return error;
                });
    }
}

module.exports = Personality;
