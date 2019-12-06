let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let currentSentence = 0
let currentCharacter = 0

function SetupSentences(){
    
    let text = ""

    for (const key in sentences[currentSentence]) {
        text += `<span>${sentences[currentSentence][key]}</span>`; 
    }


    $('#sentence').html(text)
}

function HighlightChar(){
    $(`#sentence span:nth-child(${currentCharacter})`).css('background-color', 'yellow');
}

function SetupUppercaseKeyboard(){

    $('#keyboard-lower-container').css('display', 'block');
    $('#keyboard-upper-container').css('display', 'none');


    $(document).keyup(function(e){
        HighlightChar();
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
        HighlightChar();

        if(e.key == 'Shift'){
            // shift key pressed
            $('#keyboard-lower-container').css('display', 'none');
            $('#keyboard-upper-container').css('display', 'block');

        } else
        if (e.key.charCodeAt(0) >= 32 && e.key.charCodeAt(0) <= 126){
            let value = e.key.charCodeAt(0);
            $(`#${value}`).css('background-color', 'cadetblue');
        }

        let charToMatch = sentences[currentSentence][currentCharacter]
        if (e.key == charToMatch){
            currentCharacter = currentCharacter + 1;
            if (currentCharacter >= sentences[currentSentence].length){
                currentSentence = currentSentence + 1;
                SetupSentences();
                currentCharacter = 0;
            }
            
        }



    });

}

$(document).ready(function(){
    SetupUppercaseKeyboard();
    SetupSentences();
    HighlightChar();
});