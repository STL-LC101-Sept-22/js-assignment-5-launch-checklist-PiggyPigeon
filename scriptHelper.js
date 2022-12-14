
// Write your helper functions here!

require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let div = document.getElementById("missionTarget");
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
   let numberInput = Number(testInput);
   if (testInput === "")
   {

       return "Empty";
   }
   else if (isNaN(numberInput))
   {
   
       return "Not a Number";
   }
   else if (isNaN(numberInput) === false)
   {
 
       return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let fuel = document.getElementById("fuelStatus");
   let cargo = document.getElementById("cargoStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
       alert("All fields are required!");
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" ) {
       alert("You gotta enter valid input!");
   } else {
       list.style.visibility = "hidden"
       pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
       copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
       let launchStatus = document.getElementById("launchStatus");
       if (fuelLevel < 10000 && cargoLevel <= 10000) {
           fuel.innerHTML = "Fuel level too low for launch";
           cargo.innerHTML = "Cargo mass low enough for launch"
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "rgb(199, 37, 78)";
           list.style.visibility = "visible";
       } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
           fuel.innerHTML = "Fuel level high enough for launch"
           cargo.innerHTML = "Cargo mass too heavy for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "rgb(199, 37, 78)";
           list.style.visibility = "visible";
       } else if (fuelLevel < 10000 && cargoLevel > 10000) {
           fuel.innerHTML = "Fuel level too low for launch";
           cargo.innerHTML = "Cargo mass too heavy for launch";
           launchStatus.innerHTML = "Shuttle Not Ready for Launch";
           launchStatus.style.color = "rgb(199, 37, 78)";
           list.style.visibility = "visible";
       } else {
           fuel.innerHTML = "Fuel level high enough for launch"
           cargo.innerHTML = "Cargo mass low enough for launch"
           launchStatus.innerHTML = "Shuttle is Ready for Launch";
           launchStatus.style.color = "rgb(65, 159, 106)";
           list.style.visibility = "visible";
       }
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            if (response.status >= 400) {
                throw new Error ("Bad response");
            }
            else {
                return response.json();
            }
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;





// require('isomorphic-fetch');

// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
//     let missionTarget = documet.getElementById("missionTarget");
//     missionsTarget.innerHTML = `
//             <h2>Mission Destination</h2>
//             <ol>
//                  <li>Name: ${name}</li>
//                  <li>Diameter: ${diameter}</li>
//                  <li>Star: ${star}</li>
//                  <li>Distance from Earth: ${distance}</li>
//                 <li>Number of Moons: ${moons}</li>
//             </ol>
//             <img src="${imageUrl}">
//             `;   
// }


// function validateInput(testInput) {
//    let numInput = parseInt(testInput);
//    if (testInput === ""){
//     return "Empty";
//    }
//    else if (isNaN(numInput)) {
//     return "Not a Number";
//    }
// //    else if (isNaN(numInput) === false) {
//     return "Is a Number";
// // }
// }

// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
//     //link to HTML
//     let fuel = document.getElementById("fuelStatus");
//     let cargo = document.getElementById("cargoStatus");
//     let pilotStatus = document.getElementById("pilotStatus");
//     let copilotStatus = document.getElementById("copilotStatus");
//     //run input through validator
//     if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
//         alert("All fields are required")
//     } 
//     else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
//         alert("You gotta enter VALID input")
//     } 
//     //thennn make launch status visible.
//     //say some shit about the pilots
//     list.style.visibility = "visible";
//     pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
//     copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
//     //set statuses for launch
//     let launchStatus = document.getElementById("launchStatus");
//     if (fuelLevel < 10000 && cargoLevel <= 10000) {
//         fuel.innerHTML = "Fuel level too low for launch";
//         cargo.innerHTML = "Cargo mass low enough for launch";
//         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
//         launchStatus.style.color = 'red';
//     }
//     else if (fuelLevel >= 10000 && cargoLevel > 10000) {
//         fuel.innerHTML = "Fuel level high enough for launch";
//         cargo.innerHTML = 'Cargo mass too heavy for launch';
//         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
//         launchStatus.style.color = 'red';
//     }
//     else if (fuelLevel < 10000 && cargoLevel > 10000){
//         fuel.innerHTML = "Fuel level too low for launch";
//         cargo.innerHTML = 'Cargo mass too heavy for Launch';
//         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
//         launchStatus.style.color = 'red';
//     }
//     else {
//         fuel.innerHTML = "Fuel level high enough for launch";
//         cargo.innerHTML = "Cargo mass low enough for launch";
//         launchStatus.innerHTML = "Shuttle is Ready for Launch";
//         launchStatus.style.color = "green";
//     }
// }

// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
//        if (response.status >= 400) {
//             throw new Error ("Bad response");
//        }
//        else {
//             return response.json();
//        }
//     });
//     return planetsReturned;
// }

// function pickPlanet(planets) {
//     let index = Math.floor(Math.random()*planets.length);
//     return planets[index];
// }

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
