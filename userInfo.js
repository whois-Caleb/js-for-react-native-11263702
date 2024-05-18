userIdCounter = 1

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
