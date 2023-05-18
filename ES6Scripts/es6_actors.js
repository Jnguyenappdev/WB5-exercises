const academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// Who is the Academy Member whose ID is 187?

const AM187 = academyMembers.find((member) => member.memID === 187);
console.log(AM187.name);

console.log("-------------------------------");

// Who has been in at least 3 films?

const films3 = academyMembers.filter((member) => member.films.length >= "3");
films3.forEach((member) => {
  console.log(member.name);
});

console.log("-------------------------------");

// Who has a name that starts with "Bob"?

const nameBob = academyMembers.filter((member) =>
  member.name.startsWith("Bob")
);
nameBob.forEach((member) => {
  console.log(member.name);
});

console.log("-------------------------------");

// HARDER: Which Academy Members have been in a film
// that starts with "A"

const actorsInFilmsThatStartWithA = academyMembers.filter((member) =>
  member.films.find((film) => film.startsWith('A'))
);

actorsInFilmsThatStartWithA.forEach((actor) => console.log( actor.name));