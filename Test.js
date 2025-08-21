/*
Task
Come up with a plan to determine which masts can be within range of a another mast by 1.5
*/

const pylons = [
  { name: "A", coordinates: [0, 0] },
  { name: "B", coordinates: [1, 1] },
  { name: "C", coordinates: [2, 2] },
  { name: "D", coordinates: [3, 1] },
  { name: "E", coordinates: [4, 0] },
  { name: "F", coordinates: [5, 0] },
];
//console log should print "Successful connections (num), pairs of unsuccessful connections"
let connections = []; //saves these in an array to stop a massive list

pylons.forEach((mapping1) => {
  pylons.forEach((mapping2) => {
    let pytho1 = mapping1.coordinates;
    let pytho2 = mapping2.coordinates;
    let distanceX = pytho2[0] - pytho1[0];
    let distanceY = pytho2[1] - pytho1[1];
    console.log(Math.hypot(distanceX, distanceY));
    if (
      (Math.hypot(distanceX, distanceY) <= 1.5 &&
        mapping1.name !== mapping2.name) ||
      mapping2.name !== mapping1.name
    ) {
      //want to seperate if it's the same letter to not factor it in

      // console.log(mapping1.name, mapping2.name, "great success");

      connections.push({ pylon1: mapping1.name, pylon2: mapping2.name });

      console.log("Great success", connections.length);
      console.log("Not great success", connections);
    }
  });
});
