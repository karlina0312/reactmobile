import CONFIG from '../../env.json'
export default (target) => {
    return fetch(`${CONFIG.API_URL}/api/${target}`,
    {
        method: 'GET',
        headers : {
            'Content-Type' : "application/json",
        }
    })
    .then((response) => response.json())
    .catch(err => {
        console.log('error', err)
    })
}