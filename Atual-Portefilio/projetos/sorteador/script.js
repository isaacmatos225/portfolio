function getRndInterger(min, max){
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
    }

function Revelar(e) {
    e.style.color="black";
}

function SortearNumero(){
    const cqtde = document.getElementById("qtde");
    const cmin = document.getElementById("min");
    const cmax = document.getElementById("max");
    const cnumeros = document.getElementById("numeros");
    //caixa quw
    let revelar = document.getElementById("revelar");
    titulo.style.display = "none"
   
    //valores aoenas um numero
    let qtde = parseInt(cqtde.value)
    let min = parseInt(cmin.value)
    let max = parseInt(cmax.value)

    //sortead apenas um numero
    let numero = 0;
    let texto = "";

    //mostrar os numos da tela
    for(let i = 1; i <= qtde; i++) {
         numero = getRndInterger(min,max);
         if(revelar.check){//se dorpara mostra usa essa class
            texto += `<p class="numero">${numero}</p>`
         }else{//senao usa essa
            texto += `<p class="numerorevel" onclick="Revelar(this)">${numero}</p>`
         }
    }
    cnumeros.innerHTML = texto;
}