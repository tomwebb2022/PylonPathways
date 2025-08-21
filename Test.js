/*
Task
Come up with a plan to determine which masts can be within range of a another mast by 1.5
*/

const pylons = [
  //data given to me
  { name: "A", coordinates: [0, 0] },
  { name: "B", coordinates: [1, 1] },
  { name: "C", coordinates: [2, 2] },
  { name: "D", coordinates: [3, 1] },
  { name: "E", coordinates: [4, 0] },
  { name: "F", coordinates: [5, 0] },
];
let connections = [];
pylons.forEach((mapping1) => {
  pylons.forEach((mapping2) => {
    let pytho1 = mapping1.coordinates;
    let pytho2 = mapping2.coordinates;
    let distanceX = pytho2[0] - pytho1[0];
    let distanceY = pytho2[1] - pytho1[1];
    console.log(Math.hypot(distanceX, distanceY));

    if (Math.hypot(distanceX, distanceY) <= 1.5) {
      console.log(mapping1.name, mapping2.name, "great success");
      connections.push({ pylon1: mapping1.name, pylon2: mapping2.name });
      console.log(connections);
    }
    // console.log("mapping1", mapping1);
    // console.log("mapping2", mapping2);
  });
});
