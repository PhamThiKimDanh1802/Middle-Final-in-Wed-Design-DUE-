let img 


window.addEventListener('DOMContentLoaded', () => {
    img = document.getElementById('preview')
})

function showDescription(id) {
    
    const imgSrc = `./img/product${id}.jpg`
   img.style.backgroundImage= `url(${imgSrc})`
      img.style.backgroundPosition = 'center'
          img.style.backgroundRepeat = 'no-repeat'

    

    
}

function clearDescription() {
        img.style.backgroundImage = ''

}