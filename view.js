updateView();
function updateView() {
    document.getElementById('app').innerHTML = `
        <div id="boks" class="float-div" onmouseover="bodyBackgroundImg()">
            <h1>Calculate your weight on other planets</h1>
            <input id="earthWeightInput" type="text" value="${earthWeight}"/>
            <select id="planets">
                <option value="Mercury">Mercury</option>
                <option value="Venus">Venus</option>
                <option value="Moon">Moon</option>
                <option value="Mars">Mars</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Saturn">Saturn</option>
                <option value="Uranus">Uranus</option>
            </select>
            <button onclick="calculatePlanetWeight()">calculate weight on ${planet}</button><br/>
                ${returnPlanetaryWeight}
        </div>
    `;
    
}