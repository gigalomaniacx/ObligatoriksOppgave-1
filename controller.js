function setEarthWeightBlank() {
    returnPlanetaryWeight = `Please enter a weight in the txt field`;
    document.getElementById('earthWeightInput').value = '';
}

function returnMessage(){
    document.getElementById('earthWeightInput').value == null || document.getElementById('earthWeightInput').value == undefined ? setEarthWeightBlank():
    returnPlanetaryWeight = `Your weight on the planet: ${planet} is ${planetWeight}.`;
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
//     if (planetDropDown.value == 'Mercury'){
//         // planetWeight = earthWeight * 0.38;
//         // planetWeight = getPlanetWeight(0.38);
        
//         getPlanetWeight('Mercury',0.38);
//         // returnPlanetaryWeight = `Your weight on the planet: ${planet} is ${planetWeight}.`;
//         // returnMessage();
//         // updateView();
//     }
//     if (planetDropDown.value == 'Venus') {
        
//         getPlanetWeight('Venus',0.904);
//     }
//     if (planetDropDown.value == 'Moon') {
        
//         getPlanetWeight('Moon', 0.1654);
//     }
//     if (planetDropDown.value == 'Mars') {
        
//         getPlanetWeight('Mars', 0.1654);
//     }
//     if (planetDropDown.value == 'Jupiter') {
        
//         getPlanetWeight('Jupiter', 2.528);
//     }
//     if (planetDropDown.value == 'Saturn') {
        
//         getPlanetWeight('Saturn', 1.065);
//     }
//     if (planetDropDown.value == 'Uranus') {
        
//         getPlanetWeight('Uranus', 0.886);
//     }
}

 //planet weight calculating & halfprint
 function getPlanetWeight(planetName,Gs){
    planet = planetName;
    planetWeight = earthWeight * Gs;
    planetDropDown.value = planetName;
    returnMessage();
    updateView();
}

//background swag
function setBoxShadow(){
    let boxDiv = document.body;//getElementById('boks');
    planet == null || planet == undefined ? planet = 'Mercury' :
    planet == 'Mercury' ? boxDiv.classList.add('mercury-div') :
    planet == 'Venus' ? boxDiv.classList.add('venus-div') :
    planet == 'Moon' ? boxDiv.classList.add('moon-div') :
    planet == 'Mars' ? boxDiv.classList.add('mars-div') :
    planet == 'Jupiter' ? boxDiv.classList.add('jupiter-div') :
    planet == 'Saturn' ? boxDiv.classList.add('saturn-div') :
    planet == 'Uranus' ? boxDiv.classList.add('uranus-div') :
    console.log('error boxShadow');
}