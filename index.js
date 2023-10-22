
let string = '';
let buttons = document.getElementById('buttons');

buttons.addEventListener('click', (event)=>{
   if(event.target.innerHTML == "="){
    string =eval(string);
    document.getElementById('input-field').value = string;
   }else if(event.target.innerHTML == 'C'){
    string = ""
    document.getElementById('input-field').value = string;
  }else{ 
    console.log(event.target)
    string = string + event.target.innerHTML;
    document.getElementById('input-field').value = string;
      }
})


