const throwStartupError = require('../errors/startup.exceptions');

/**
 * Validate a listen address.
 * 
 * @param {*} url the url loaded from the config file that server will listen to.
 */
const validateListenAddress = function(url){
    console.log(typeof url);
    if(typeof url != "string"){
        throwStartupError("panic", `Provided URL is not a valid address to listen: ${url}`);
    }else{
        return true;
    }
}

module.exports = validateListenAddress;