function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function highlight(element){
    // $(element).removeClass('alert-secondary');
    // $(element).addClass('alert-primary p-3');
    $(element).addClass('active');
}

function unhighlight(element){
    // $(element).removeClass('alert-primary p-3');
    // $(element).addClass('alert-secondary');
    $(element).removeClass('active');
}

function remove(element){
    $(element).remove();
}

function randomColour(element){
    $(element).css('background-color', `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`); 
}

$(document).ready(function () {

    $('.container').append(`<ul class="list-group" id="commentBox"></ul>`)

    $('#btnSubmit').click(function (e) {
        e.preventDefault();
        let textboxContent = $('#textbox').val();

        $('#commentBox').append(`<li class="list-group-item" onmouseout="unhighlight(this)" onmouseover="highlight(this)" onclick="randomColour(this)" ondblclick="remove(this)">${textboxContent}</li>`)

        // $('#comments').append(`<div class="alert alert-secondary comment" onmouseout="unhighlight(this)" onmouseover="highlight(this)" role="alert">
        //                         ${textboxContent}
        //                        </div>`);
    });

    $('#textbox').change(function () {
        let textboxContent = $('#textbox').val();
        if (textboxContent == "") {
            $('#btnSubmit').prop('disabled', true)
        } else {
            $('#btnSubmit').prop('disabled', false)
        }
    });


});