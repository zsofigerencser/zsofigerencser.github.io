/*$('#photo').attr('src', data.photo);
$('#photo-title').text(data.title);
$('#photo-description').text(data.description);*/


/*$('#photo').attr('src', door.photo);
$('#photo-title').text(door.title);
$('#photo-description').text(door.description);*/

let currentPhoto = 0;
let imagesData = [
    {
        photo: 'Img/Trinity Long Room.jpg',
        title: 'The Library of Trinity College, Dublin',
        description: 'The Library is the permanent home to the Brian Boru harp which is a national symbol of Ireland, a copy of 1916 Proclamation of the Irish Republic, and the Book of Kells. The 65-metre-long Long Room of the library is lined with marble busts of great philosophers, writers, and men who supported the college.'
    },
    {
        photo: 'Img/Deer in Phoenix Park.jpg',
        title: 'Phoenix Park, Dublin',
        description:'Phoenix Park (Páirc an Fhionnuisce) is an urban park in Dublin, lying 2–4 km west of the city centre, north of the River Liffey. It includes large areas of grassland and tree-lined avenues, and since the 17th century has been home to a herd of wild fallow deer.'
    },
    {
        photo: 'Img/Doors of Dublin2.jpg',
        title: 'The Doors of Dublin',
        description: 'The period of architectural development in Georgian Dublin was characterised by a uniform style – meaning all the new houses in a particular area looked exactly the same. Painting the doors an unusual colour was the only way for the people who lived in these affluent new developments to make a house distinctive from the outside.'
    },
    {
        photo: 'Img/Dún Laoghaire.jpg',
        title: 'Dún Laoghaire, Co. Dublin',
        description: "Dún Laoghaire is a suburban coastal town in the traditional county of Dublin. The town's name means 'fort of Laoghaire'. This refers to Lóegaire mac Néill, a 5th-century High King of Ireland, who chose the site as a sea base from which to carry out raids on Britain and Gaul."
    },
    {
        photo: 'Img/Samuel Beckett Bridge2.jpg',
        title: 'Samuel Beckett Bridge, Dublin',
        description: 'Samuel Beckett Bridge (Droichead Samuel Beckett) is a cable-stayed bridge in Dublin on the south side of the River Liffey. The shape of the bridge is said to evoke an image of a harp, the national symbol for Ireland from as early as the thirteenth century.'
    },
    {
        photo: 'Img/Malahide Castle2.jpg',
        title: 'Malahide Castle, Co. Dublin',
        description: 'The lands and harbour of Malahide (Mhullach Íde) were gifted to Richard Talbot for his services to the crown in 1185. The original stronghold built on the lands was a wooden fortress but this was eventually superseded by a stone structure on the site of the current Malahide Castle.'
    },
    {
        photo: 'Img/Killarney NatPark.jpg',
        title: 'Killarney National Park, Kerry',
        description: 'Killarney National Park was the first national park in Ireland and is one of the very few places that has been continuously covered by woodland since the end of the most recent glacial period. Lough Leane is the largest of the Killarney lakes and contains over 30 islands.'
    },
    {
        photo: 'Img/Ring of Kerry2.jpg',
        title: 'Ring of Kerry, Kerry',
        description: 'The Ring of Kerry is a circular tourist route with scenic views and multiple sheep spotting opportunities. The traveller can even see the island of Skellig Michael, a location used in Star Wars for scenes on Ahch-To, the lost planet. '
    }
];

/*$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);*/

let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text(imagesData[currentPhoto].description);
}

loadPhoto(currentPhoto)

$('#arrow-next').click(() => {
    if (currentPhoto < 7) {
    currentPhoto++ };
    loadPhoto(currentPhoto);
})
$('#arrow-previous').click(() => {
    if (currentPhoto > 0) {
    currentPhoto-- };
    loadPhoto(currentPhoto);
})

$('#arrow-next').mouseenter(() => {
    $('#next').css("transform", "scale(1.3) rotate(0.5turn)");
    $('#next').css("opacity", "0.9");
});
$ ('#arrow-next').mouseleave(() => {
    $('#next').css("transform", "scale(1.0) rotate(0.5turn)");
    $('#next').css("opacity", "1");
})

$('#arrow-previous').mouseenter(() => {
    $('#previous').css("transform", "scale(1.3)");
    $('#previous').css("opacity", "0.9");
});
$ ('#arrow-previous').mouseleave(() => {
    $('#previous').css("transform", "scale(1.0)");
    $('#previous').css("opacity", "1");
})



imagesData.forEach ((item, index) => {
    $('.thumbnail-container').append(`<div class="thumbnail" data-index="${index}"></div>`);
    $('.thumbnail').click ((event) => {
        let indexClicked =  
    $(event.target).attr('data-index');
        /*let numberIndex = parseInt(indexClicked);*/
    currentPhoto = indexClicked;
    loadPhoto(currentPhoto)
        })     
})

/*$('.thumbnail').append('<img class="thumb-image"></img>')
$('.thumb-image').attr('src', imagesData[3].photo);*/

