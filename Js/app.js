// const  date = new Date();
// console.log(date.getFullYear())  // Data


// const xhr = new XMLHttpRequest();
// xhr.addEventListener('load', function(){
//     const response = JSON.parse(this.response);
//     console.log(response)
// });
// xhr.open('GET', 'https://restcountries.eu/rest/v2/name/{Kyrgyzstan}');
// xhr.send();


// const  xhr = new XMLHttpRequest();
// xhr.addEventListener("load", function () {
//     const response = JSON.parse(this.responseText)
//     console.log(response[0].capital);
// });
// xhr.open("GET", "https://restcountries.eu/rest/v2/name/{France}" )
// xhr.send();



// const xhr = new XMLHttpRequest(); 
//     xhr.addEventListener('load',function(){
//       const response = JSON.parse(this.responseText);
//       console.log(response[0].languages);
//       console.log(response[0].borders);
//       console.log(response[0].flag);
//       console.log(response);
//     });
//     xhr.open("GET","https://restcountries.com/v3.1/name/{USA}");
//     xhr.send();




    
"use strict"

request({
    method: 'GET',
    url: 'https://restcountries.com/v3.1/name/{Japan}',
    succes: response =>{
        console.log(this.response)

    }
})


