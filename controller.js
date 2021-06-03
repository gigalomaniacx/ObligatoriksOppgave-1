function setEarthWeightBlank() {
    returnPlanetaryWeight = `Please enter a weight in the txt field`;
    earthWeight = '';
}

function returnMessage(){
    if (earthWeight != null && earthWeight != '') {
        returnPlanetaryWeight = `Your weight on the planet: ${planet} is ${planetWeight}.`
    }
    else{
        setEarthWeightBlank();
    }
}

function calculatePlanetWeight() {
    planetDropDown = document.getElementById('planets');
    earthWeight = document.getElementById('earthWeightInput').value;

    planetDropDown.value == 'Mercury' ? getPlanetWeight('Mercury', 0.38) :
    planetDropDown.value == 'Venus' ? getPlanetWeight('Venus', 0.904) :
    planetDropDown.value == 'Moon' ? getPlanetWeight('Moon', 0.1654) :
    planetDropDown.value == 'Mars' ? getPlanetWeight('Mars', 0.38) :
    planetDropDown.value == 'Jupiter' ? getPlanetWeight('Jupiter', 2.528) :
    planetDropDown.value == 'Saturn' ? getPlanetWeight('Saturn', 1.065) :
    planetDropDown.value == 'Uranus' ? getPlanetWeight('Uranus', 0.886) :
    'Error that is not handled D: (ups)';
}

//function that returns a value with return(exercise requirement)
//used to calculate the planet weight.
function gravityCalc(tall){
    let sum = earthWeight * tall;
    return sum;
}

//planet weight calculating & halfprint
function getPlanetWeight(planetName,Gs){
    planet = planetName;
    planetWeight = gravityCalc(Gs);
    // planetWeight = earthWeight * Gs;
    planetDropDown.value = planetName;
    returnMessage();
    updateView();
}

//helper function for nested if statements to apply css class
function setCssClass(addClass) {
    let classAdd = addClass;
    classDel = document.body.classList.item(0);
    document.body.classList.remove(classDel);
    document.body.classList.add(classAdd);
}

//background image class logic
function bodyBackgroundImg(){
    
    planet == null || planet == undefined ? planet = 'Mercury' :
    planet == 'Mercury' ? setCssClass('mercury-div') :
    planet == 'Venus' ? setCssClass('venus-div') :
    planet == 'Moon' ? setCssClass('moon-div') :
    planet == 'Mars' ? setCssClass('mars-div') :
    planet == 'Jupiter' ? setCssClass('jupiter-div') :
    planet == 'Saturn' ? setCssClass('saturn-div') :
    planet == 'Uranus' ? setCssClass('uranus-div') :
    console.log('error boxShadow');
}