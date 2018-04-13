console.log('In jQuery Review!');
$(document).ready(onReady);

let clickCount=0;

function onReady(){
    console.log('we are ready!');  //below is an annoynmous callback function
    $('#buttonThing').on('click', function(){ //#buttonThing is the selector
    $('#buttonThing').on('click', addNewCreature);
        console.log('I was clicked!'); //.on click is th event handler
        clickCount++;//goes up by 1 (increment)
        $('#counterThing').text('Total Count:' + clickCount); //.text replaces the text with what ever is in the ()   
    addNewCreature();
    });
}

function addNewCreature(){
    $('#creatureList').append(
        '<tr>' + 
        '<td>' + $('#nameIn').val() + '</td>' + 
        '<td>' + $('#sizeIn').val() + ' ft' + '</td>' + 
        '<td>' + $('#typeIn').val() + '</td>' + 
        '<td>' + $('#speedIn').val() + ' mph' + '</td>' + 
    '</tr>)');//cut and paste from html
}

//the above can also be shown as and may be a better option as you write more code:
//function onReady(){
    //console.log('we are ready!');  
   // $('#buttonThing').on('click', clickHandler); 
    //};

//function clickHandler(){
//console.log('I was clicked!'); 
//i++;
//$('#counterThing').text(i); 
//updatedDomCount();
//}

//function updateDomCount(){
    //$('#total)
