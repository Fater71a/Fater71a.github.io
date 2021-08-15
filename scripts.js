let currentPhoto = 0;

let imagesData = [
{
    photo: './images/teahub.io-new-york-wallpaper-full-3152306.png',
    title: 'New York',
    description: 'Mi ez itt, csak nem a Times Square?'
},
{
    photo: './images/teahub.io-fall-desktop-wallpaper-264731.png',
    title: 'Színes őszi falevelek',
    description: 'Ezt megnézném élőben is...'
},
{
    photo: './images/teahub.io-new-hd-background-wallpaper-1012844.png',
    title: 'Másik őszi táj',
    description: 'Ezt is megnézném élőben is...'
},
{
    photo: './images/teahub.io-nebula-wallpaper-1920x1080-2260742.png',
    title: 'Galaxisok',
    description: 'Majd ha egyszer utazni fogunk az űrben...'
},
{
    photo: './images/teahub.io-all-love-wallpaper-2013404.png',
    title: 'Love is love',
    description: 'A szerelem a jövőben is szerelem'
},
{
    photo: './images/teahub.io-audi-hd-wallpapers-1366x768-3099186.png',
    title: 'Lamborghini',
    description: 'Ennek a képnek a fájlnevébe vajon miért került az Audi szó?'
},
{
    photo: './images/teahub.io-football-wallpapers-1920x1080-1651987.png',
    title: 'Amerikai foci',
    description: 'Hű mekkora kamera...'
},
{
    photo: './images/teahub.io-wallpaper-hd-1080p-free-83156.png',
    title: 'Még egy őszi táj',
    description: 'Talán már nagyon várom, hogy vége legyen a melegnek. Ide azért írok egy hosszabb szöveget, hogy láthatóvá váljon, hogy mi történik, ha a leírás több sorban fér csak el.'
}
];

function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);

    $('.thumbnailBand').empty();
    imagesData.forEach((item, index) => {
        if (index == photoNumber) {
            $('.thumbnailBand').append(`<li class="thumbnail thumb-selected" data-thumbnail-index="${index}"><div class="title">${item.title}</div><div class="triangle-down"></div><div class="triangle-up"></div><div class="thumb-holder"><img id="thumb-photo" src="${item.photo}" alt=""></div></li>`);
        } else {
            $('.thumbnailBand').append(`<li class="thumbnail" data-thumbnail-index="${index}"><div class="title">${item.title}</div><div class="triangle-down"></div><div class="thumb-holder"><img id="thumb-photo" src="${item.photo}" alt=""></div></li>`);
        };
    })
};

loadPhoto(currentPhoto);

$('#left-arrow').click(() => {
    currentPhoto--;
    if (currentPhoto < 0) {currentPhoto = imagesData.length - 1};
    loadPhoto(currentPhoto);
});

$('#right-arrow').click(() => {
    currentPhoto++;
    if (currentPhoto > imagesData.length - 1) {currentPhoto = 0};
    loadPhoto(currentPhoto);
})

$('body').keydown(function(e) {
    if (e.keyCode == 37) {$('#left-arrow' ).trigger('click')};
    if (e.keyCode == 39) {$('#right-arrow').trigger('click')};
});

$(document).on('click', '.thumbnail', function(event) {
    currentPhoto = parseInt($(this).attr('data-thumbnail-index'));
    loadPhoto(currentPhoto);
});
