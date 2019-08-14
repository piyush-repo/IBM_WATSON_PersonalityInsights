'use strict';
//const personalityInsightV3 = require('watson-developer-cloud/personality-insights/v3');
const personalityInsightV3 = require('ibm-watson/personality-insights/v3');

const personalityInsights = new personalityInsightV3({
    iam_apikey: "<api_Key>",
    version: '<version>',
    url: '<url>'
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
