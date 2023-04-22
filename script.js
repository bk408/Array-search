let data = [5, 45, 39, 29, 76, 830];
let items = 29;
let position= undefined;


for(let i=0; i<data.length; i++){
   // console.log(data[i])
   if(data[i]===items){
    position= i;
   }

}

console.log(position);