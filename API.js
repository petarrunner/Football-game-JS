// const ime = 'Petar';
// console.log(ime);
// const link = 'https://soccer.sportmonks.com/api/v2.0/teams/503/?api_token=';
// const mojApiToken = 'QraMrPjivD105IWp5z4Yj5FNTFPNWf8UgKg35ITnyLVn7eBNyN8uuBCP0I5R';

// const poziv = fetch(
//     'https://soccer.sportmonks.com/api/v2.0/teams/503/?api_token=QraMrPjivD105IWp5z4Yj5FNTFPNWf8UgKg35ITnyLVn7eBNyN8uuBCP0I5R/name',

//     {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': 'e76ce75767msh8e85a9d8f28236ep1f5f10jsn80b103b63e24',
//             'x-rapidapi-host': 'real-time-football-content.p.rapidapi.com',
//         },
//     }
// )
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });
let dataCountry;
// const request = fetch('https://restcountries.eu/rest/v2/name/serbia');
const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(function (response) {
        console.log(response);
        return response.json();
    });
    // .then(function (data) {
    //     console.log(data);
    // });
};
getCountryData('serbia');
dataCountry = getCountryData();
console.log(dataCountry);
function editText() {
    let text = document.querySelector('#kraj-akcije-sut').innerText;
    console.log(dataCountry.borders);
}
editText();
