var data = "";
var lang = ["htlm", "css", "js"];
for (var i = 0; i < 3; i++) {
  data += "<li>" + lang[i] + "</li>";
}
document.querySelector("div ul").innerHTML = data;
console.log(document.querySelector("div ul"));
