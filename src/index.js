// Dynamic Date 
let d = new Date();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
console.log(months)
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
d.setDate(-5);

document.getElementById("date").innerHTML = (days[d.getDay()]+", "+months[d.getMonth()]+ " " + 26 + ", " + d.getFullYear())

// Dynamic Header 
let theHeader = "Welcome to"

document.getElementById("header").innerHTML = (theHeader)

// Welcome Message 
onload(alert("Welcome to hear.com"))

// Pulling form data 
let formData = new FormData(document.querySelector("form"))