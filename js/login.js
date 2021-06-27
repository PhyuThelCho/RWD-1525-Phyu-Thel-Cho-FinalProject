let name, password; //Declare the variable
let isNameScuueed, isPassordSucceed = false;

let user={
    name: 'phyu',
    password: '12345678'
}

//When user click the sign in button
//Validation for user login with pre-defined user info
function validate(){
    console.log('User click SIGN IN button.')
    name = document.getElementById('name').value;
    password = document.getElementById('password').value;

    if(user.name == name){
        //Check username success
        isNameScuueed = true;
    
    }
    else{
        window.alert("Please type your username!");

    }
    if(user.password == password){
        //Check password success
        isPassordSucceed = true;
    }
    else{
        window.alert("Please type your password!");
    }
    if(isNameScuueed && isPassordSucceed){
        //If aucthentication succeed, login to admin panel
        window.location.replace('../admin_panel.html');
    
        //Store authentication info to the local storage until user logout
        window.localStorage.setItem('name', JSON.stringify(name));
        window.localStorage.setItem('password', JSON.stringify(password));

        
    }
    else{
        //If authentication fail, display error message
        console.log('Incorrect username & password!');
        window.alert("Try again! Incorrect username and password");
    }

}
function logout(){
    window.localStorage.removeItem('name', JSON.stringify(name));
    window.localStorage.removeItem('password', JSON.stringify(password));

}

