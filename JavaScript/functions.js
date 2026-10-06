/*
function add(a,b){
    let c=a+b;
    return c;
}
let d=add (10,20);
console.log (d);




function sub(a,b){
    let c = a-b;
    return c;
}
let d =sub (20,30);
console.log (d);


//एकाच फंक्शनमध्ये सगळे ऑपरेटर. 





// १. स्टार प्रिंट करणारे फंक्शन व्हेरिएबलमध्ये स्टोअर केले
let starPrinter = function(content) {
    console.log("********************");
    console.log(content);
    console.log("********************");
};

// २. हॅश प्रिन्ट करणारे फंक्शन (समजावून सांगण्यासाठी अतिरिक्त)
let hashPrinter = function(content) {
    console.log("####################");
    console.log(content);
    console.log("####################");
};

// ३. मुख्य फंक्शन जे नाव आणि प्रिंटर फंक्शन दोन्ही स्वीकारते
function printMyName(content, printerFunction) {
    printerFunction(content);
}

// ४. फंक्शन कॉल करणे (वेगवेगळ्या प्रिंटरचा वापर करून)
printMyName("Vaibhav", starPrinter);
printMyName("Pooja", hashPrinter);
printMyName("Ruhi", starPrinter);

*/


/*
// function1.js
import { starPrinter } from './printer.js';

function printMyName(content, printer) {
    printer(content);
}

// फंक्शन कॉल करणे
printMyName("Vaibhav", starPrinter);
printMyName("Pooja", starPrinter);

*/


// १. स्टार प्रिंट करणारे एरो फंक्शन
let starPrinter = (content) => {
    console.log("********************");
    console.log(content);
    console.log("********************");
};

// २. हॅश प्रिंट करणारे एरो फंक्शन
let hashPrinter = (content) => {
    console.log("####################");
    console.log(content);
    console.log("####################");
};

// ३. पर्सेंटेज प्रिंट करणारे एरो फंक्शन
let percentPrinter = (content) => {
    console.log("%%%%%%%%%%%%%%%%%%%%");
    console.log(content);
    console.log("%%%%%%%%%%%%%%%%%%%%");
};

// ४. मुख्य फंक्शन (जे नाव आणि कोणते प्रिन्टर वापर Mयचे ते घेते)
function printMyName(content, vaibhav) {
    vaibhav(content);
}

// ५. फंक्शन्स कॉल करणे (वेगवेगळ्या आउटपुटसाठी)
printMyName("Vaibhav", starPrinter);
printMyName("Pooja", hashPrinter);
printMyName("Ruhi", starPrinter);
printMyName("Ruhi", percentPrinter);





/*
***normal function 

let starPrinter = function(content) {
    console.log(content);
};

*****Arrow function 

let starPrinter = (content) => {
    console.log(content);
};

*/


