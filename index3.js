function showOddNumbers(){
    for(i=1;i<=10;i++){
        if(!(i%2==0)){
            console.log(i);
        }
    }
}
console.log(`odd numbers from 1 to 10 are:`);
showOddNumbers();