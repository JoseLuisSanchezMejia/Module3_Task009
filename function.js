
//this is part I. We have two alternative solutions.  
//this is alternative A:
const checkNumber= function (number){
   if (number > 100){
  return true; 
   }
   else {
  return false;
   }
};

console.log(checkNumber(4.5));

//this is alternative B:
function check(number){
    if (number > 100){
     return true; 
    }
    else {
   return false;
    }
 };

 console.log(check(5));

//This is a function that produces something, namely it checks the number and validates it. Then it produces information in boolean format. 


//this is part II


const bouncer = function(age, numberPeople){
   let maxPeople=100;
   if (age < 18){
      return "this is a club for adults";
   }

   else if (age >18 && numberPeople < maxPeople){
         return "come in";     
   }
   else if (age >18 && numberPeople >= maxPeople){
      return "it's too busy now, come back later";
   }
};

console.log(bouncer(17, 50));
console.log(bouncer(27, 80));
console.log(bouncer(37, 101));



//This is a function that does something, namely it takes a admission decision.



//this is part III

const Average= function(n1, n2, n3, n4, n5){
   const calculation = Math.round((n1+n2+n3+n4+n5)/5);
   return calculation;
}

console.log(Average(1, 2, 3, 4, 5));
console.log(Average(5, 5, 5, 5, 5));
console.log(Average(15, 25, 35, 155, 75));
//this is a function that produces something. 