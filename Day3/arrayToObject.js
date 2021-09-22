const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = (studentData) => {
  studentData.forEach((item1) => {
    const objectArray = {
      name: item1[0],
      skills: item1[1],
      scores: item1[2],
    };
    return console.log(objectArray);
  });
};

convertArrayToObject(students);
