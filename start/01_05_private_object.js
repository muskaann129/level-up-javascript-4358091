const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username] : "muskaann.129",
  [password] : "highlysecuredpassmuskan",
  age : 17
}

// by applying the square brackets the symbol item becomes private and do not show the value of the item 

console.log(user.username);
console.log(user.password);