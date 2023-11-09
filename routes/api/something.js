function checkForErrorMessage(e) {
    if(e.message) {
        return true;
    } else {
        return false;
    }
}

function isOdd(number) {
    return number % 2 === 1;
}
