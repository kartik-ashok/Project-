const person = {
  name: "Kartik",
  id: 101,
  Place: "Dharwad",
};

for (let x in person) {
  x += x + person[x];
}
console.log(person);

for (let x in person) {
  console.log(x + " " + person[x]);

  //  p += person[x];
}
person.Place = "Bengaluru";
// console.log(p.Place);
console.log(person);
delete person.Place;
console.log(person);
// Math.
