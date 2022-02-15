function findMatching (drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch (d1, Sa) {
    return d1.filter(driver => driver.startsWith(Sa));
}

function matchName(d2, matchName) {
    return d2.filter(driver => driver.name === matchName);
}