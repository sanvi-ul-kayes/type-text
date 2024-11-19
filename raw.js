let text = document.querySelector("h1");
let typetext = text.innerHTML;
let typeArray = typetext.split('');
let count = 0;
text.innerHTML = '';
function typejs() {
    if (typetext.length > count) {
        text.innerHTML += typetext.charAt(count++);
        typeArray = typetext.split('');

    }
    else {
        typeArray.pop();
        text.innerHTML = typeArray.join('');

        if (typeArray.length == 0) {
            count = 0;
        }
    }
}

setInterval(() => {
    typejs()
},200)

