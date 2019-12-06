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