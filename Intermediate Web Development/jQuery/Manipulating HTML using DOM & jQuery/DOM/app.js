
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

document.addEventListener('DOMContentLoaded', function(){
    CreateButton();
    TextBoxButton();
    ChangingDiv();
    ChangingParagraph();
});