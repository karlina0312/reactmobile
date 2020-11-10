import {getData} from '../providers/async'

export default async (module,cat_id) => {
    console.log('getting -----------------------  ',`${module}_${cat_id}`)
    return getData(`${module}_${cat_id}`).then(result => {
        return result;
    }).catch(err => {
        console.log('async error', err);
    })
}