#!/usr/bin/env node
const yargs = require('yargs');
const {argv: opts} = yargs(process.argv);
const throwStartupError = require('./errors/startup.exceptions');
const {listenAddresses} = require('../config/config.ma');
const startInitialization = require('./lib/init');
const validateListenAddress = require('./utils/validateListenAddress');
if(opts.init){
    return startInitialization();
}

if(!listenAddresses.length){
    throwStartupError("panic", "No addresses provided to listenAddresses.");
}
for(let url in listenAddresses){
    // validateListenAddress(listenAddresses[url]);
}
console.log(listenAddresses);