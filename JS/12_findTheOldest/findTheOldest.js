const findTheOldest = function(obj) {
  obj.forEach(person => person.yearsLived = person.yearOfDeath - person.yearOfBirth);

  obj.sort(function(a,b){
    return a.yearsLived > b.yearsLived ? -1:1;
  })
  let date = new Date()
  let currentYear = date.getFullYear() 
  return obj.reduce((oldest, currentPerson, index)=>{
    if(oldest.yearsLived > currentPerson.yearsLived) {
      return oldest;
    }
  else if(!currentPerson.yearOfDeath) {
      return currentPerson;
    }
    return oldest;
  }, obj[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
