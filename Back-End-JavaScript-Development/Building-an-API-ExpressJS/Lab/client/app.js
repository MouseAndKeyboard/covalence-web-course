
$('#messageSend').click((evt) => {
    evt.preventDefault();

    let toSend = {
        author: $('#name')[0].value,
        message: $('#message')[0].value
    }

    $.ajax('/api/chirps', {contentType: "application/json; charset=utf-8", data: JSON.stringify(toSend), type: 'POST'});
});

