
const names=[`Guadalupe,`, `Ollie,`,`Aki,`];
let messages = [];
let eventName= "surprise"


 function writeCards(names, eventName) {
     
   for (let i =0; i < names.length; i++) {
    let message=`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;      
    //return [message];
  
   // return message;
   messages.push(message);
   
   

   
}
return messages; 
    
}
     
     


   function countDown() {
    for (var i = 10; i>= 0; i--) {
     console.log(i);
  
     }
     
    }