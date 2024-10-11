function add(numbers) {
  if (!numbers) return 0; // Return 0 for empty string
  return numbers
    .split(",")
    .map((x) => parseInt(x))
    .reduce((a, b) => a + b, 0); // Start with 0 to handle single element properly
}

function hello(){
  return "Hello"
}

module.exports = {add, hello}; 