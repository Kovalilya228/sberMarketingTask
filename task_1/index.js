import {encoded, translations} from './data.js'

const exceptions = {
    'groupId' : true,
    'service' : true,
    'formatSize' : true,
    'ca' : true
};
const countOfMoves = initializeCountOfMoves(translations);

console.log("Let's rock");
console.log(encoded, translations);

const decoded = encoded.map(item => decode(item, translations));
const uniqIds = checkUniq(countOfMoves);

console.log(decoded);
console.log(uniqIds);

function decode(object, translations) {
    const decodedObject = {};
    Object.assign(decodedObject, object);
    for (let key in object) {
        if (key.toLowerCase().includes('id') && !exceptions[key] && decodedObject[key] in translations) {
            countOfMoves[decodedObject[key]] += 1;
            decodedObject[key] = translations[decodedObject[key]];
        }
    }
    return decodedObject
}

function initializeCountOfMoves(source) {
    const res = {};
    for (let key in source) {
        res[key] = 0;
    }
    return res;
}

function checkUniq(countOfMoves) {
    const res = [];
    for (let key in countOfMoves) {
        if (countOfMoves[key] === 1) {
            res.push(key);
        }
    }
    return res;
}