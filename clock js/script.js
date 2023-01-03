function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 10
    var min = 30
    
    msg.innerHTML = `<p>Agora são ${hora}:${min}.</p>`
    if (hora >= 0 && hora <12) {
        img.src = 'manhã.jpg'
        document.body.style.backgroundColor = '#F0860E'
        
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.backgroundColor = '#0EA8F0'
    } else {
        img.src = 'noite.jpg'
        document.body.style.backgroundColor = '#60199B'
    }

}



