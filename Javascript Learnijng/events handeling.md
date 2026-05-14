#events handeling using js


for eg:
let btn1 = document.querySelector("#btn1);

btn1.onclick = (evt) => {
    console.log("btn1 was clicked...);
}

that evt in () is event object.
# Mouse events

onclick
ondbclick, etc

# event listeners:
btn1.addEventListeners("click" , () => {
    console.log("button1 was clicked");
})

