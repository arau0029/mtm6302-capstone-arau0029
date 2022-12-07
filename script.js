const $homecal = document.getElementById('home_calendar')
const $navcal = document.getElementById('nav_calendar')
const data = {favourites: []}
const $fav_section = document.getElementById('fav_section')
const $fav_section_container = document.getElementById('fav_section_container')
const $fav_container = document.getElementById('fav_container')
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
const $main_fullimg = document.getElementById('main_full_img')
const $fav_fullimg = document.getElementById('fav_full_img')
const $nav_form = document.getElementById('nav_form')
const $daily_img = document.getElementById('daily_img')
const $main_full = document.getElementById('main_full')
const $fav_full = document.getElementById('fav_full')

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
    $main_fullimg.src = $hdurl
    $main_fullimg.alt = $title

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
    $main_fullimg.src = $hdurl
    $main_fullimg.alt = $title

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
    $main_fullimg.src = $hdurl
    $main_fullimg.alt = $title

    $apod_section.scrollIntoView();
}

function hide () {
    if ($fav_section.innerHTML == '') {
    $fav_container.classList.add('hide')
}
else {
    $fav_container.classList.remove('hide')
}
}

function saveFavourites () {
    localStorage.setItem('apodFavourites', JSON.stringify(data.favourites))
}

function buildFavourites () {
    const html = []

    for ( let  i=0; i < data.favourites.length; i++ ) {
        const favourite = data.favourites[i]
        html.push(`<div id="${favourite.date}" class="fav"><div class="fav_img"><img src="${favourite.url}" class="image"></div><div class="fav_txt"><h3>${favourite.title}</h3><p>${favourite.date}</p></div><button id="${i}" class="remove_bttn">Remove</button></div>`)
        $fav_section.innerHTML = html.join('')
    } 
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

    if($main_full) {
        $main_full.classList.toggle('hide')
        $main_full.classList.toggle('display')
  }

})

$main_full.addEventListener('click', function () {

    if($main_full) {
        $main_full.classList.toggle('hide')
        $main_full.classList.toggle('display')
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
    hide()
    alert('The image was added to your favourites collection! :D')
})

// Displays favourite full image

$fav_section_container.addEventListener('click', async function(e){
    const hdrul_full = e.target.closest('.fav')
    const date = hdrul_full.id
    const url = `https://api.nasa.gov/planetary/apod?api_key=LAZAEAC6Pw6HoGAejxcCPxugT2agihZwOGmioXUr&date=${date}`
    const response = await fetch(url)
    const json = await response.json()
    json.date = hdrul_full.id;
    const $title = json.title
    const $hdurl = json.hdurl

    $fav_fullimg.src = $hdurl
    $fav_fullimg.alt = $title

    if($fav_full) {
        $fav_full.classList.toggle('hide')
        $fav_full.classList.toggle('display')
  }
})

$fav_full.addEventListener('click', function (){
    if($fav_full) {
        $fav_full.classList.toggle('hide')
        $fav_full.classList.toggle('display')
  }
})

// Removes favourites from local storage

$fav_section.addEventListener('click', function (e){
    const $remove_bttn = e.target.closest('.remove_bttn')
    const index = $remove_bttn.id

    if (index !== -1) { 
    const $remove_html = document.getElementById(`${data.favourites[index].date}`)
    $remove_html.remove()
    data.favourites.splice(index, 1)
    console.log(data.favourites)
    saveFavourites()
    loadFavourites()
    hide()   
    }

    document.location.reload()
})



loadFavourites()
buildFavourites()
hide()