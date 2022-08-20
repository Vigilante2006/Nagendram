
//need help of a prebuilt library/module/package. ->readline
//how to use such aprebuilt library.
 //To use a library, you need to import it in your program.
  //how to import a library.

// 1. Importing a library to read input from terminal.
  const readline = require("readline");

  //2. create an interface to read data from terminal
    //process is inbuilt javascript object.
  readline.createInterface({
    input:process.stdin,
    output: process.stdout
  });


  rInterface.question("Enteranumber")

