// The if Statement
try {
    if (20 > 18) {
        console.log('Good Day1!');
    }
}
catch (error) {
    console.log('error');
}


//The else Statement
function sta() {

    if (1 < 18) {
        console.log('is true');
    } else {
        console.log(' is false');

    }

}

sta()

//The else if Statement

try {

    if ('Juan' == 2) {

    } else if (3 == '3') {
        console.log('Esta afirmacion es verdadera');

    } else {
        console.log('test');

    }
} catch (error) {
    console.log(error);

}

//The switch 
//The default case does not have to be the last case in a switch block:

function bucle() {
    try {
        var animales = 'Mono';
        switch (animales) {
            case 'tortuga':
                console.log('El animal seleccionado es OSO ');
                break;
            case 'pato':
                console.log('El animal seleccionado es PATO ');
                break;
            case 'pez':
                console.log('El animal seleccionado es PEZ ');
                break;
            default: 
                console.log('Default');
        }
    } catch (error) {
        console.log('error');

    }
}
bucle()

//Strict Comparison

var x = 0;

switch (x) {
  case 0:
  console.log('on');
    break;
  case 1:
  console.log('off');
    break;
  default:
    text = "No value found";
}


