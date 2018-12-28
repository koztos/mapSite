const ping = require('ping');

let servers = new Map([
    ['MODB2', { address: '10.0.1.180', alive: false, icon: '' }]
    // ['Vancouver', { address: '192.168.12.1', alive: false }],
    // ['Calgary', { address: '192.168.5.1', alive: false }],
    // ['Goreway', { address: '192.168.13.1', alive: false }],
    // ['Ottawa', { address: '192.168.9.1', alive: false }],
    // ['Montreal', { address: '192.168.6.1', alive: false }],
    // ['Halifax', { address: '192.168.7.254', alive: false }],
    // ['St. Johns, NB', { address: '192.168.3.1', alive: false }],
    // ['St. Johns, NL', { address: '192.168.8.1', alive: false }],
    // ['Moncton', { address: '192.168.4.254', alive: false }]
]);

var offline = '/images/Offline.png';
var online = '/images/Online.png';

async function setIsAlive(callback) {
    for (var [name, server] of servers.entries()) {
        const isAlive = await ping.promise.probe(server.address);
        server.alive = isAlive.alive;
        if (isAlive.alive) {
            server.icon = online;
        }else {
            server.icon = offline;
        }

    }
    console.log(servers);
    callback();
};
function wait30sec() {
    setTimeout(function () {
        setIsAlive(wait30sec)
    }, 30000);
}
setIsAlive(wait30sec);
module.exports = servers;
