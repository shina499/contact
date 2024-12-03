let addBtn = document.getElementById("add")
let username = document.getElementById("first-name")
let userLastname = document.getElementById("last-name")
let userPhoneNumber = document.getElementById("phone-number")
let i = 0



addBtn.addEventListener("click" , iw =>{
    iw.preventDefault()

    let namevalue = username.value
    let lastnameValue = userLastname.value
    let phoneValue = userPhoneNumber.value

    if (namevalue.length<4 || lastnameValue.length<4 || phoneValue.length<7) {
        console.log(false);
        alert("please fill out inputs")
    }else{
        let newObj = {
            name:namevalue,
            lastname:lastnameValue,
            phone:phoneValue,
            index:i
        }
        addTols(newObj)
        i++
        cls()
    }
})

function cls(){
    username.value = ""
    userLastname.value = ""
    userPhoneNumber.value = ""
}
function addTols(o) {
    let usersArray = JSON.parse(localStorage.getItem("contact")||`[]`)
    usersArray.push(o)
    localStorage.setItem(`contact` , JSON.stringify(usersArray))
}