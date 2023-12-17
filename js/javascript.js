let onBtn = document.querySelector('.onBtn')
let light =  document.querySelector('img')


function onlight (){
   light.src = "./IMAGES/on.jpg" 
}

onBtn.addEventListener('click', onlight )

let offBtn = document.querySelector('.offBtn')
function offlight (){
   light.src = "./IMAGES/off.jpg" 
}

offBtn.addEventListener('click', offlight )


