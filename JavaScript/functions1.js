
//returning function

/*
// १. मुख्य फंक्शन जे एक फंक्शन रिटर्न करते
function multiplier(factor) {
    // हे आतले फंक्शन रिटर्न केले जात आहे
    return function(number) {
        return number * factor;
    };
}

// २. फंक्शन व्हेरिएबलमध्ये स्टोअर करणे
let double = multiplier(2); // येथे factor ची किंमत 2 झाली
let triple = multiplier(3); // येथे factor ची किंमत 3 झाली

// ३. रिटर्न झालेला फंक्शन वापरणे
console.log(double(5)); // आउटपुट: 10 (5 * 2)
console.log(triple(5)); // आउटपुट: 15 (5 * 3)
*/



////Sir code
function multipliar(multiplierNumber) {
    let r = function doubleMyValue(num) {
        let c = num * multiplierNumber;
        return c;
    }
    return r;
}

let double = multipliar(2);

let triple = multipliar(3);
let tentimes = multipliar(10);

console.log(double(45))
console.log(triple(50))
console.log(tentimes(65))