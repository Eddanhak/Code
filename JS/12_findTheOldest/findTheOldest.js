const findTheOldest = function(obj) {
        obj.forEach(person => person.yearsLived = person.yearOfDeath - person.yearOfBirth);
      
        let sortedYearsLived = obj.sort(function(a,b){
          let firstPerson = a.yearsLived;
          let nextPerson = b.yearsLived;
          return firstPerson > nextPerson ? -1:1;
        });
        return obj[0].name;
};

// Do not edit below this line
module.exports = findTheOldest;
