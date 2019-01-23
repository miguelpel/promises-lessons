let cleanRoom = function() {
    let cleanTheRoom = new Promise(function(resolve, reject) {
        resolve('Cleaned The Room')
    });
    return cleanTheRoom
};

// After finishing cleaning the room
let removeGarbage = function(promiss) {
    let removeTheGarbage = new Promise(function(resolve, reject) {
        resolve('remove Garbage');
    });
    return removeTheGarbage;
};

// After finishing cleaning the room And remove garbages
let winIceCream = function(promiss) {
    let winMyIceCream = new Promise(function(resolve, reject) {
        resolve('won Icecream');
    });
    return winMyIceCream;
}

cleanRoom().then(function() {
    // starrt another promise
    return removeGarbage();
}).then(function() {
    return winIceCream();
}).then(function() {
    console.log('finished');
});