const $homecal = document.getElementById('home_calendar')
const $navcal = document.getElementById('nav_calendar')
const data = {favourites: []}
const $fav_section = document.getElementById('fav_section')
const $add_fav = document.getElementById('add_fav')
const $remove_fav = document.getElementById('remove_fav')
const today = new Date()
const $form = document.getElementById('header_form')
const $apod_section = document.getElementById('apod_section')
const $footer = document.querySelector('footer')
const $main_img = document.getElementById('main_img')
const $img_title = document.querySelector('.img_title')
const $date_chosen = document.querySelector('.date_chosen')
const $img_description = document.querySelector('.img_description')
const $fullimg = document.querySelector('.fullimg')
const $nav_form = document.getElementById('nav_form')
const $daily_img = document.getElementById('daily_img')
const $fullimg_container = document.querySelector('.fullimg_container')
const todayArray = [
    today.getFullYear(),
    today.getMonth()+1,
    today.getDate()
]
const todayDate = todayArray.join('-')
const $today_footer = document.getElementById('today_pic')



async function apihome () {
    const date = $homecal.value
    const url = `https://api.nasa.gov/planetary/apod?api_key=LAZAEAC6Pw6HoGAejxcCPxugT2agihZwOGmioXUr&date=${date}`
    const response = await fetch(url)
    const json = await response.json()
    data.apod = json
    json.date = $homecal.value;
    const $date = json.date
    const $explanation = json.explanation
    const $title = json.title
    const $url = json.url
    const $hdurl = json.hdurl

    $main_img.src = $url
    $main_img.alt = $title
    $img_title.textContent = $title
    $date_chosen.textContent = $date
    $img_description.textContent = $explanation
    $fullimg.src = $hdurl
    $fullimg.alt = $title

    $apod_section.scrollIntoView();
}

async function apinav () {
    const date = $navcal.value
    const url = `https://api.nasa.gov/planetary/apod?api_key=LAZAEAC6Pw6HoGAejxcCPxugT2agihZwOGmioXUr&date=${date}`
    const response = await fetch(url)
    const json = await response.json()
    json.date = $navcal.value;
    data.apod = json
    const $date = json.date
    const $explanation = json.explanation
    const $title = json.title
    const $url = json.url
    const $hdurl = json.hdurl

    $main_img.src = $url
    $main_img.alt = $title
    $img_title.textContent = $title
    $date_chosen.textContent = $date
    $img_description.textContent = $explanation
    $fullimg.src = $hdurl
    $fullimg.alt = $title

    $apod_section.scrollIntoView();
}

async function apifooter () {
    const url = `https://api.nasa.gov/planetary/apod?api_key=LAZAEAC6Pw6HoGAejxcCPxugT2agihZwOGmioXUr&date=${todayDate}`
    const response = await fetch(url)
    const json = await response.json()
    json.date = todayDate;
    data.apod = json
    const $date = json.date
    const $explanation = json.explanation
    const $title = json.title
    const $url = json.url
    const $hdurl = json.hdurl

    $main_img.src = $url
    $main_img.alt = $title
    $img_title.textContent = $title
    $date_chosen.textContent = $date
    $img_description.textContent = $explanation
    $fullimg.src = $hdurl
    $fullimg.alt = $title

    $apod_section.scrollIntoView();
}

function saveFavourites () {
    localStorage.setItem('apodFavourites', JSON.stringify(data.favourites))
}

function buildFavourites () {
    const html = []

    for ( let  i=0; i < data.favourites.length; i++ ) {
        const favourite = data.favourites[i]
        html.push(`<div id="${favourite.date}"><h3>${favourite.title}</h3><p>${favourite.date}</p><img src="${favourite.url}"></div>`)
        $fav_section.innerHTML = html.join('')
    } 
}

function removeFavourites () {
    const $remove_html = document.getElementById(`${data.apod.date}`)
    $remove_html.remove()
 }

function loadFavourites () {
    const storage = localStorage.getItem('apodFavourites')

    if (storage) {
        data.favourites = JSON.parse(storage)
    }
}

// Makes max value of caledar today's date

$homecal.max = today.toISOString().split("T")[0];
$navcal.max = today.toISOString().split("T")[0];

//Fetches API information - header calendar

$form.addEventListener('submit', function (e) {
    e.preventDefault()
    apihome()
    $apod_section.classList.remove('hide')
    })

//Fetches API information - nav calendar

$nav_form.addEventListener('change', function (e) {
    e.preventDefault()
    apinav()
    $apod_section.classList.remove('hide')
    })

//Makes image full screen

 $daily_img.addEventListener('click', function () {

    if($fullimg_container) {
        $fullimg_container.classList.toggle('hide')
        $fullimg_container.classList.toggle('display')
  }

})

$fullimg_container.addEventListener('click', function () {

    if($fullimg_container) {
        $fullimg_container.classList.toggle('hide')
        $fullimg_container.classList.toggle('display')
  }

 })
 
// Makes 'Today's picture' anchor on footer work

$today_footer.addEventListener('click', function (e){
    e.preventDefault()
    apifooter()
    $apod_section.classList.remove('hide')
})

// Stores favourites on local storage

$add_fav.addEventListener('click', function (){
    data.favourites.push(data.apod)
    saveFavourites()
    buildFavourites()
})

$remove_fav.addEventListener('click', function (){
    data.favourites.splice(data.apod)
    saveFavourites()
    removeFavourites()
})


loadFavourites()
buildFavourites()