
//Author: Bijay Ranabhat

//For DanpheIT

/*TASK:
Loop over a string of arbitrary length, and count the occurrence of each character in the string.
Eg: Input: “hello how are you”. Output: h:2, e:2, o:3, l:2, w:1, r:1, y:1
*/


//provide a sample string as a parameter
function charCount(sample){
  
  //removing every whitespace from the sample string
  //so that we don't count the number of spaces
  let str= sample.replace(/\s/g, "");
  
  // mapping the character count
  let counts = {};
  
  // declaring some vars
  let co, len, count;
  
  i=0;
  len = str.length;
  
  // Loop through the string
  for (; i < len; ++i) {
    
      // Get this character
      co = str.charAt(i); 
  
      // Get the count for it
      count = counts[co];
  
      // using ternary
      // If we have one, store that count plus one; if not, store one
      counts[co] = count ? count + 1 : 1;
  }
  
  for (co in counts) {
      console.log(co + ": " + counts[co]);
  }
}
//testing
charCount("bijay ranabhat")