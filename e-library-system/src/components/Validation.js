export function emailValidation(input){
    return /^.+@.+\..+$/.test(input);
}

export function passwordValidation(input){
  return /^[a-zA-Z0-9!@#$%^&*]{8,19}$/.test(input);
}
export function fNameValidation(input){
  return /^(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(input);
}
export function lNameValidation(input){
  return /^(?=.*[a-z])(?=.*[A-Z]).{1,10}$/.test(input);
}
