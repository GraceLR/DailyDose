

const organizeInstructors = function(instructors) {
    let result = {};

while (instructors.length > 0) {
    let tracker = [];
    result[instructors[0].course] = [];
    for (var i = 0; i < instructors.length; i++) {
        if(instructors[i].course === instructors[0].course) {
            result[instructors[0].course].push(instructors[i].name);
            tracker.push(i);
        }
    }
    for (var i = tracker.length-1; i >= 0; i--){
        instructors.splice(tracker[i],1);
    }
  }
  return result;
};

// const organizeInstructors = function(instructors) {
//     const result = {};

//     instructors.forEach(function({name, course}) {
//         if (result[course] === undefined) {
//             result[course] = [name];
//         } else {
//             result[course].push(name);
//         }
//     });

//     return result;
// }
  
  console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));