const discount = document.getElementById('discount_p');
const original = document.getElementById('original_p');
const qty1=document.querySelector('.qty1');
const sub=document.querySelector('.sub');
const add=document.querySelector('.add');

const discount1 = document.getElementById('discount_p1');
const original1 = document.getElementById('original_p1');
const qty2=document.querySelector('.qty2');
const sub1=document.querySelector('.sub1');
const add1=document.querySelector('.add1');
const shipping = document.getElementById('shipping');
const total = document.getElementById('total');
const close =document.getElementById('close');
const warning = document.getElementById('warning');
const appear = document.getElementById('appear');
const btn = document.getElementById('btn');
const form = document.querySelector('form');




sub.addEventListener('click',()=>{
   
     if(qty1.innerText==='1'){
        
     }else if(qty1.innerText ==='2'){
        qty1.innerText= Number(qty1.innerText) - 1;
        discount.innerText = 54.99;
        original.innerText = 94.99;
        

     }else{
        qty1.innerText= Number(qty1.innerText) -1;
        discount.innerText = ((Number(discount.innerText) * 100) - 5499)/100;

        original.innerText = (((Number(original.innerText)*100) - 9499) / 100).toFixed(2);
     }

     total.innerText = (((Number(discount.innerText)*100) + (Number(discount1.innerText)*100))/100 + Number(shipping.innerText)).toFixed(2);
})

add.addEventListener('click',()=>{
    
     if(qty1.innerText ==='10'){
      alert('max limit execceds');

    }else{
              

       qty1.innerText=Number(qty1.innerText) + 1;
       discount.innerText = ((Number(discount.innerText)*100) + 5499)/100;

       original.innerText = ((Number(original.innerText)*100)  + 9499)/100;
    }
    total.innerText = (((Number(discount.innerText)*100) + (Number(discount1.innerText)*100))/100 + Number(shipping.innerText)).toFixed(2);
})




sub1.addEventListener('click',()=>{
   
    if(qty2.innerText==='1'){
       
    }else if(qty2.innerText ==='2'){
       qty2.innerText= Number(qty2.innerText) - 1;
       discount1.innerText = 74.99;
       original1.innerText = 124.99;

    }else{
       qty2.innerText= Number(qty2.innerText) - 1;
       discount1.innerText = (((Number(discount1.innerText) * 100) - 7499)/100).toFixed(2);

       original1.innerText = (((Number(original1.innerText)*100) - 12499) / 100).toFixed(2);
    }
    total.innerText = (((Number(discount.innerText)*100) + (Number(discount1.innerText)*100))/100 + Number(shipping.innerText)).toFixed(2);
})

add1.addEventListener('click',()=>{
   
    if(qty2.innerText ==='10'){
     alert('max limit execceds');

   }else{
             

      qty2.innerText=Number(qty2.innerText) + 1;
      discount1.innerText = ((Number(discount1.innerText)*100) + 7499)/100;

      original1.innerText = ((Number(original1.innerText)*100)  + 12499)/100;
   }

   total.innerText = (((Number(discount.innerText)*100) + (Number(discount1.innerText)*100))/100 + Number(shipping.innerText)).toFixed(2);
})

form.addEventListener('submit',function(e){
    e.preventDefault()

    const formValues = {};
    for(let i = 0; i<e.target.length-2;i++){
        formValues[e.target[i].name]=e.target[i].value;
    }
    
    const unFilled = [];
    for(const[key,value] of Object.entries(formValues)){
        if(value === ""){
            unFilled.push(key);
        }  
    }
    let str=""
    if(unFilled.length>0){

     str = `${unFilled.join(", ")} are required.`
     warning.innerText=str;
     if(appear.classList.contains('bg-green-900/90')){
        appear.classList.remove('bg-green-900/90');
     }
     appear.classList.add('bg-black');

     
    }else{
        str="Your order is placed."
        warning.innerText=str;
        
        if(appear.classList.contains('bg-black')){
            appear.classList.remove('bg-black');
        }
        
        appear.classList.add('bg-green-900/90');
        
    }
    appear.classList.remove('translate-x-[100rem]');
    appear.classList.add('translate-x-0');
    setTimeout(()=>{
        appear.classList.remove('translate-x-0');
    appear.classList.add('translate-x-[100rem]');
     },5000);
});

close.addEventListener('click',function(){
    appear.classList.remove('translate-x-0');
    appear.classList.add('translate-x-[100rem]');
   
});

document.body.addEventListener('keypress',function(e){
    if(e.key ==='Enter'){
        btn.click();
    }
})