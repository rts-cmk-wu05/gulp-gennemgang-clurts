const localst = document.querySelector(".localst")

let specialusername = "nissemand"

console.log("hello from localst")
localStorage.setItem("username", specialusername)

let readUsername = localStorage.getItem("username")

console.log(readUsername);

localst.addEventListener("click", function() {
    localStorage.removeItem("username")
})
