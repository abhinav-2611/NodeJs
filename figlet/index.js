const figlet = require("figlet")

figlet("Hello Abhinav Srivastava" , function (err , data) {
    if(err)
    {
        console.log("something went wrong");
        
    }
    else{

        console.log(data);
        
    }
} )