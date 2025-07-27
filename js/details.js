//CARD

let destino = [
    {
    "id": "1",
    "name": "Catarata_del_Iguazu",
    "image": "js/imagen/cataratas-iguazu-m.jpg",
    "web": "https://iguazuargentina.com/",
    "video": "https://youtu.be/iOQGXaaoe3w",
    "iframe": '<iframe width="681" height="383" src="https://www.youtube.com/embed/iOQGXaaoe3w" title="He encontrado el PARAÍSO en Argentina: Iguazú" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    "hotel": "https://www.despegar.com.ar/hoteles/h-224574/exe-hotel-cataratas-puerto+iguazu",
    "aereo": "https://www.aerolineas.com.ar/destinos/argentina/vuelos-directos-a-iguazu",
    },
    {  
    "id": "2",
    "name": "San_Rafael_-_Mendoza",
    "image": "js/imagen/dique-los-reyunos.jpg",
    "web": "https://sanrafaelturismo.gov.ar/",
    "video": "https://youtu.be/Ho6mbw1mdSM",
    "iframe": '<iframe width="681" height="383" src="https://www.youtube.com/embed/Ho6mbw1mdSM" title="SAN RAFAEL, guía definitiva de la Ciudad y alrededores | Mendoza" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    "hotel": "https://www.despegar.com.ar/hoteles/hl/102/i1/hoteles-en-san+rafael",
    "aereo": "https://www.aerolineas.com.ar/destinos/argentina/vuelos-directos-a-mendoza",   
    },
    {  
    "id": "3",
    "name": "Mendoza",
    "image": "js/imagen/mendoza.jpg",
    "web": "https://www.mendoza.gov.ar/turismo/",
    "video": "https://youtu.be/8lxze467rQU",
    "iframe": '<iframe width="681" height="383" src="https://www.youtube.com/embed/8lxze467rQU" title="QUE HACER EN MENDOZA CAPITAL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    "hotel": "https://www.despegar.com.ar/hoteles/hl/4451/i1/hoteles-en-mendoza",
    "aereo": "https://www.aerolineas.com.ar/destinos/argentina/vuelos-directos-a-mendoza",   
    },
    {  
    "id": "4",
    "name": "Mar_del_Plata",
    "image": "js/imagen/playa-Varese.jpg",
    "web": "https://www.mardelplata.gob.ar/",
    "video": "https://youtu.be/q_prQLaxA0Q",
    "iframe": '<iframe width="681" height="383" src="https://www.youtube.com/embed/q_prQLaxA0Q" title="Mar del Plata su costa, en 6 minutos, en 4k, Ultra High Definition, UHD 📺" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    "hotel": "https://www.despegar.com.ar/hoteles/hl/4445/i1/hoteles-en-mar+del+plata",
    "aereo": "https://www.aerolineas.com.ar/destinos/argentina/vuelos-directos-a-mar-del-plata",   
    },
    {  
    "id": "5",
    "name": "Bariloche",
    "image": "js/imagen/bariloche.jpg",
    "web": "https://www.aerolineas.com.ar/destinos/argentina/vuelos-directos-a-mendoza",
    "video": "https://youtu.be/dHV4AgQS2Do",
    "iframe": '<iframe width="681" height="383" src="https://www.youtube.com/embed/dHV4AgQS2Do" title="BARILOCHE: qué ver y qué hacer 2025 | Guía de VIAJE completa | Argentina" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    "hotel": "https://www.despegar.com.ar/hoteles/hl/901/i1/hoteles-en-san+carlos+de+bariloche",
    "aereo": "https://www.aerolineas.com.ar/destinos/argentina/vuelos-directos-a-bariloche",   
    },
    {  
    "id": "6",
    "name": "Cordoba",
    "image": "js/imagen/cordoba.jpg",
    "web": "https://cordobaturismo.gov.ar/",
    "video": "https://youtu.be/rMFZ63izKCo",
    "iframe": '<iframe width="681" height="383" src="https://www.youtube.com/embed/rMFZ63izKCo" title="[2024] Qué hacer en Córdoba Capital en 2 días ✅ | Argentina 🇦🇷 [4K]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    "hotel": "https://cordobaturismo.gov.ar/",
    "aereo": "https://www.aerolineas.com.ar/destinos/argentina/vuelos-directos-a-cordoba",   
    },
    {  
    "id": "7",
    "name": "Salta",
    "image": "js/imagen/salta.jpg",
    "web": "https://visitsalta.ar/",
    "video": "https://visitsalta.ar/",
    "iframe": '<iframe width="681" height="383" src="https://www.youtube.com/embed/GSrMbJXFlvA" title="QUE HACER EN SALTA ARGENTINA – Imperdibles en Salta Capital" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    "hotel": "https://www.despegar.com.ar/hoteles/hl/6846/i1/hoteles-en-salta",
    "aereo": "https://www.aerolineas.com.ar/vuelos-a-salta",   
    },
]


// async function fetchApi() {
//     try{
//         let fetchResponse = await fetch(urlApi)
//         let response = await fetchResponse.json()
//         eventos = [...response.destino]
//         console.log(eventos);
//         defineDeteils(eventos)
//         return response
//     } catch(error){
//         console.log(error);
//     }
// }

// fetchApi()

// fetch (urlApi)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     eventos = [...data]
//     printCards('eventscomp',data.destino)
// })
// .catch(error => console.log(error))


let query = location.search
console.log(query)
let params = new URLSearchParams(query)
console.log(params)
let id_query = params.get('id')
console.log(id_query);

let cardPlaces = []

function defineDetails(array_destino){
    let eventsfilter = array_destino.filter(each => each.id == id_query)[0];
    cardPlaces = 
    `
    <div class="col-md-4">
      <img src="${eventsfilter.image}" class="img-fluid rounded-start" alt="${eventsfilter.name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${eventsfilter.name}</h5>
        <p class="card-text">${eventsfilter.web}</p>
        <p class="card-video">${eventsfilter.video}</p>
        <p class="card-link">${eventsfilter.hotel}</p>
        <p class="card-link">${eventsfilter.aereo}</p>
        <h6 class="card-subtitle mb-2 text-muted">${eventsfilter.price}</h6>
        <a class="btn btn-primary" href="details.html?id=${eventsfilter.id}" role="button">Details</a>
      </div>
    </div>
`
let gencard = document.getElementById('detailscomp')
gencard.innerHTML = cardPlaces
}












// function printCards(){
//     for (let card of destino){
//         let listcard = 
//         `
//         <div class="card" style="width: 18rem;" ${card.id}>
//             <img src=${card.image} class="card-img-top img-fit" alt=${card.name}>
//             <div class="card-body">
//                 <h5 class="card-title">${card.name}</h5>
//                 <p class="card-text">${card.web}</p>
//                 <a class="btn btn-primary" href="details.html?id=${card.id}" role="button">Details</a>
//             </div>
//         </div>
//         ` 

//         cardPlaces.push(listcard);
//         console.log(cardPlaces);
//     }
//     let basecard = document.getElementById('eventscomp');
//     basecard.innerHTML = cardPlaces.join('')
// }

// printCards();