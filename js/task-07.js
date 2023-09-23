const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControl.addEventListener('input', function () {
    const fontSize = fontSizeControl.value;
    text.style.fontSize = fontSize + 'px';
    
})