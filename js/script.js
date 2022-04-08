let $ = document;

let bodyTag = $.body;
let starterText = $.querySelector("#starter");
let headingTag = $.querySelector("#heading");
let assciTag = $.querySelector("#ascii");
let infoTag = $.querySelector("#infos");

let userKeyCode = $.querySelector("#keyCode");
let userKey = $.querySelector("#key");
let userKeylocation = $.querySelector("#location");
let userWhich = $.querySelector("#which")
let userEventCode = $.querySelector("#code")

function showCode(event){
    event.preventDefault();
    starterText.style.display = "none";
    headingTag.style.display = "flex";
    assciTag.style.display = "flex";
    infoTag.style.display = "flex";
    userKeyCode.innerHTML = event.keyCode;

    if(event.code === "Space"){
        userKey.innerHTML = "Space";
        $.title = "Javascript KeyCode - Space"; 
    } else {
        userKey.innerHTML = event.key;
        $.title = "Javascript KeyCode - " + event.key;
    }

    userKeylocation.innerHTML = event.location;
    userWhich.innerHTML = event.which;
    userEventCode.innerHTML = event.code;
}

bodyTag.addEventListener("keydown",showCode);