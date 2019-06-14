
//Author: Bijay Ranabhat

//For DanpheIT

//TASK:
//Given three numbers X,Y &Z. Write a function that returns the median number without using array.

function medianOfThree(x,y,z) {
  
  //comparing to see if x is
  //in the middle
  if (((x-y)*(z-x))>=0){
    return x;
  }
  //comparing to see if y is
  //in the middle
  else if (((y-x)*(z-y))>=0){
    return y;
  }
  //remaining case
  else {
    return z;
  }
  
}

//testing
console.log(medianOfThree(3,6,1));