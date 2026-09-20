let bulbImg = document.getElementById('bulb')
let btn = document.getElementById('btn')
let breakBtn = document.getElementById('breakBtn')
let lampContainer = document.getElementById('lampContainer')

let bulbFlag = false

function turnOffOrOn() {
    if (bulbFlag) {

        bulbImg.setAttribute('src', 'pictures/lampOff.png')
        btn.innerHTML = 'Turn On'
        bulbFlag = false

        lampContainer.classList.remove('lamp-on')

    } else {

        bulbImg.setAttribute('src', 'pictures/lampOn.png')
        btn.innerHTML = 'Turn Off'
        bulbFlag = true

        lampContainer.classList.add('lamp-on')
    }
}

function breakLamp() {
    if (breakBtn.innerHTML === 'Break Lamp') {

        bulbImg.setAttribute('src', 'pictures/lampBroke.png')
        breakBtn.innerHTML = 'Reset'

        lampContainer.classList.remove('lamp-on')

    } else {

        bulbImg.setAttribute('src', 'pictures/lampOff.png')
        breakBtn.innerHTML = 'Break Lamp'
        btn.innerHTML = 'Turn On'
        bulbFlag = false

        lampContainer.classList.remove('lamp-on')
    }
}
