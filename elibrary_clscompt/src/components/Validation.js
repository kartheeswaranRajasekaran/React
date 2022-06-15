export function emailValidation(input){
    return /^.+@.+\..+$/.test(input);
}

export function passwordValidation(input){
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,30}$/.test(input);
}

export function FirstnameValidation(input){
  return /^(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(input);
}
export function LastnameValidation(input){
  return /^(?=.*[a-z])(?=.*[A-Z]).{1,15}$/.test(input);
}