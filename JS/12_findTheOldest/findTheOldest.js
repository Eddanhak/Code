



const findTheOldest = function(obj) {
  obj.forEach(function(person){
    if(person.hasOwnProperty("yearOfDeath")){
      console.log(person);
      person.yearsLived = person.yearOfDeath - person.yearOfBirth;
    }
    else {
      let date = new Date();
      let currentYear = date.getFullYear();
      person.yearsLived = currentYear - person.yearOfBirth;
    }
  });

  obj.sort(function(a,b){
    if(a.hasOwnProperty("yearsLived") && b.hasOwnProperty("yearsLived")){
      return a.yearsLived > b.yearsLived ? -1:1;
    }
  })
  return obj.reduce((oldest, currentPerson)=>{
    if(!currentPerson.hasOwnProperty("yearOfDeath")){
      
      }
    else if(oldest.yearsLived > currentPerson.yearsLived){
      return oldest;
    }
    else{
      return currentPerson;
    }
  },obj[0]);
}

// Do not edit below this line
module.exports = findTheOldest;
