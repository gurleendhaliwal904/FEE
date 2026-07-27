localStorage.setItem("name","gurleen");
localStorage.setItem("lastname","dhaliwal");
const name=localStorage.getitem("name");
console.log(typeof(name));
const details={
    name:"gurleen",
    lastname:"dhaliwal"
};
localStorage.getItem("d",JSON.stringify(details));
const getob=JSON.parse(localStorage.getItem("d"));
console.log(getob);