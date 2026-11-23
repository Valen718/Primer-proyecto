function checkAge(age){
    if(age >= 18){
        return "Pass";
    }else{
        return "Can't pass";
    }
}


const verify = checkAge(18);

console.log(verify);


function checkpassword(password){
    if(password === 1234){
        return "pass"
    }else{
        return "can't pass"
    }
}


const login = checkpassword(1234)
console.log(login)