export function emailValidation(input){
    return /^.+@.+\..+$/.test(input);
}

export function passwordValidation(input){
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/.test(input);
}