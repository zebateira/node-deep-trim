'use strict';

function deepTrim(data) {
    const type = Object.prototype.toString.call(data);
    if (type === '[object String]') {
        return data.trim();
    } else if (type === '[object Array]') {
        return data.map(item => deepTrim(item))
    } else if (type === '[object Object]') {
        // new object
        let target = {};
        for (let key in data) {
            target[key] = deepTrim(data[key])
        }
        return target;
    }
    return data
}

module.exports = deepTrim;
