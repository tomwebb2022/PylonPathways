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

pylons.forEach((mapping1, i) => {
  pylons.forEach((mapping2, j) => {
    if (j <= i) return; //prevent AB and BA repeats on the console
    let pytho1 = mapping1.coordinates;
    let pytho2 = mapping2.coordinates;
    let distanceX = pytho2[0] - pytho1[0];
    let distanceY = pytho2[1] - pytho1[1];

    if (
      Math.hypot(distanceX, distanceY) <= 1.5 &&
      mapping1.name !== mapping2.name
    ) {
      console.log({ pylon1: mapping1.name, pylon2: mapping2.name }, "Success");
    } else {
      console.log(
        { pylon1: mapping1.name, pylon2: mapping2.name },
        "Unsuccessful"
      );
    }
    // next task, if the connection is unsuccessful then it will check the connection before to see if that was successful
  });
});
