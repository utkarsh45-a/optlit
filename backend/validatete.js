import validator from "validator";

function validuser(data) {
  const mandatoryFields = ["username", "email", "password"];
  const isAllowed = mandatoryFields.every((k) => Object.keys(data).includes(k));

  if (!isAllowed) {
    return { valid: false, error: "Invalid fields" };
  }

  if (!validator.isEmail(data.email)) {
    return { valid: false, error: "Invalid email format" };
  }

  if (!(data.username.length >= 3 && data.username.length <= 20)) {
    return { valid: false, error: "Username must be between 3 and 20 characters" };
  }

  

  return { valid: true };

}

export default validuser;
