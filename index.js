'use strict';

function deepTrim(object) {
    if (typeof object === 'string') {
        return object.trim();
    } else if (typeof object === 'object') {
        for (var key in object) {
            object[key] = deepTrim(object[key]);
        }
    }

    return object;
}

module.exports = deepTrim;
