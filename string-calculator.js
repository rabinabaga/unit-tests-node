function stringCalculator(testString) {
  //Approach 1:
  //split by , and loop through to add
  //if it is empty string, simply return 0
  let sum;
  sum = testString.length === 0 ? 0 : sumTheElements(testString);
  return sum;
}

function sumTheElements(testString) {
  const stringArray = testString.split(",");
  const sum = stringArray.reduce(
    (accumulator, element) => accumulator + Number(element),
    0
  );
  return sum;
}

module.exports = { stringCalculator };
