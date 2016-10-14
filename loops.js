function find(array, criteriaFunc) {
  for (let i = 0, l = array.length; i < l; i++) {
    if (criteriaFunc(array[i])) {
      return array[i];
    }
  }
}

// Find the first even number in an array
find([1, 1, 3, 1, 5, 6, 8, 10], (n) => n % 2 === 0); // 6
 
// Find the first string whose length is > 3
find(["dog", "cat", "horse", "mouse", "ant", "cow", "antelope"], (s) => s.length > 3); // "horse"



// Using 'continue' in a loop to skip
// Continue is particularly helpful when we need to apply a few different operations within one loop
// If at any point a given element doesn't need to enter into the operations,
// we can just continue with the rest of the elements in the iterable.
const scores = [3, 4, 10, 5, 11, 6];
 
// increment all scores < 10
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 10) {
    continue;
  }
 
  scores[i]++;
}
 
scores // [4, 5, 10, 6, 11, 7]
