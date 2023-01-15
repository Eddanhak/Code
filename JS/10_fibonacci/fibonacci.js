const fibonacci = function(numb) {

    let fibbArray = [0, 1];
    for(let i = 0; i < 28; i++){
      fibbArray[i+2] = fibbArray[i+1] + fibbArray[i]; 
    }
    if(parseInt(numb) < 0){
        return "OOPS";
    }else{
        return fibbArray[parseInt(numb)];
    }
};

// Do not edit below this line
module.exports = fibonacci;
