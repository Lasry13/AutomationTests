const axios = require('axios')
const getRequestOptions = (method, url, data) => {
    return {
        method : method,
        url : url,
        data : data
    }
}

const options = getRequestOptions('get', 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo')
axios(options).then(result => {
        console.log(result.status)
        console.log(result.status + 1)
    }
).catch(error => {
    console.log(error)
})

axios(options).then(result => {
        console.log(result.status)
        console.log(result.status + 1)
    }
).catch(error => {
    console.log(error)
})
