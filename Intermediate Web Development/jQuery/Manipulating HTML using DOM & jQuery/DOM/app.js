
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

document.addEventListener('DOMContentLoaded', function(){
    CreateButton();
    TextBoxButton();
    ChangingDiv();
    ChangingParagraph();
});