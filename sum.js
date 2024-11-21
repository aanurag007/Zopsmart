function sum(a) {
    return function (b) {
      if (b === undefined) {
        return a; 
      }
      return sum(a + b); 
    };
  }
  
  
  console.log(sum(1)(2)(3)(4)(5)()); 
  console.log(sum(3)(7)());          
  console.log(sum(10)(20)(30)());    
  