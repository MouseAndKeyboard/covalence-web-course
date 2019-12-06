function CreateButton() {
    $('#alertButtonHolder').append('<button class="btn btn-primary btn-lg" id="alertButton">Click Me!</button>');
    $('#alertButton').click(function(){
        alert('Hello there!');
    }); 
}

function TextBoxButton() {
    $('#textboxButton').click(function(){
        let text = $('#textbox').val();
        alert(text);
    });
}

function ChangingDiv() {
    $('#divlocation').append('<div class="hoverbox" id="hoverdiv"></div>');

    $('#hoverdiv').hover(
        // mouse enter
        function(){
            $(this).css('background-color', 'red');
        },
        // mouse leave
        function(){
            $(this).css('background-color', 'lightcoral');
        });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function ChangingParagraph() {
    $('#changingParagraph').append('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>')
    .click(function(){
        $(this).css('color', `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`)
    });
}

function AddName() {

}

function AddFriend() {

}

$(document).ready(function(){
    CreateButton();
    TextBoxButton();
    ChangingDiv();
    ChangingParagraph();
    AddName();
    AddFriend();
});