//   WORD PROBLEM

// 1.A crime suspect is been investigated
// 2. for a chain of rubbery
//  3. that happened at different locations
//   4. in Ikeja.
//   5. The suspects visit
//  6.  to some of these location
//   7. over the past month is been tracked
//    8.. To further help this on going investigation,

// LOGIC PROBLEM

//    1 Write a script
//    2 that counts the frequency
//    3  of a given item/element
//    4   in an array
//  5 and returns its frequency.
//  6  For instance given an array of places
// 7   visited by the crime suspect in a month:

// ["market", "church", "office", "mall","gym", "bank", "saloon", "eatery", "spa", "club", "office", "airport", "gym", "eatery", market", "office", "mall", eatery", "spa", "market", "eatery", "saloon", "church", "office", "spa", "club", "office", "office", "mall", eatery", "gym", "bank", "saloon", "airport", "gym","eatery" ]

// . For this array the function will return frequency of 3 for the word "market".

//   Happy Hacking!!!

//   Note: Push your code to git when done.
//   Integrating html to allow investigator input place
//   and you display the frequency on the page would be a plus but not a must criteria.

const places = [
  "market",
  "church",
  "office",
  "mall",
  "gym",
  "bank",
  "saloon",
  "eatery",
  "spa",
  "club",
  "office",
  "airport",
  "gym",
  "eatery",
  "market",
  "office",
  "mall",
  "eatery",
  "spa",
  "market",
  "eatery",
  "saloon",
  "church",
  "office",
  "spa",
  "club",
  "office",
  "office",
  "mall",
  "eatery",
  "gym",
  "bank",
  "saloon",
  "airport",
  "gym",
  "eatery",
];

function track(places, items) {
  const record = {};
  places.forEach((items) => {
    if (record[items]) {
      record[items]++;
    } else {
      record[items] = 1;
    }
  });
  return record[items];
}
console.log(track(places, "eatery"));
              
          //  MR EMMANUEL CODE
          
const place = [
  "market",
  "church",
  "office",
  "mall",
  "gym",
  "bank",
  "saloon",
  "eatery",
  "spa",
  "club",
  "office",
  "airport",
  "gym",
  "eatery",
  "market",
  "office",
  "mall",
  "eatery",
  "spa",
  "market",
  "eatery",
  "saloon",
  "church",
  "office",
  "spa",
  "club",
  "office",
  "office",
  "mall",
  "eatery",
  "gym",
  "bank",
  "saloon",
  "airport",
  "gym",
  "eatery",
];

             const placeToCount = "club"
             let freq = 0
             for (let i=0; i<places.length;i++){
              if (places[i]===placeToCount)
                freq++;
              console.log("freg",freq);

             }