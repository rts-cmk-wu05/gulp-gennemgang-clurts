const cookiebtn = document.querySelector(".cookiebtn");
const readbtn = document.querySelector(".readbtn");
let theCookies = ""

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

cookiebtn.addEventListener("click", function() {
    let expdate = new Date()
    //expdate.setTime
    document.cookie = "username=nissemand; expires=Sat, 17 Apr 2021 12:00:00 GMT"
    document.cookie = "realname=Santa Claus; expires=Sun, 18 Apr 2021 12:00:00 GMT"
})

readbtn.addEventListener("click", function() {
    theCookies = getCookie("username");
    console.log(theCookies)
})



