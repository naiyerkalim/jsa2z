//Debouncing
let count =0;
const getData=()=>{
console.log("Fetching Data...",count++)
}

const doSomemagic= function(fn,d){
    let timer;
    return function(){
        let context= this, args=arguments;
        clearTimeout(timer)
         timer= setTimeout(()=>{
getData.apply(context, args)
        },d)
    }
}
const betterFunction= doSomemagic(getData, 300);