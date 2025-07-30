
//CARD

let destino = [
    {
    "id": "1",
    "name": "Catarata_del_Iguazu",
    "image": "js/imagen/cataratas-iguazu-m.jpg",
    "web": "https://iguazuargentina.com/",
    "price": "300.000",
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
    "price": "250.000",
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
    "price": "200.000",
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
    "price": "230.000",
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
    "price": "350.000",
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
    "price": "240.000",
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
    "price": "260.000",
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
//         console.log(response);
//         eventos = [...response]
//         console.log(eventos);
//         printCards('eventscomp',response.destino)
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



let cardPlaces = []

function printCards(){
    for (let card of destino){
        let listcard = 
        `
        <div class="card" style="width: 18rem;" id="card-${card.id}">
            <img src=${card.image} class="card-img-top img-fit" alt=${card.name}>
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">${card.web}</p>
                <div class="price-tag mb-2">$${card.price}</div>
        
                <a class="btn btn-primary mb-2 w-100" href="details.html?id=${card.id}" role="button">Detalles</a>
        
                <!-- Sección de compra con validación -->
                <div class="buy-section">
                    <div class="d-flex align-items-center gap-2 mb-2">
                        <label for="quantity-${card.id}" class="form-label mb-0">Cant:</label>
                        <input type="number" class="form-control quantity-input" id="quantity-${card.id}" min="1" max="10" value="1">
                        <button class="btn btn-success btn-buy flex-grow-1" onclick="buyProduct(${card.id}, '${card.name}', ${card.price})">
                        🛒 Comprar
                        </button>
                    </div>
                    <div id="status-${card.id}" class="status-message" style="display: none;"></div>
                </div>
            </div>
        </div>
        `
        cardPlaces.push(listcard);
        console.log(cardPlaces);
    }
    let basecard = document.getElementById('eventscomp');
    basecard.innerHTML = cardPlaces.join('')
}

printCards();