document.getElementById("btn1").addEventListener("click",function(){
    var textBox = document.getElementById("a1").value;
    if(textBox>=1){
     textBox--;
     document.getElementById("a1").value=textBox;}
total1();
total_price();
})
document.getElementById("btn2").addEventListener("click",function(){
     var textBox = document.getElementById("a1").value;
textBox++;
document.getElementById("a1").value=textBox;
total1();
total_price();
})

//end of section1//
document.getElementById("btn3").addEventListener('click',function(){
    var textBox = document.getElementById("a2").value;
    if(textBox>=1){
     textBox--;
     document.getElementById("a2").value=textBox;}
     total2();
     total_price();
})
document.getElementById("btn4").addEventListener("click",function(){

    var textBox = document.getElementById("a2").value;
    textBox++;
    document.getElementById("a2").value=textBox;
 total2();
 total_price();

})


document.getElementById("btn5").addEventListener("click",function(){
    var textBox = document.getElementById("a3").value;
    if(textBox>=1){
     textBox--;
     document.getElementById("a3").value=textBox;}
total3();
total_price();

})
document.getElementById("btn6").addEventListener("click",function(){
     var textBox = document.getElementById("a3").value;
textBox++;
document.getElementById("a3").value=textBox;
total3();
total_price();

})
    

// the remove btns//  
let menu = document.getElementById('parent');
let item1=document.getElementById('1')
function remove(){
    menu.removeChild(item1)
}
let menu2 = document.getElementById('parent');
let item2=document.getElementById('2')
function remove2(){
    menu2.removeChild(item2)
}
let menu3 = document.getElementById('parent');
let item3=document.getElementById('3')
function remove3(){
    menu3.removeChild(item3)
}
// the heart btns// 
function heart1(){
    let like1=document.getElementById('heart1')
    
    if(like1.style.color=='black'){
        like1.style.color='#DC143C'
    }else{
        like1.style.color='black'
    }
    
}
function heart2(){
    let like2=document.getElementById('heart2')
    if(like2.style.color=='black'){
    like2.style.color='#DC143C'
    }else{
    like2.style.color='black'  
    }
    }
function heart3(){
    let like3=document.getElementById('heart3')
    if(like3.style.color=='black'){
       like3.style.color='#DC143C'}
   else{
    like3.style.color='black'  
   }
        }

// the total functions//
function total1(){
    var n1 = document.getElementById("a1").value*1379.00;
    document.getElementById("p1").innerHTML=n1;

}
function total2(){
    var n2 = document.getElementById("a2").value*176.80;
    document.getElementById("p2").innerHTML=n2;

}
function total3(){
    var n3 = document.getElementById("a3").value*249.00;
    document.getElementById("p3").innerHTML=n3;

}
function total_price(){
    let price1=parseInt(document.getElementById("p1").innerHTML);
    let price2=parseInt(document.getElementById("p2").innerHTML);
    let price3=parseInt(document.getElementById("p3").innerHTML);
    let total=price1+price2+price3;
document.getElementById("finalPrice").value=total;}


