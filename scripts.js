const botao = document.getElementById('botao_form')
function enviar_form(){

    let relato = document.getElementById('situacao')
    window.alert(`Seu formulário foi enviado, relatando. Assim que possível entraremos em contato! Obrigado por nos contatar`)


}

botao.addEventListener('click', enviar_form)