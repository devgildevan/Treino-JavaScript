const turnOn = document.getElementById ( 'turnOn');
const turnOff = document.getElementById ( 'turnOff');
const lamp = document.getElementById ( 'lamp');
const turnRestart = document.getElementById ('turnRestarte')


turnOn.style.display= 'flex'
turnOff.style.display= 'none'
turnRestarte.style.display= 'none'


function lampRestart(){
    if( lamp.src.indexOf == "quebrada"){
        return turnRestarte.style.display = 'flex'
    }
}


function isLampBroken (){
    return lamp.src.indexOf ( 'quebrada') > -1
}

function lampOn(){
    if(!isLampBroken()){
        lamp.src = "./img/ligada.jpg";
        
       
    }
}

function lampOff(){
    if(!isLampBroken()){
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken (){
    lamp.src = './img/quebrada.jpg'
    return turnRestarte.style.display = "flex"
}


function lampTrocar() {
    if (turnOn.style.display == "flex") {
        turnOn.style.display = "none";
        turnOff.style.display = "flex";
    } else if (turnOn.style.display == "none") {
        turnOn.style.display = "flex";
        turnOff.style.display = "none";
    }
}


function lampRestarte(){
    lamp.src = './img/desligada.jpg'
    turnRestart.style.display= 'none'
}


turnOn.addEventListener ('click' , lampOn);
turnOff.addEventListener ('click' , lampOff);
lamp.addEventListener ( "mouseover", lampOn)
lamp.addEventListener ( "mouseleave", lampOff)
lamp.addEventListener ( 'dblclick' , lampBroken)

