//Toggles
let toggleTheme = document.querySelector('.bb8-toggle__checkbox')
let toggleLanguage = document.querySelector('.checkbox-apple #check-apple')

//Elementos 
let body = document.body
let ancoraSeta = document.querySelectorAll('.titulo a img')
let curriculo = document.querySelectorAll('.botoes a')
let titulos = document.querySelectorAll('.titulo h1')
let logo = document.querySelector('.logo')
let itensMenu = document.getElementsByClassName('item-menu')
let containerPrincipal = document.querySelector('.container-principal')
let infosContainer = document.querySelectorAll('.container-principal .informacoes p')
let botoes = document.querySelectorAll('.botoes a')
let conteudoSobre = document.querySelector('.conteudo-sobre .informacoes')
let navContato = document.querySelectorAll('.navegacao-contato a')
let spanEmail = document.querySelector('.navegacao-email span')
let inputEmail = document.querySelectorAll('.navegacao-email .box-usuario input')
let labelEmail = document.querySelectorAll('.navegacao-email .box-usuario .label-form')
let buttonEmail = document.querySelector('.navegacao-email button')
let rodape = document.querySelector('.rodape p')


//Textos 
let titulosIngles = ["About Me", "Skills", "Projects", "Contact"]
let titulosPortugues = ["Sobre Mim", "Habilidades", "Projetos", "Contato"]
let ctnPrincipalSpan = ["Luis Gustavo Caron", "Front-End"]
let ctnPrincipalPortugues = ["Seja bem-vindo(a)!", `Eu sou <span>${ctnPrincipalSpan[0]}</span>`, `Sou Desenvolvedor <span>${ctnPrincipalSpan[1]}</span>`]
let ctnPrincipalIngles = ["Welcome friend!", `I'm <span>${ctnPrincipalSpan[0]}</span>`, `I'm a <span>${ctnPrincipalSpan[1]}</span> developer`]
let conteudoSobreMim = ["Sou um cara dedicado e focado apaixonado por tecnologia.<br><br> Decidi migrar para programação no ínicio de 2022 e desde então estou em busca da minha primeira oportunidade como programador. <br><br> Sou desenvolvedor Front-End.", "I'm a dedicated and focused guy who is passionate about technology.<br><br> I decided to migrate to programming at the beginning of 2022 and since then I've been looking for my first opportunity as a programmer. <br><br> I'm a Front-End developer."]
let conteudoSpanEmail = ["Entre em contato pelo E-Mail", "Contact us by<br>E-Mail"]
let conteudoLabelEmail = ["Nome", "Name"]
let conteudoRodape = ["Copyright © 2023 Luis Gustavo Caron. Todos os direitos reservados.", "Copyright © 2023 Luis Gustavo Caron. All rights reserved."]


//Alterar Tema
toggleTheme.addEventListener('click', () => {
    if(toggleTheme.checked == true) {
        darknessTheme()
    } else {
        brightnessTheme()
    }
})

function brightnessTheme(){
    body.style.background = "#d8d8d8"
    body.style.color = "var(--cor-preta)"
    logo.style.color = "var(--cor-preta)"

    for (let i = 0; i < itensMenu.length; i++){
        itensMenu[i].style.color = "var(--cor-preta)"
    }

    for (i = 0; i < infosContainer.length; i++){
        infosContainer[i].style.color = "var(--cor-preta)"
    }

    for (i = 0; i < botoes.length; i++){
        botoes[i].style.color = "var(--cor-preta)"
    }

    for (i = 0; i < navContato.length; i++){
        navContato[i].style.color = "var(--cor-preta)"
    }

    for (i = 0; i < inputEmail.length; i++){
        inputEmail[i].style.color = "var(--cor-preta)"
    }

    for(i = 0; i < ancoraSeta.length; i++){
        ancoraSeta[i].src = "src/img//setas/setaCima.png"
    }

    buttonEmail.style.color = "var(--cor-preta)"
    rodape.style.color = "var(--cor-branca)"
    containerPrincipal.classList.remove('ativo')
}

