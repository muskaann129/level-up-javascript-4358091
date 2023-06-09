// Write your code here
function checkPassword(password){
  let oneLowerCaseLetter = /(?=.+[a-z])/;
  let oneUpperCaseLetter = /(?=.+[A-Z])/;
  let oneDigit = /(?=.+[0-9])/;
  let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
  let miminumEightCharacter = /(?=.{8,})/;
  let isValid = 
  oneLowerCaseLetter.test(password) &&
  oneUpperCaseLetter.test(password) &&
  oneDigit.test(password) &&
  oneSpecialCharacter.test(password) &&
  miminumEightCharacter.test(password);

  return isValid ? "Your password is valid" : "Invalid Password";
}

console.log(checkPassword("JDjd56#hdc"));
console.log(checkPassword("Muskan"));