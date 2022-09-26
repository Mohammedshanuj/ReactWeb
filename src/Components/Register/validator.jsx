
export const emailValidator = email => {
    if (!email) {
      return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return "Incorrect email format";
    }
    return "";
  };
  
  export const passwordValidator = password => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 8) {
      return "Password must have a minimum 8 characters";
    }
    return "";
  };
  
  export const confirmPasswordValidator = (confirmPassword, form) => {
    if (!confirmPassword) {
      return "Confirm password is required";
    } else if (confirmPassword.length < 8) {
      return "Confirm password must have a minimum 8 characters";
    } else if (confirmPassword !== form.password) {
      return "Passwords do not match";
    }
    return "";
  };
  export const userNameValidator = userName => {
    if (!userName) {
      return "Username is required";
    } else if (userName.length < 6) {
        return "Usename must have a minimum 6 characters";
      }
      else if (!new RegExp(/^[a-zA-Z\-]+$/).test(userName)) {
        return "Your username is not valid. Only characters A-Z, a-z and '-' are  acceptable.";
      }
    return "";
  };
  export const phoneValidator = phone => {
    if (!phone) {
      return "phone is required";
    } 
      else if (!new RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g).test(phone)) {
        return "Your phone number is not valid.";
      }
    return "";
  };