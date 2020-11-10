import {getData} from '../providers/async'

export default async (cat_id) => {
    return getData(`Test_${cat_id}`).then(result => {
        return result;
    }).catch(err => {
        console.log('async error', err);
    })
}