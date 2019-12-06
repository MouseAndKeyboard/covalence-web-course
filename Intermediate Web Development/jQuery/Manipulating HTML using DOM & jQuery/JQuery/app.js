alert('test')


function CreateButton() {
    $('#alertButtonHolder').append('<button class="btn btn-primary btn-lg" id="alertButton">Click Me!</button>');
    $('#alertButton').bind('click', function(){
        alert('Hello there!')
    }); 
}

function TextBoxButton() {

}

function ChangingDiv() {

}

function ChangingParagraph() {

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