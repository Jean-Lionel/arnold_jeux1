const number1=document.getElementById('number1')
const number2=document.getElementById('number2')

const reponse=document.getElementById('reponse')
const paragraphe=document.getElementById("p1")
const paragraphe1=document.getElementById("p2")


random1=Math.random()*10<<0
random2=Math.random()*10<<0


number1.innerHTML=random1
number2.innerHTML=random2


function validate(){
    const resultat=document.getElementById('resultat').value;
    if(random1+random2==resultat){

        paragraphe.innerHTML="Correct!"
        reponse.innerHTML=resultat
       
    }else{
        
        paragraphe1.innerHTML="Incorrect!"
        reponse.innerHTML="?"
    }
    
    
    
}






