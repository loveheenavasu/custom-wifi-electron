// const { virtualKeyboard } = require("virtual-keyboard");

var WiFiControl = require("wifi-control");
let list = document.getElementById("wifiList");
let wifiName = document.getElementById("wifiName");
let dialog = document.getElementById("favDialog");
let password = document.getElementById("input");
let submitBtn = document.getElementById("confirmBtn");
let cancelBtn = document.getElementById("cancelBtn");
const wfiname = document.getElementById("wifiname");

WiFiControl.init({
  debug: true,
});

//  Try scanning for access points:
WiFiControl.scanForWiFi(function (err, response) {
  if (err) console.log(err);
  console.log(response);
  response?.networks?.map((item) => {
    const mainnode = document.createElement("div");
    const node = document.createElement("li");
    const nodeicon = document.createElement("i");
    // const nodebtn = document.createElement("button");
    const textnode = document.createTextNode(item?.ssid);
    // const textbtn = document.createTextNode("connect");
    nodeicon.classList.add("fa");
    node.classList.add("wifiname");

    nodeicon.classList.add("fa-wifi");
    // nodebtn.setAttribute("onClick", "cntBtn");
    node.appendChild(nodeicon);
    node.appendChild(textnode);
    // nodebtn.appendChild(textbtn);
    mainnode.appendChild(node);
    // mainnode.appendChild(nodebtn);
    list.appendChild(mainnode);

    node.addEventListener("click", function () {
      dialog.showModal();
      console.log("hello world", item.ssid);
      wifiName.innerHTML = item.ssid;
    });
  });
});

submitBtn.addEventListener("click", function () {
  var _ap = {
    ssid: wifiName.textContent,
    password: password.value,
  };
  var results = WiFiControl.connectToAP(_ap, function (err, response) {
    if (err) console.log(err, "error");
    console.log(response, "response");
    alert(response?.msg);
    if (response?.success == true) {
      console.log("tre");
      let nodestatus = document.createElement("span");
      const statustext = document.createTextNode("Connected");
      nodestatus.appendChild(statustext);
      // wfiname.appendChild(nodestatus);
    }
  });
  dialog.close();

  console.log(password.value, "password");
  console.log(wifiName.textContent, "ssid");
});
cancelBtn.addEventListener("click", function () {
  dialog.close();
});
