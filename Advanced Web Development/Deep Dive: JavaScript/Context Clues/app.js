var NUM_ACCUSATIONS = 100;
var friend_list = ["Jeff", "Bob", "Chis", "Sophie", "Jane"];
var location_list = ["Observation tower", "Farmhouse", "Shop", "High-rise building", "Chicken coop", "Barracks", "Church", "Monastery", "Town hall", "Skyscraper"];
var weapon_list = ["atomic bomb", "ballista", "cleaver", "dagger", "explosives", "flamethrower", "grenade", "hatchet", "javelin", "katana", "longbow", "mace", "nerve gas", "onager", "pistol", "quarterstaff", "revolver", "shotgun", "tomahawk", "Uzi"];

function makeAlert(index, friend, weapon, location) {
    
    function displayName() {
        alert(`Accusation ${index}: I accuse ${friend}, with the ${weapon} in the ${location}!`);
    }
    return displayName;
}

document.addEventListener("DOMContentLoaded", () => {
    var accusationHolder = document.getElementById('accusations');
    for (var index = 1; index <= NUM_ACCUSATIONS; index++) {

        var accusation = document.createElement('div');
        var accusationText = document.createTextNode(`Accusation ${index}`);

        accusation.className = "alert alert-danger";
        accusation.setAttribute("data-toggle", "tooltip");
        accusation.setAttribute("data-placement", "top");

        FRIEND_NAME = friend_list[index % 5];
        LOCATION_NAME = location_list[index % 10];
        WEAPON_NAME = weapon_list[index % 20];

        var accusationMessage = `Accusation ${index}: I accuse ${FRIEND_NAME}, with the ${WEAPON_NAME} in the ${LOCATION_NAME}!`;
        // var accusationAlert = accusationAlertCreator(index, FRIEND_NAME, WEAPON_NAME, LOCATION_NAME);

        var aler = makeAlert(index, FRIEND_NAME, WEAPON_NAME, LOCATION_NAME);

        accusation.addEventListener('click', aler);

        accusation.setAttribute("title", accusationMessage);


        accusation.appendChild(accusationText);

        accusationHolder.appendChild(accusation);
    }


    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});