
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function ChangingParagraph(){
    let paragraphHolder = document.getElementById('changingParagraph');
    let paragraph = document.createElement('p'); 
    let paragraphText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    paragraph.appendChild(paragraphText);

    paragraph.addEventListener('click', function() {
        paragraph.style.color = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`
    }); 

    paragraphHolder.appendChild(paragraph);
}

document.addEventListener('DOMContentLoaded', function(){
    CreateButton();
    TextBoxButton();
    ChangingDiv();
    ChangingParagraph();
});