const throwStartupError = require('./errors/startup.exceptions');
const {listenAddresses} = require('../config/config.ma');
const validateListenAddress = require('./utils/validateListenAddress');
if(!listenAddresses.length){
    throwStartupError("panic", "No addresses provided to listenAddresses.");
}
for(let url in listenAddresses){
    validateListenAddress(listenAddresses[url]);
}
console.log(listenAddresses);