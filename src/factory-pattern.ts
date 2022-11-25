type validaOptions = "Email" | "Phone";
interface Ivalidate {
  Email?: string;
  phone?: string;
}
interface IBaseAuth {
  username: string;
  readonly email?: string;
  readonly phoneNumber?: string;
  validate(): void;
}
// Interfaces for Objects

interface Ilogin extends IBaseAuth {}

interface Iregister extends IBaseAuth {}

// Define variants for each object
class LoginByEmail implements Ilogin {
  readonly email;
  username: string = "";
  private emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;

  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }

  validate(): void {
    if (this.emailRegex.test(this.email)) {
      console.log("Email is valid");
    } else {
      console.log("Email is not valid");
    }
  }
}

class LoginByPhone implements Ilogin {
  username: string = "";
  readonly phoneNumber;
  phoneRegex = /^(\+98|0)?9\d{9}$/g;
  constructor(username: string, phone: string) {
    this.username = username;
    this.phoneNumber = phone;
  }

  validate(): void {
    if (this.phoneRegex.test(this.phoneNumber)) {
      console.log("Phone number is valid");
    } else {
      console.log("Phone number is not valid");
    }
  }
}

class RegisterByEmail implements Iregister {
  private emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
  username: string = "";
  readonly email;
  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }
  validate(): void {
    if (this.emailRegex.test(this.email)) {
      console.log("registeration done with valid email");
    } else {
      console.log("Registartion was not successfull");
    }
  }
}

class registerByPhone implements Iregister {
  username: string = "";
  readonly phoneNumber;
  phoneRegex = /^(\+98|0)?9\d{9}$/g;
  constructor(username: string, phone: string) {
    this.username = username;
    this.phoneNumber = phone;
  }
  validate(): void {
    if (this.phoneRegex.test(this.phoneNumber)) {
      console.log("Registration has done with valid phone numebr");
    } else {
      console.log("Registartion faild");
    }
  }
}

// Abstarct interface
interface IAuthFactory {
  createLogin(username: string, email?: string, phone?: string): Ilogin;
  createRegister(username: string, email?: string, phone?: string): Iregister;
}

class authByEmailFactory implements IAuthFactory {
  createLogin(username: string, email: string): Ilogin {
    return new LoginByEmail(username, email);
  }
  createRegister(username: string, email: string): Iregister {
    return new RegisterByEmail(username, email);
  }
}

class authByPhoneFactory implements IAuthFactory {
  createLogin(username: string, phone: string): Ilogin {
    return new LoginByPhone(username, phone);
  }
  createRegister(username: string, phone: string): Iregister {
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
