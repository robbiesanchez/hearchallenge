var d = new Date();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
console.log(months)
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
d.setDate(-5);

document.getElementById("date").innerHTML = (days[d.getDay()]+", "+months[d.getMonth()]+ " " + 26 + ", " + d.getFullYear())
