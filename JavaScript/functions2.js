//settimeout
//promisses--
// Full field ---Call then. 
// rejected --Cache. 
// and pending 
/*
function fill(element, text) {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fill => " + element + " -> " + text);
            resolve();
        }, 2000);
    });
    return p1;
}

function click(element) {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("click => " + element);
            resolve();
        }, 5000);
    });
    return p1;
}

click("login link").then(() => {
    return fill("username", "user1");
}).then(() => {
    return fill("password", "pass1");
}).then(() => {
    return click("login button");
}).then(() => {
    console.log("Execution completed");
}).catch((err) => {
    console.log(err);
});

*/

// rejected - catch
// pending

function fill(element, text){
    let p1 = new Promise((a, b) =>{
        setTimeout(() =>{
            console.log("fill => " + element + " -> " + text)
            a();
        } , 2000)
    })
    return p1;
}

function click(element){
    let p1 = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("click => " + element )
            resolve();
        } , 5000)
    })
    return p1;
}

click("login link").then(() =>{
    return fill("username", "user1");
}).then(() =>{
    return fill("password", "pass1");
}).then(() =>{
    return click("login button")
}).then(() =>{
    console.log("Execution completed")
}).catch(() =>{
    
})

//Promiss .then ()--create the hell
//solution for this - use async await function

// or call by async await

async function login(){
    await click("login link")
    await fill("username","user1")
    await fill("password","pass1")
    await click("login button")
}