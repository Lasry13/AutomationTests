const queryDb = (pool, params) => {
    return new Promise((resolve, reject) => {
        pool.query("SELECT * FROM products where id=$1;", params, (err, res) => {
            if(err) {
                console.log(err)
                reject(err)
            }
            resolve(res.rows)
        })
    })
}

module.exports.queryDb = queryDb
