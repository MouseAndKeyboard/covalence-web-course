
function CreateButton(){
    let buttonHolder = document.getElementById('alertButtonHolder');
    let button = document.createElement('button');
    button.className = "btn btn-primary btn-lg";
    let buttonText = document.createTextNode('Click Me!');
    button.appendChild(buttonText);

    button.addEventListener('click', function(){
        alert('Hello there!')
    })

    buttonHolder.appendChild(button);
}

function TextBoxButton(){
    let textbox = document.getElementById('textbox');
    let btn = document.getElementById('textboxButton');

    btn.addEventListener('click', function() {
        let textboxContent = textbox.value;
        alert(textboxContent);
    });
}

function ChangingDiv(){
    let divHolder = document.getElementById('divlocation');
    let newdiv = document.createElement('div');
    newdiv.className = "hoverbox"

    newdiv.addEventListener('mouseenter', function() {
        newdiv.style.backgroundColor = "red";
    });

    newdiv.addEventListener('mouseleave', function() {
        newdiv.style.backgroundColor = "lightcoral";
    });

    divHolder.appendChild(newdiv);
}

document.addEventListener('DOMContentLoaded', function(){
    CreateButton();
    TextBoxButton();
    ChangingDiv();
    ChangingParagraph();
});