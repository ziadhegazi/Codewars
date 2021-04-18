// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function that determines whether 
// a string that contains only letters is an isogram. Assume the empty string is an isogram. 
// Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str){
    str = str.toLowerCase();
    let status = true;
    for (let i = 0; i < str.length; i++) {
      for (let j = i+1; j < str.length; j++) {
        if (str[i] === str[j]) {
          console.log(str[j]);
          status = false;
        }
      }
    }
    console.log(status);
    return status;
  }