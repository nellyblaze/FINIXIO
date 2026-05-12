





var newColor = document.querySelector(".fa-angle-double-right");
var selectFunction = document.querySelector(".input-class");
newColor.classList.add("hidden");


selectFunction.onclick = function () {
    newColor.classList.remove("hidden")
}
// function respondToKey() {
//     newColor.classList.remove("hidden")
// }
// selectFunction.addEventListener("click", respondToKey)







// window.onload= function (){
//     document.querySelector("fa-angle-double-right").classList.add("hidden");
// }

// function respondToKey() {
//     document.querySelector("fa-angle-double-right").classList.remove("hidden")
// }
// document.querySelector("fa-angle-double-right").addEventListener("click", respondToKey)
// search-icon