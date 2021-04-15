// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let arr = [];
    let word = [];
    let min;
    for (i of s+" ") {
      if (i !== " ") {
        word.push(i);
  //       console.log(word);
      }
      else if ((i == " ") || (i == s[s.length-1])) {
        word = word.join("");
  //       console.log(word);
        arr.push(word);
        if ((min > word.length) || (min == undefined)) {
          min = word.length;
        }
        word = [];
      }
    }
  //   console.log(s[s.length-2]);
    console.log(arr);
  //   console.log(min);
    return min;
  }