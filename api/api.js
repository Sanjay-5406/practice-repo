// res = fetch('https://dog.ceo/api/breeds/image/random')
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })

let request;
response = fetch("https://dog.ceo/api/breeds/image/random")
    .then( response => response.json())
    .then( data => render(data) )
    .catch ( error => console.error("Image not found") )

function render(data){
    console.log(data.message)
    const apiEl = document.getElementById('api-container')
    apiEl.innerHTML += `
            <img src="${data.message}">
        `

}



