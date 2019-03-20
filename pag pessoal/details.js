var description = document.getElementById('desc')


var buttons = []

for (let i = 1;i <= 3; i++){
    buttons[i] = document.getElementById("b" + i)
    buttons[i].onmouseleave = () => {
        description.innerHTML = "";
    }
}

function changeDesc(buttonId){
    switch (buttonId) {
        case 'b1':
            description.innerHTML = "Tu já ta aqui meu"
            break;
        
        case 'b2':
            description.innerHTML = "Meus código"
            break;
        
        case 'b3':
            description.innerHTML = "Face do cara mais foda desse mundo"
            break

        default:
            description.innerHTML = ""
            break;
    }
}

var pub = document.getElementById('pub')
var cont = 0

function changePadding(){
    cont += 1
    pub.style.paddingLeft = cont + "px";
    if(cont > window.screen['availWidth']){
        cont = 0
    }
}

setInterval(changePadding, 1)

