//1
function countFromOne(num){
    for(let i = 1; i <= num; i++){
      console.log(i)
}
//countFromOne()

//2
function countEveryOdd(){
    for(let i = 1; i < num; i++){
        if(1 % 2 === 0){
            console.log(i)
        }
    }
}
//countEveryOdd()

//3
function isNegative(){
  if (num < 0){
    return 'true';
  }else{ 
    return 'false';
  }
}

//console.log(isNegative())
//4
function betweenFiveAndTwenty(num){
    if(num >= 5 && num <= 20){
        return true;
    }else{
       return false;
    }
}
console.log(betweenFiveAndTwenty(65))
  
//5
function isAllLowerCase(str){
    const lowercase = str.toLowerCase()
    if(lowercase === str){
        return true
    }else{
        return false
    }
} 

//console.log(isAllLowerCase('hey'))

//Bonus(6)
