const validar=document.getElementById('validar');
const img=document.getElementById('imagen');
const pag1=document.getElementById('pag1');
const mensaje=document.getElementById('mensaje');
const fallido=document.getElementById('fallido')
const ingresar=document.getElementById('number');

let tarjeta;
let num;
let contador;
let suma;
let digito;
let valido;
let mayor;
let ss;

validar.addEventListener('click', function() {
    
    num=document.getElementById('number').value;
    tarjeta=Array.from(num);
    
    input()
    if (input()) {
        hidenumber();
        validnumber();
    } else {
        if (tarjeta.length==0) {
            alert('Se le pide al usuario ingresar su numero de tarjeta antes de validar');
        } else {
            alert('Se le pide al usuario ingresar su numero de tarjeta COMPLETO antes de validar');
        }
    }
})

function input() {
    if (tarjeta.length<12) {
        return false;
    } else {
        return true;
    }

}

function validnumber() {
    
    suma=0;

    for (contador = 0; contador < tarjeta.length; contador++) {
            
            tarjeta[contador]=tarjeta[contador]*2;
    
            if (tarjeta[contador]>9) {
                tarjeta[contador]=tarjeta[contador]-9;
                suma=suma+tarjeta[contador];
            }

            contador=contador+1;

            if (contador<tarjeta.length) {
                tarjeta[contador]=tarjeta[contador]*1;
                suma=suma+tarjeta[contador];
            }
    };

    if (suma==0) {
        valido=false;
        document.querySelector('#mensaje').innerHTML = '¡LO SENTIMOS!<br>El número de tarjeta: '+hidenum+' no es valido';
        document.body.classList.add('rojo')
        siguiente();
        document.getElementById("imagen").src="no.jpg";
        fallido.classList.remove('hide');
        fallido.classList.add('show');
    }
    else{
    suma=suma.toString();
    suma=Array.from(suma);
    
    digito=suma.length-1;
    
    if (suma[digito]==0) {
        valido=true;
        document.querySelector('#mensaje').innerHTML = 'El número de tarjeta: '+hidenum+' es valido';
        document.body.classList.add('azul')
        siguiente();
        document.getElementById("imagen").src="yes.jpg";
    } else {
        valido=false;
        document.querySelector('#mensaje').innerHTML = '¡LO SENTIMOS!<br>El número de tarjeta: '+hidenum+' no es valido';
        document.body.classList.add('rojo')
        siguiente();
        document.getElementById("imagen").src="no.jpg";
        fallido.classList.remove('hide');
        fallido.classList.add('show');
    }
}};

function hidenumber() {
    hidenum=Array.from(num)
    contador=0
    for ( contador = 0; contador < num.length-4; contador++) {
        hidenum[contador]='*';    
    }
    hidenum=hidenum.join('')
}

function siguiente(){
    pag1.classList.remove('show');
    pag1.classList.add('hide');
    img.classList.remove('hide');
    img.classList.add('show');
    mensaje.classList.remove('hide');
    mensaje.classList.add('show');
}

fallido.addEventListener('click', function()  {
    pag1.classList.remove('hide');
    pag1.classList.add('show');
    img.classList.remove('show');
    img.classList.add('hide');
    mensaje.classList.remove('show');
    mensaje.classList.add('hide');
    fallido.classList.remove('show');
    fallido.classList.add('hide');
    document.body.classList.remove('azul','rojo')
})

