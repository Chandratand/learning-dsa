let counter = 0;
function inception() {
  // Base Case
  if (counter > 3) {
    return 'done!';
  }
  //recursive case
  counter++;
  return inception();
}

inception();

// 3 rules
// 1. identify the base case
// 2. identify the recursive case
// 3. get closer and closer and return when needed. usually we have 2 returns
