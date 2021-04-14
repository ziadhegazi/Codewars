// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    //your code here
    const even = [];
    const odd = [];
    for (let int of integers){
      if (int % 2 == 0){
        even.push(int);
      }else {
        odd.push(int);
      }
    }
    if (even.length > 1) {
      console.log(odd);
      return odd[0];
    }else {
      console.log(even);
      return even[0];
    }
  }

//   -----OR-----

function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }