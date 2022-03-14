function changeColor() {
    let hexCode = '#';
    for (let i = 0; i < 6; i++) {
        let hexList = ['A', 'B', 'C', 'D', 'E', 'F', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        let hexValue = (Math.floor(Math.random() * 15));
        hexCode += hexList[hexValue];
    }
    document.body.style.backgroundColor = hexCode;

    let hexText = document.querySelector("#hex_text");
    hexText.textContent = hexCode;
}

let btn = document.querySelector('#button');
btn.addEventListener('click', changeColor);