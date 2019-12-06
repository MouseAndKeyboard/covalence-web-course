let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

function setupUppercaseKeyboard(){

    $('#keyboard-lower-container').css('display', 'block');
    $('#keyboard-upper-container').css('display', 'none');


    $(document).keyup(function(e){
        if(e.key == 'Shift'){
            // shift key released
            $('#keyboard-lower-container').css('display', 'block');
            $('#keyboard-upper-container').css('display', 'none');
        } else 
        if (e.key.charCodeAt(0) >= 32 && e.key.charCodeAt(0) <= 126){
            let value = e.key.charCodeAt(0);
            $(`#${value}`).css('background-color', '#f5f5f5')
        }
    });

    $(document).keydown(function(e){
        if(e.key == 'Shift'){
            // shift key pressed
            $('#keyboard-lower-container').css('display', 'none');
            $('#keyboard-upper-container').css('display', 'block');

        } else
        if (e.key.charCodeAt(0) >= 32 && e.key.charCodeAt(0) <= 126){
            let value = e.key.charCodeAt(0);
            $(`#${value}`).css('background-color', 'cadetblue');
        }
    });

}

$(document).ready(function(){
    setupUppercaseKeyboard();

});