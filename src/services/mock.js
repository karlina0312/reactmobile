import {getData} from '../providers/async'

const generate = (max, count) => {
    let array=[];
    for (let index = 0; index < count; index++) {
        let a = Math.floor(Math.random()*max);
        while (array.findIndex(e => e === a) !== -1) {
            a = Math.floor(Math.random()*max);
        }
        array.push(a)
    }
    return array;
}
const fetchQuestions =  async (cat_id) => {
    return getData(`Test_${cat_id}`).then(result => {
        return result;
    }).catch(err => {
        console.log('async error', err);
    })
}

const fetchCat = async (cat_id, num) => {
    let questions = await fetchQuestions(cat_id);
    let indexes = generate(questions.length, num);
    let array = [];
    for (let index = 0; index < indexes.length; index++) {
        array.push(questions[indexes[index]]);
    }
    return array;
}

export default async (modelArray) => {
    let qIndexObj = modelArray[0];
    let qNum = modelArray[1];


    if (qIndexObj.id != undefined) {
        return await fetchCat(qIndexObj.id, qNum);
    } else {
        let allQuestions = [];
        
        for (let index = 0; index < qIndexObj.array.length; index++) {
            for (let j = qIndexObj.array[index][0]; j <= qIndexObj.array[index][1]; j++) {
                let questions = await fetchQuestions(j)
                allQuestions = [...allQuestions, ...questions]
            }
        }

        let returnQuestions = [];
        let range = generate(allQuestions.length, qNum);
        
        for (let index = 0; index < range.length; index++) {
            returnQuestions.push(allQuestions[range[index]])
        }

        return returnQuestions;
    }

}
