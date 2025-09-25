const number1=document.getElementById('number1')
const number2=document.getElementById('number2')

const reponse=document.getElementById('reponse')





number1.innerHTML=Math.random()
number2.innerHTML=Math.random()


function validate(){
    const resultat=document.getElementById('resultat').value;
    console.log(resultat)
    reponse.innerHTML=resultat
}






