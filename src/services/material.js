import {getData} from '../providers/async'

export default async () => {
    return getData('Material').then(result => {
        return result;
    }).catch(err => {
        console.log('async error', err);
    })
}