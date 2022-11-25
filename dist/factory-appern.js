"use strict";
// Define variants for each object
class LoginByEmail {
    constructor(username, email) {
        this.username = "";
        this.emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
        this.username = username;
        this.email = email;
    }
    validate() {
        if (this.emailRegex.test(this.email)) {
            console.log("Email is valid");
        }
        else {
            console.log("Email is not valid");
        }
    }
}
class LoginByPhone {
    constructor(username, phone) {
        this.username = "";
        this.phoneRegex = /^(\+98|0)?9\d{9}$/g;
        this.username = username;
        this.phoneNumber = phone;
    }
    validate() {
        if (this.phoneRegex.test(this.phoneNumber)) {
            console.log("Phone number is valid");
        }
        else {
            console.log("Phone number is not valid");
        }
    }
}
class RegisterByEmail {
    constructor(username, email) {
        this.emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
        this.username = "";
        this.username = username;
        this.email = email;
    }
    validate() {
        if (this.emailRegex.test(this.email)) {
            console.log("registeration done with valid email");
        }
        else {
            console.log("Registartion was not successfull");
        }
    }
}
class registerByPhone {
    constructor(username, phone) {
        this.username = "";
        this.phoneRegex = /^(\+98|0)?9\d{9}$/g;
        this.username = username;
        this.phoneNumber = phone;
    }
    validate() {
        if (this.phoneRegex.test(this.phoneNumber)) {
            console.log("Registration has done with valid phone numebr");
        }
        else {
            console.log("Registartion faild");
        }
    }
}
class authByEmailFactory {
    createLogin(username, email) {
        return new LoginByEmail(username, email);
    }
    createRegister(username, email) {
        return new RegisterByEmail(username, email);
    }
}
class authByPhoneFactory {
    createLogin(username, phone) {
        return new LoginByPhone(username, phone);
    }
    createRegister(username, phone) {
        return new registerByPhone(username, phone);
    }
}
// Phone factory
/// Create an instance of auth by phone factory
const phoneAuthFactory = new authByPhoneFactory();
/// Create an instance of login by phone
const loginWithPhone = phoneAuthFactory.createLogin("Torabi", "09336207447");
/// Validate login by phone number
loginWithPhone.validate();
// Email factory
/// Create an instance of auth by email factory
const emailAuthFactory = new authByEmailFactory();
/// Create an instance of login by email
const loginByEmail = emailAuthFactory.createLogin("Torabi", "torabi@gmail.com");
/// Validate login by email address
loginByEmail.validate();
//# sourceMappingURL=factory-appern.js.map