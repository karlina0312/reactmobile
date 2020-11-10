import {getData} from '../providers/async'

export default async () => {
    return getData('Lesson').then(result => {
        return result;
    }).catch(err => {
        console.log('async error', err);
    })
}