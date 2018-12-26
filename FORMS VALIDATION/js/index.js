function validateForm() {
    var address = document.forms["myForm"]["address-name"].value;
    var email = document.forms["myForm"]["email-name"].value;
    var password = document.forms["myForm"]["password-name"].value;
    var comments = document.forms["myForm"]["comments-name"].value;
    if (address == "") {
      alert("Address must be filled out");
      return false;
    }
    else if (email == "") {
        alert("Email must be filled out");
        return false;
      }
    else if (password == "") {
        alert("Password must be filled out");
        return false;
      }
      else if (comments == "") {
        alert("Comments must be filled out");
        return false;
      }  
      
  }

  function validatePassword(){
    var password = document.forms["myForm"]["password-name"].value;
    if (password.length < 8) {
      alert("The password has less than 8 characters");
      return false;
    }
  }

  function ValidateEmail() {
    var email = document.forms["myForm"]["email-name"].value;
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var found = email.match(regex);
    if (found != null)
    {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function verifyPassword() {
  var password = document.forms["myForm"]["password-name"].value;
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
  var found = password.match(regex);
  if (found != null)
  {
      return (true)
  }
  alert("You have entered an invalid password!")
  return (false)
}

