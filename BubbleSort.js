var testArray = [9, 4, 10, 6, 8, 7, 3, 1, 5, 2]
var isSorted = false;
var lastUnsorted = testArray.length - 1;

while(!isSorted) {
  isSorted = true;
  for (var i = 0; i < lastUnsorted; i++) {
    if (testArray[i] > testArray[i + 1]) {
      var temp = testArray[i];
      testArray[i] = testArray[i + 1];
      testArray[i + 1] = temp;
      isSorted = false;
    }
  }
  lastUnsorted--
}

console.log(testArray);
