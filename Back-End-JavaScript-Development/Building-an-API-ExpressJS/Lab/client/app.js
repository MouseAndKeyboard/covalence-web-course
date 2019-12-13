$('#messageSend').click((evt) => {
    evt.preventDefault();

    let toSend = {
        author: $('#name')[0].value,
        message: $('#message')[0].value
    }

    $.ajax('/api/chirps', {
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(toSend),
        type: 'POST'
    });

    recheck();
});

function recheck() {
    let chirps = $.ajax('/api/chirps', {
        type: 'GET',
        dataType: 'json'
    });
    chirps.then(x => {
        let postsZone = document.getElementById('posts');
        while (postsZone.firstChild) {
            postsZone.removeChild(postsZone.firstChild);
        }
        for (const key in x) {
            if (x.hasOwnProperty(key)) {
                if (key != 'nextid'){
                    const element = x[key];
                    let d = document.createElement('div');
                    d.classList.add('card');
    
                    let h = document.createElement('div');
                    h.classList.add('card-header');
                    h.appendChild(document.createTextNode(element.author));
    
                    let b = document.createElement('div');
                    b.classList.add('card-body');
                    b.appendChild(document.createTextNode(element.message));
    
                    d.id = key;
                    d.appendChild(h);
                    d.appendChild(b);
    
                    d.addEventListener('click', (event) => {
                        $.ajax(`/api/chirps/${d.id}`, {type: 'DELETE'});
                        d.remove();
                    });
    
                    postsZone.appendChild(d);
                }               
            }
        }
    });
}

$(document).ready(event => {
    recheck();
});