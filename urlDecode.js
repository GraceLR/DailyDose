

const urlDecode = function(text) {

    let first = text.split('&');
    let obj = {};

    first.forEach(function (ele) {
        let second = ele.split('=');
        obj[second[0]] = second[1].replace(/%20/g, ' ');
    });
    return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);