function darknessTheme(){
    body.style.background = "#292929"
    body.style.color = "var(--cor-branca)"
    logo.style.color = "var(--cor-branca)"

    for (i = 0; i < itensMenu.length; i++){
        itensMenu[i].style.color = "var(--cor-branca)"
    }

    for (i = 0; i < infosContainer.length; i++){
        infosContainer[i].style.color = "var(--cor-branca)"
    }

    for (i = 0; i < botoes.length; i++){
        botoes[i].style.color = "var(--cor-branca)"
    }

    for (i = 0; i < navContato.length; i++){
        navContato[i].style.color = "var(--cor-branca)"
    }

    for (i = 0; i < inputEmail.length; i++){
        inputEmail[i].style.color = "var(--cor-branca)"
    }

    for(i = 0; i < ancoraSeta.length; i++){
        ancoraSeta[i].src = "src/img/setas/setaCimaDark.png"
    }

    buttonEmail.style.color = "var(--cor-branca)"
    rodape.style.color = "var(--cor-branca)"    
    containerPrincipal.classList.add('ativo')   
}

brightnessTheme() //Inicializar no tema Claro

//Alterar Idioma
toggleLanguage.addEventListener('click', () => {
    if(toggleLanguage.checked == true) {
        englishLanguage()
    } else {
        brazilianLanguage()
    }
})

function englishLanguage(){
    for (let i = 0; i < titulos.length; i++){
       titulos[i].innerHTML = titulosIngles[i]
       titulos[i].innerHTML = titulosIngles[i]
       titulos[i].innerHTML = titulosIngles[i]
       titulos[i].innerHTML = titulosIngles[i]
    }

    for (let i = 0; i < titulos.length; i++){
        itensMenu[i].innerHTML = titulosIngles[i]
        itensMenu[i].innerHTML = titulosIngles[i]
        itensMenu[i].innerHTML = titulosIngles[i]
        itensMenu[i].innerHTML = titulosIngles[i]
     }

    for (let i = 0; i < infosContainer.length; i++){
        infosContainer[i].innerHTML = ctnPrincipalIngles[i]
        infosContainer[i].innerHTML = ctnPrincipalIngles[i]
        infosContainer[i].innerHTML = ctnPrincipalIngles[i]
    }

    conteudoSobre.innerHTML = conteudoSobreMim[1]
    spanEmail.innerHTML = conteudoSpanEmail[1]
    labelEmail.innerHTML = conteudoLabelEmail[1]
    curriculo[2].href = "src/docs/CURRICULUM.pdf"
    rodape.innerHTML = conteudoRodape[1]
}

function brazilianLanguage(){
    for (let i = 0; i < titulos.length; i++){
        titulos[i].innerHTML = titulosPortugues[i]
        titulos[i].innerHTML = titulosPortugues[i]
        titulos[i].innerHTML = titulosPortugues[i]
        titulos[i].innerHTML = titulosPortugues[i]
     }

    for (i = 0; i < itensMenu.length; i++){
        itensMenu[i].innerHTML = titulosPortugues[i]
        itensMenu[i].innerHTML = titulosPortugues[i]
        itensMenu[i].innerHTML = titulosPortugues[i]
        itensMenu[i].innerHTML = titulosPortugues[i]
    }

    for (let i = 0; i < infosContainer.length; i++){
        infosContainer[i].innerHTML = ctnPrincipalPortugues[i]
        infosContainer[i].innerHTML = ctnPrincipalPortugues[i]
        infosContainer[i].innerHTML = ctnPrincipalPortugues[i]
     }

    conteudoSobre.innerHTML = conteudoSobreMim[0]
    spanEmail.innerHTML = conteudoSpanEmail[0]
    labelEmail.innerHTML = conteudoLabelEmail[0]
    curriculo[2].href = "src/docs/CURRICULO ATT.pdf"
    rodape.innerHTML = conteudoRodape[0]
}

//Animação das divs
const divisao = document.querySelectorAll('[data-anime]')
const classeDeAnimacao = 'animate'


const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    }
  }

function animarScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    divisao.forEach(function (element){
        if((windowTop) > element.offsetTop){
            element.classList.add(classeDeAnimacao)
        } else {
            element.classList.remove(classeDeAnimacao)
        }
    })
}

animarScroll()
if(divisao.length) {
    window.addEventListener('scroll', debounce(function () {
        animarScroll()
    }, 200))
}