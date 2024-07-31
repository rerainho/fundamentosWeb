let nome = window.document.getElementById('nome');
let email = document.querySelector('#email');
let mapa = document.querySelector('#mapa');
let titulo2 = document.getElementById('#titulo2');


nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length <= 2 ){
      // opção de alerta de pop up --- window.alert('nome inválido!')---//
      txt.innerHTML = 'Nome inválido'
      txt.style.color = '#FF0000'
    } else{
        txt.innerHTML = ' '
    }
}

function validaEmail() {
    let txt = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.')){
      txt.innerHTML = 'Email inválido'
      txt.style.color = '#FF0000'
    } else{
        txt.innerHTML = 'Email válido'
        txt.style.color = '#008000'
    }
}

function mapaZoom(){
    mapa.style.width = '1600px'  
    mapa.style.height = '500px'
}

function mapaComum(){
     mapa.style.width = '1300px'  
    mapa.style.height = '250px'
}

function titulo2(){
    let titulo,innerHTML = ('Para matar a saudade')
titulo2.style.textAlign = 'center';
titulo2.style.backgroundColor = '#CCCCC9';
titulo2.style.borderBottom = 'solid 3px #000';
titulo2.style.margin = '20px';
}