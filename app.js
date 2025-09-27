const number1=document.getElementById('number1')
const number2=document.getElementById('number2')

const reponse=document.getElementById('reponse')
const paragraphe=document.getElementById("p1")
const paragraphe1=document.getElementById("p2")




function initGame(){
    random1=Math.floor( Math.random()*10)+1
    random2=Math.floor(Math.random()*10)+1


    number1.innerHTML=random1
    number2.innerHTML=random2
      
}

initGame()


function validate(){
   
    const resultat=document.getElementById('resultat').value;
    if(random1+random2==resultat){

        paragraphe.innerHTML="Correct!"
        paragraphe1.innerHTML=""
        reponse.innerHTML=resultat
       
    }else{
        paragraphe.innerHTML=""
        paragraphe1.innerHTML="Incorrect!"
        reponse.innerHTML="?"
    }
    
    initGame()
    
}

/*function Recommencer(){ 
    
    if(random1+random2!==resultat){
        random1=Math.floor( Math.random()*10)+1
random2=Math.floor(Math.random()*10)+1
        const resultat=document.getElementById('resultat').value=''
        paragraphe1.innerHTML=""
        reponse.innerHTML=""
       
        
    }
}
**/





