const ping = require('ping');

let terminals = new Map([
    ['Brampton', { address: '10.0.3.252', alive: false }],
    ['Vancouver', { address: '192.168.12.1', alive: false }],
    ['Calgary', { address: '192.168.5.1', alive: false }],
    ['Goreway', { address: '192.168.13.1', alive: false }],
    ['Ottawa', { address: '192.168.9.1', alive: false }],
    ['Montreal', { address: '192.168.6.1', alive: false }],
    ['Halifax', { address: '192.168.7.254', alive: false }],
    ['St. Johns, NB', { address: '192.168.3.1', alive: false }],
    ['St. Johns, NL', { address: '192.168.8.1', alive: false }],
    ['Moncton', { address: '192.168.4.254', alive: false }],
    ['My Phone', {address: '10.0.2.7', alive: false}]
]);

async function setIsAlive(callback) {
    for (var [site,terminal] of terminals.entries()) {
        const isAlive = await ping.promise.probe(terminal.address);
        terminal.alive = isAlive.alive;
    }
    // console.log(terminals);
    callback(terminals);
};
function wait30sec(){
    setTimeout(function(){
        setIsAlive(wait30sec)
    },5000);
}
setIsAlive(wait30sec);
module.exports = terminals;
