//dom


const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const btn = document.querySelector('.btn-call')
const resultado = document.querySelector('.resultado')
const condicao = document.querySelector('.condicao')


btn.addEventListener('click',()=>{

    p= Number(peso.value)
    a= Number(altura.value)
    

    valor = p/(a * a)

    if(valor < 18.5){

        condicao.innerHTML ='Magreza'


    }

    else if(valor >= 18,5 && valor <= 25){

        condicao.innerHTML = 'Peso normal'

    }

    else if(valor >= 25 && valor <= 30){

        condicao.innerHTML = 'Acima do peso'

    }
    
    else if(valor > 30){

        condicao.innerHTML = 'Obesidade'

    }




    

    resultado.innerHTML = `O valor do I.M.C é  ${valor.toFixed(1)}  `
   


})
