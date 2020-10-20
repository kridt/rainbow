function rainowLog(string){
var black = "\x1b[30m",
red = "\x1b[31m",
green = "\x1b[32m",
yellow = "\x1b[33m",
blue = "\x1b[34m",
magenta = "\x1b[35m",
cyan = "\x1b[36m",
white = "\x1b[37m";


    var colors = [black, red, green, yellow, blue, magenta, cyan, white];
    var reset = "\x1b[0m";
    var output = "";

    for (let i =0; i < string.length; i++){
      output += colors[i % colors.length]+string[i] + reset;
    }

    console.log(output);
}


module.exports = rainowLog;