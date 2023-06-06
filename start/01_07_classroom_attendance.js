// Write your code here

function getStudents(classroom){
  let {hasTeachingAssistant, classList} = classroom;
  let teacher, teachingAssistant, students;

  if(hasTeachingAssistant){
    [teacher, teachingAssistant, ...students] = classList
  }
  else{
    [teacher, ...students] = classList;
  }
  return students;
}

// no teaching assistant
console.log(getStudents({
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Lukas"]
}));

// has teaching assistant
console.log(getStudents({
  hasTeachingAssistant: true,
  classList: ["Rashida", "John", "Roman", "Lisa", "Lukas", "Mona", "Ruby"]
}));