var userIdCounter = 1
import { formatArrayStrings } from "./arrayManipulation.js";

var rawNames = ["biLl", "jiM", "bOb"];
var numbers = [2, 3, 6];
const modifiedNamesArr = formatArrayStrings(rawNames, numbers);

function createUserProfiles (namesArr , modifiedNamesArr) {
    const profiles = [];

    for (let x = 0; x < namesArr.length; x++) {
        const originalNames = namesArr[x];
        const modifiedNames = modifiedNamesArr[x];

        const userProfile = {
            originalNames,
            modifiedNames,
            id: userIdCounter++
        };

        profiles.push(userProfile);
    }
    return profiles;
}

var names = ["Kim", "Lynn", "Jae"];
console.log(createUserProfiles(names, modifiedNamesArr))