// // -----------------Login Module----------------
// let x = "Nauman"
// let y = "1960"
// function clickData() {
//     let ip1 = document.getElementById("email").value
//     let ip2 = document.getElementById("Password").value
//     if (ip1 === x && ip2 === y) {
//         window.location.href = "Home.html";
//     }
//     else {
//         let validate = document.getElementById("message1").innerHTML = "Invalid Login or Password"

//     }
// }
// // ---------------Offline Status------------
// let date = new Date();
// let hours = date.getHours();
// let pre = hours > 12 ? "PM" : "AM"
// let a = document.getElementById("status_value");
// function statusCheck() {
//     if (hours >= 9 && hours <= 11) {
//         a.style.backgroundColor = "#FF0000";
//         a.innerHTML = "Offline";
//     }
// }
// statusCheck();

// -----------------Contact Form--------------
function contact() {
    let name = document.getElementById("contactName").value
    let email = document.getElementById("contact_email").value
    let subject = document.getElementById("contact_subject").value
    let message = document.getElementById("contact_message").value
    
    let url="https://wa.me/923314911420?text="
    +"Client Name: "+ name +"%0a"
    +"Client Email: "+ email +"%0a"
    +"Client Subject: "+ subject +"%0a"
    +"Client Message: "+ message +"%0a"
    +"It's humble request to contact me as early as possible"

    window.open(url,'_blank').focus()

}


