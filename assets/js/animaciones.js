var intervalID = window.setInterval(updateScreen, 200);
var console = document.getElementById("console");
const msg = document.querySelector(".loader .msg");
const face1 = document.querySelector("#face1");
const face3 = document.querySelector("#face3");

var txt = [
  "FORCE: XX0022. ENCYPT://000.222.2345",
  "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
  "RETRY: REINDEER FLOTILLA",
  "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
  "================================================",
  "Priority 1 // local / scanning...",
  "scanning ports...",
  "BACKDOOR FOUND (23.45.23.12.00000000)",
  "BACKDOOR FOUND (13.66.23.12.00110000)",
  "BACKDOOR FOUND (13.66.23.12.00110044)",
  "...",
  "...",
  "BRUTE.EXE -r -z",
  "...locating vulnerabilities...",
  "...vulnerabilities found...",
  "MCP/> DEPLOY CLU",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "SCAN: __ 0001.0000.0554.0550",
  "SCAN: __ 0012.0000.0553.0030",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
];

var docfrag = document.createDocumentFragment();

function updateScreen() {
  // Shuffle the "txt" array
  txt.push(txt.shift());
  // Rebuild document fragment
  txt.forEach(function(e) {
    var p = document.createElement("par");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  // Clear DOM body
  while (console.firstChild) {
    console.removeChild(console.firstChild);
  }
  console.appendChild(docfrag);
}

setTimeout(() => {
  msg.style.background = "limegreen";
  msg.innerHTML = "ACCESS GRANTED";
  msg.style.boxShadow = "0 0 30px limegreen";
  console.style.display = "none";
  face1.style.display = "none";
  face3.style.display = "block";
}, 2000);

window.addEventListener("load", function() {

    var loader = document.getElementById("loader");
    setTimeout(function() {
      loader.style.display = "none";
  
    }, 4000);
  });
  