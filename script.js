console.log('In jQuery Review!');
$(document).ready(onReady);

let i=0;

function onReady(){
    console.log('we are ready!');
    $('#buttonThing').on('click', function(){
        console.log('I was clicked!');
        i++;
        $('#counterThing').text(i);    
    });
    
}

