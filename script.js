let username = document.getElementById('Name');
        let password = document.getElementById('Password')
        let flag = 1;

        function validateform(){
            if(username.value == ""){
                document.getElementById('Usererror').innerHTML = "Username is empty"
                flag = 0;
            }else{
                document.getElementById('Usererror').innerHTML = "";
                flag = 1;
            }

            if(password.value == ""){
                document.getElementById('Passerror').innerHTML = "Password is empty";
                flag = 0;
            }else if(password.value.length < 6){
                document.getElementById('Passerror').innerHTML = "Password require minimum 6 character"
                flag = 0;
            }else{
                document.getElementById('Passerror').innerHTML = ""
                flag = 1;
            }

            if(flag){
                return true;
            }else{
                return false;
            }
        }