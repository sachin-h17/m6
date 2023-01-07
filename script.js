let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

let newArr = [
  { id: 5, name: "king", age: "28", profession: "lawyer" },
  { id: 6, name: "lee", age: "21", profession: "salesmen" },
  { id: 7, name: "oggy", age: "24", profession: "operation" },
];



// console.log all the employees who have the profession of a developer using the map function.
function PrintDeveloperswithMap(user) {
  // Write your code here
  arr.map((item) => {
    if(item.profession == "developer"){
      console.log(item);
    }
   })
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach((item) => {
   if(item.profession == "developer"){
    console.log(item);
   }
  })
}

function addData() {
  //Write your code here
  arr.push({ id: 4, name: "daniel", age: "25", profession: "SDE" });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
 arr = arr.filter((item) => item.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here
  const add = arr.concat(newArr);
  console.log(add);
}
