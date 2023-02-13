const jedi = [];
jedi [0] = "Luke";
jedi.push("Obi-Wan Kenobi");
jedi.unshift("Yoda");
console.log(jedi[1]);
jedi.pop();
console.log(jedi.shift());
console.log(jedi);

const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);
console.log
// 2d. Using the slice method on the starWarsVillains array display an array that contains "Darth Vader" and "Darth Sidious" in the terminal/console (You will need a console log for this)
// 3a. Create a const variable called droids and set the value to an object with the following key value pairs (astromech: "R2-D2"), (protocol: "C-3PO"), and (assassin: "IG-88")
// 3b. Display "R2-D2" from the droids variable/object in terminal/console using square brackets "[]" (You will need a console log for this)
// 3c. Display "C-3PO" from the droids variable/object in terminal/console using dot "." (You will need a console log for this)
// 3d. In the droids variable/object change the "IG-88" value to "IG-11"

// BONUS
// 4. Using indexes display the "V" from "Darth Vader" from the starWarsVillains array (You will need a console log for this)
// 5. Using only negative numbers display "Darth Sidious" from the sithLords array using Slice (You will need a console log for this)
// 6a. Create a const variable named starWarsMovies and set the value to an array of three objects (AKA An array with three items in it and each item is a separate object). Use the following keys and values for each object in the array: 1st OBJECT (episodeOne: "The Phantom Menace", episodeTwo: "Attack of the Clones", and episodeThree: "Revenge of the Sith"). 2nd OBJECT (episodeFour: "A New Hope", episodeFive: "The Empire Strikes Back", and episodeSix: "Return of the Jedi"). 3rd OBJECT (episodeSeven: "The Force Awakens", episodeEight: "The Last Jedi", and  episodeNine: "The Rise of Skywalker"). I would suggest using some copy and paste on this one.
// 6b. Using an array method add the following string values ("Solo" and "Rogue One") as items in the starWarsMovies array between the 1st and 2nd objects (AKA Items) in the starWarsMovies array.