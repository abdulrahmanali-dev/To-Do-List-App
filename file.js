// variables :
// colors :  #0e5b42

document.body.style =
  "background-color:#eee;margin:0px;padding:0px; font-family: Tahoma, Verdana, Segoe, sans-serif;";

let myHeader = document.createElement("header");
myHeader.className = "header";
myHeader.style =
  "background-color: white; height:30px; padding:20px; display:flex; justify-content:space-between; align-items: center; ";
document.body.appendChild(myHeader);

let myLogo = document.createElement("div");
let myLogoText = document.createTextNode("Abdulrahman III");
myLogo.append(myLogoText);
myLogo.className = "logo";
myLogo.style = "color:green;font-weight:800; font-size:25px ";
myHeader.appendChild(myLogo);

let myUl = document.createElement("ul");
myUl.className = "menu";
myUl.style = "padding:0px;margin:0;list-style:none;display:flex;";
myHeader.appendChild(myUl);

let myLiOne = document.createElement("li");
let myLiOneText = document.createTextNode("Home");
myLiOne.append(myLiOneText);
myLiOne.style = "padding-right:15px";
myUl.appendChild(myLiOne);

let myLiTwo = document.createElement("li");
let myLiTwoText = document.createTextNode("About");
myLiTwo.append(myLiTwoText);
myLiTwo.style = "padding-right:15px";
myUl.appendChild(myLiTwo);

let myLiThree = document.createElement("li");
let myLiThreeText = document.createTextNode("Services");
myLiThree.append(myLiThreeText);
myLiThree.style = "padding-right:15px";
myUl.appendChild(myLiThree);

let myLiFour = document.createElement("li");
let myLiFourText = document.createTextNode("Contact");
myLiFour.append(myLiFourText);
myLiFour.style = "padding-right:15px";
myUl.appendChild(myLiFour);

let contentDiv = document.createElement("div");
contentDiv.className = "content";
contentDiv.style =
  "padding:10px; display:flex;flex-wrap:wrap;min-height:calc(100vh - 70px);box-sizing:border-box;";
document.body.appendChild(contentDiv);

for (let i = 1; i <= 15; i++) {
  let myProduct = document.createElement("div");
  myProduct.style =
    "border-radius:10px; background-color:white;width:250px;height:100px;margin:20px;padding:20px;text-align:center";

  let myProductSpan = document.createElement("span");
  myProductSpan.style =
    "font-size:40px;font-weight:normal;display:block;margin-bottom: 10px;margin-top:10px";
  let myProductSpanText = document.createTextNode(i);
  let porductText = "Product";
  myProductSpan.append(myProductSpanText);
  myProduct.append(myProductSpan);
  myProduct.append(porductText);
  contentDiv.appendChild(myProduct);
}

let myFooter = document.createElement("footer");
myFooter.className = "footer";
myFooter.style =
  "background-color:green;font-size:20px;color:white;text-align:center;padding:20px";
document.body.appendChild(myFooter);

let myFooterText = document.createTextNode("Copyright 2022");

myFooter.append(myFooterText);
