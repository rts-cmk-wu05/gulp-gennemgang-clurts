const localWriteBtn = document.querySelector(".localWrite")
const localReadBtn = document.querySelector(".localRead")
const localRemoveBtn = document.querySelector(".localRemove")
let readUsername;

let specialusername = {
    "name": "nissemand",
    "value": 42
}

console.log(specialusername)

localWriteBtn.addEventListener("click", function() {
    localstModule.create("username", specialusername)
})

localReadBtn.addEventListener("click", function() {
    let fnyf = localstModule.read("username")
    console.log(fnyf)
    console.log(fnyf.name)
    console.log(fnyf.value)

})

console.log(readUsername);

localRemoveBtn.addEventListener("click", function() {
    localstModule.remove("username")
})
