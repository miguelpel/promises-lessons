let cleanRoom = function() {
    let cleanTheRoom = new Promise(function(resolve, reject) {
        resolve(' Cleaned The Room ')
    });
    return cleanTheRoom
};

// After finishing cleaning the room
let removeGarbage = function(message) {
    let removeTheGarbage = new Promise(function(resolve, reject) {
        resolve(message + ' remove Garbage ');
    });
    return removeTheGarbage;
};

// After finishing cleaning the room And remove garbages
let winIceCream = function(message) {
    let winMyIceCream = new Promise(function(resolve, reject) {
        resolve(message + ' won Icecream ');
    });
    return winMyIceCream;
}

Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function() {
    console.log('One of them is finished');
})