import CONFIG from '../../env.json'
export default (target, body) => {
    return fetch(`${CONFIG.API_URL}/api/${target}`,
    {
        method: 'POST',
        headers : {
            'Content-Type' : "application/json",
        },
        body: body
    })
    .then((response) => response.json())
    .catch(err => {
        console.log('error', err)
    })
}