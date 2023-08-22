var http = require("http");

const { setTimeout } = require("timers/promises");

// async function simWriteData() {

//     console.log("writing data...")

//     await delay(6000);

//     console.log("write successful")

// }

 function simReadData(callback) {
  console.log("reading data...");

  function timeoutfunc() {
    console.log("set timeout called");
  }

   setTimeout(timeoutfunc, 2000);

//   await setTimeout(() => {
//     console.log("delay");

//     console.log("callilng callback");

//     callback("testing...");
//   }, 2000);
}

var server = http.createServer(function (req, res) {
  console.log("Req recieved - " + Date.now());

  // simWriteData()
  function welcome() {
    console.log('Welcome to W3Docs');
  }
  setTimeout(welcome, 1000);

  simReadData();
  console.log("Req  - " );

//   simReadData((data) => {
//     console.log("callback called");

//     res.write(data);

//     res.end();

//     console.log("Res sent - " + Date.now());
//   });
});

server.listen(8080);

console.log("Node.js web server at port 8080 is running..");
