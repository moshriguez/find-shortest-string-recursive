// Paste your iterative and recursive solutions in this file
// And then calculate their average run times to compare them.

function findShortestStringRecursive(arr) {
  if (arr.length === 1){
    return arr[0]
  }
  if (arr[0].length <= arr[1].length) {
    return findShortestStringRecursive([arr[0], ...arr.slice(2)])
  } else {
    return findShortestStringRecursive(arr.slice(1))
  }
}

function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback();
  }

  return (Date.now() - startTime) / 1000;
}

console.log(benchmark(findShortestStringRecursive))
