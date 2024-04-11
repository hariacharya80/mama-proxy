const throwStartupError = function(type, message){
    const err = new Error();
    err.message = message;
    err.name = type;
    throw err;
}

module.exports = throwStartupError;