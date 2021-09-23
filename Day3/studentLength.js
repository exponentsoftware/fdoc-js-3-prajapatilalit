const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

// a. Find the length of student object keys
const lengthOfKey = Object.keys(student).length;
console.log(lengthOfKey);
// b. Find the length of the student object values
const lengthOfValue = Object.values(student).length;
console.log(lengthOfValue);
// c. Find the length of skills object keys
const lengthOfSkillKey = Object.keys(student.skills).length;
console.log(lengthOfSkillKey);
// d. check if the student object has graphicDesign property
let checkProperty = Object.getOwnPropertyDescriptor(student, "graphicDesign");
if (checkProperty) {
  console.log("this property is found");
} else {
  console.log("Not found");
}
// e. Iterate the keys of the student object

Object.keys(student).map((key) => {
  console.log(key);
});
