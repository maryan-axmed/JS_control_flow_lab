/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

england = unitedKingdom[1];
england.touristAttractions = "Big Ben";

// console.log(england); 

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = unitedKingdom[2];
wales.capital = "Cardiff"
// console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = unitedKingdom[3];

// console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

scotlandPopulation = unitedKingdom[0].population;
for (i = 0; i < unitedKingdom.length; i++){
  if(unitedKingdom[i].population > scotlandPopulation){
    console.log(`${unitedKingdom[i].name} has a larger population than Scotland`)
  }else if(unitedKingdom[i].population === scotlandPopulation){
    console.log(`Scotland and ${unitedKingdom[i].name} have the same population`)
  }else if(unitedKingdom[i].population < scotlandPopulation){
    console.log(`Scotland has a larger population that ${unitedKingdom[i].name}`);
  }
}
//  this answer needs a single print and so the soloution is an if statement only.
