$('.clickme').click(function() {
    alert('pressed!')
});

let msg = 'Example text!'

// $('<p>' + msg + '</p>').appendTo('#textholder');
$('<p></p>').text(msg).appendTo('#textholder');

$('#textholder>p').addClass('red');

$('#textholder>p').css({
    'background-color': 'green',
    'font-size': '3em'
});

let bgcol = $('#textholder>p').css('background-color');
// alert(bgcol)


let email = $('#email').val();
let pass = $('#password').val();



function addListItem() {
    let list = document.getElementById('grocery-list');
    let item = document.createElement('li');
    item.innerText = 'milk & bread';
    list.appendChild(item);
}

$('#jqueryAdd').click(function(){
    $('#grocery-list').append('<li class="red">Apples and oranges</li>');
})

$('#style-me').click(function() {
    $('.red').css('color', 'red')
});

$(document).ready(function() {
    $('<div class="animate"></div>').css({
        'background-color': 'blue',
        'height': '100px',
        'width': '100px'
    }).insertAfter('#grocery-list');
});

$('.animate').click(function() {
    $('div').fadeOut(1000, function() {});
})