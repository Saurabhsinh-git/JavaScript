class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}saurabhsinh`
    }

    set password(value){
        this._password = value
    }
}

const saurabhsinh = new User("h@saurabhsinh.ai", "abc")
console.log(saurabhsinh.email);