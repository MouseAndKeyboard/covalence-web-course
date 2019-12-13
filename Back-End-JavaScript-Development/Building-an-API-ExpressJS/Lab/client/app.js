
$(document).ready(() => {
    $('#messageSend').click((evt) => {
        evt.preventDefault();

        let toSend = {
            author: $('#name')[0].value,
            message: $('#message')[0].value
        }

        console.log(JSON.stringify(toSend));

        jQuery.post('http://localhost:4000/api/chirps', JSON.stringify(toSend));
    });
})

