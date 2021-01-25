
function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));


/*var nome = "rafu";
var n1 = 5;
var n2 = 3;
var frase = "Messi é o melhor do mundo"
//alert(nome  + " tem "+idade+" anos");
//alert(idade+idade2);
console.log(nome);
console.log(n1 * n2);
console.log(frase.replace("Messi", 'Neymar'));
alert(frase.replace("Messi", 'Neymar'));*/
/*
var list = ["maçã", "pera", "laranja"];
list.push("uva");
list.pop("pera");
console.log(list);
console.log(list.length);
console.log(list.toString());
console.log(list.join("  "));
*/
/*var fruta = {nome: "Maça", cor: "Vermelha"};
console.log(fruta);
alert(fruta.cor);*/
/*
var frutas = [{nome:"Maçã",cor:"Vermelha"},{nome: "uva",cor:"Roxa"}];
console.log(frutas);*/
/*var idade = prompt("Qual sua idade?");
if(idade>=18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}*/
/*
var count = 0;
while(count<=5){
    console.log(count);
    count ++;
}*/
/*
var count;
    for(count=0;count<=5;count++){
        alert(count);
    }*/

   // var d = new Date();
   // alert(d.getMinutes()+1);