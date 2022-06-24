export default function validate(values) {
    let errors = {};
  
  
    // if (!values.username.trim()) {
    //   errors.username = "Username required";
    // }
  
    if (!values.username) {
      errors.username = "username required";
    } else if (!/\S+@\S+\.\S+/.test(values.username)) {
      errors.username = "Email address is invalid";
    }
    if (!values.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }
    return errors;
  }
  