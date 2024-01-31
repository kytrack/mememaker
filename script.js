let counter = 0;

const apiUrl = "https://api.imgflip.com/get_memes";

fetch(apiUrl)
    .then(x => x.json())
    .then(y => {
        //console.log(y.data.memes[0].url)
            document.getElementById("kep").src =y.data.memes[Math.floor(Math.random() * (y.data.memes.length + 1))].url
    });

function showTextBox(event) {
    const textBox = document.createElement('div');
    const textBoxId = 'textBox' + counter;
    textBox.id = textBoxId;
    textBox.classList.add("meme");
    textBox.contentEditable = 'true';
    textBox.addEventListener('keydown', function (e) {
        handleKeyDown(e, textBox);
    });

    const x = event.clientX;
    const y = event.clientY;

    textBox.style.position = 'absolute';
    textBox.style.left = x + 'px';
    textBox.style.top = y + 'px';

    document.getElementById("myDiv").appendChild(textBox);

    setTimeout(() => {
        textBox.focus();
    }, 0);

    counter++;
}

function handleKeyDown(event, textBox) {
    if (event.key === 'Enter') {
        const newText = textBox.innerText;

        console.log('Új szöveg:', newText);

        textBox.style.whiteSpace = 'nowrap';

        textBox.contentEditable = 'false';

        textBox.removeEventListener('keydown', function (e) {
            handleKeyDown(e, textBox);
        });

        textBox.addEventListener("wheel", function(event) {
            console.log("Görgés történt");
            event.target.remove();
        });
    }
}


function changeImage(){
    location.reload()
}