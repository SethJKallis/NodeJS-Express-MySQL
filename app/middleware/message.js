function message(req,res,next){
    console.log("This message is coming from the middleware!")
};

module.exports = message();