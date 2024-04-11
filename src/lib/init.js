const inquirer = require('inquirer');
const startInitialization = async function(){
    console.log(`Welcome to MaMa Proxy!`);
    const question = inquirer.createPromptModule();
    const ans = await question([{
        type: "rawlist",
        choices:["Web GUI", "CLI"],
        message: "How do you want to install:",
        name: "install_option"
    }]);
    if(ans.install_option.toLowerCase().split(" ").join("") === "webgui"){
        console.error(`Oops! Web GUI is currently not available.`)
    }else{
        //[TODO]: Continue from here
        console.log(`Please wait... installing....`);
    }
}

module.exports = startInitialization;