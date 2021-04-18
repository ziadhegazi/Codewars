// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum =0;
    let filtered = arr.filter(array = (arr) => {
  //     return  arr > 0? sum+=arr:sum+=0;
      return arr >0
    })
    console.log(sum);
    console.log (filtered);
  }

  //------OR------

  function positiveSum(arr) {
    let sum =0;
    let filtered = arr.filter(array = (arr) => {
  //     return  arr > 0? sum+=arr:sum+=0;
      return arr >0
    })
    console.log(sum);
    console.log (filtered);
  }