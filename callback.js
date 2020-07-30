function test1(){
    let flag = false
    let result = !flag ? 1 : 2
    console.log(result)
}

function test2(callback){
    setTimeout(() => {
        callback()
    }, 3000)
}

test2(test1)

const promise1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved promise 1")
        }, 3000)
    })
}
const promise2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved promise 2")
        }, 4000)
    })
}
const asyncFunction1 = async () => {
    let a = await promise1();
    console.log(a)
    let b = await promise2();
    console.log(b)
}

const asyncFunction2 = async () => {
    console.log("flag")
    let a = await promise1();
    console.log(a + " the second")
    let b = await promise2();
    console.log(b + " the second")
    Promise.all([promise1(), promise2()]).then(r=> console.log(r))
}

console.log("start")
asyncFunction1()
asyncFunction2()
console.log("finish")
