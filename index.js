function isPalindrome(word) {
  // Write your algorithm here
  let backwards = word.length - 1;

  //console.log(backwards);
  // word.split(' ');
  // word.reverse();
  // word.join('');
  // console.log(word)

  for(let i = 0; i < backwards/2; i++){
    let x = word[i];
    let y = word[backwards - i]

    if(x != y){
      return false;
    }
    
  }
  return true;
    
  
  
}
console.log(isPalindrome('robot'));
/* 
  Add your pseudocode here
we want to take in a string
then we want to check the characters of that string from front to back and from back to front
if same return  true,
if false return false
*/

/*
  Add written explanation of your solution here
*/

//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
