// Write your code here
function urlify(blogTitle){
  const punctuations = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
  const blogTitleWithoutPunctuations = blogTitle.replace(punctuations, "");
  
  return blogTitleWithoutPunctuations.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("Hey How are you doing!!!!"));
console.log(urlify("I Love programming."));