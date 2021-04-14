// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), 
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Test.describe("Basic Tests", () =>{
//     Test.assertEquals(quarterOf(3), 1)
//     Test.assertEquals(quarterOf(8), 3)
//     Test.assertEquals(quarterOf(11), 4)
//   });

const quarterOf = (month) => {
    // Your code here
    switch(month) {
      case 1:
      case 2:
      case 3:
        return 1;
        break;
      case 4:
      case 5:
      case 6:
        return 2;
        break;
      case 7:
      case 8:
      case 9:
        return 3;
        break;
      case 10:
      case 11:
      case 12:
        return 4;
        break;
      default:
        console.log("error");
    }
  }