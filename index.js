var ac_uname = "Raiyan khan";
var ac_pass = "baka";
var ac_email = "raiyan.zoom@gmail.com"

function login() {
    var uname;
    var pass;
    var email;
    uname = document.getElementById("user_name").value;
    pass = document.getElementById("password").value;
    email = document.getElementById("email").value;

    if (ac_uname != uname && ac_pass != pass) {
        window.alert("Username,password  and email is incorrect");
        return false;
    }


    if (ac_uname == uname) {
        if (ac_pass == pass) {
            if (ac_email == email) {
                window.alert("Login successful");
                window.location = 'file:///var/www/html/home.html';
                return true;
            } else {
                window.alert("Email is incorrect")
                return false;
            }
        } else {
            window.alert('Password is inrorrect');
            return false;
        }
    } else {
        window.alert('Username is inrorrect');
        return false;
    }
}