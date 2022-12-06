// Makes max value of caledar today's date
const $homecal = document.getElementById('home_calendar')
const $navcal = document.getElementById('nav_calendar')

const today = new Date()

$homecal.max = today.toISOString().split("T")[0];
$navcal.max = today.toISOString().split("T")[0];

//Fetches API information - header calendar
const $form = document.getElementById('header_form')
const $main = document.querySelector('main')
const $footer = document.querySelector('footer')
const $main_img = document.getElementById('main_img')
const $img_title = document.querySelector('.img_title')
const $date_chosen = document.querySelector('.date_chosen')
const $img_description = document.querySelector('.img_description')
const $fullimg = document.querySelector('.fullimg')

async function apihome () {
    const date = $homecal.value
    const url = `https://api.nasa.gov/planetary/apod?api_key=LAZAEAC6Pw6HoGAejxcCPxugT2agihZwOGmioXUr&date=${date}`
    const response = await fetch(url)
    const json = await response.json()
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

    $main.scrollIntoView();
}

$form.addEventListener('submit', function (e) {
    e.preventDefault()
    apihome()
    $main.classList.remove('hide')
    })

//Fetches API information - nav calendar
const $nav_form = document.getElementById('nav_form')

async function apinav () {
    const date = $navcal.value
    const url = `https://api.nasa.gov/planetary/apod?api_key=LAZAEAC6Pw6HoGAejxcCPxugT2agihZwOGmioXUr&date=${date}`
    const response = await fetch(url)
    const json = await response.json()
    json.date = $navcal.value;
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

    $main.scrollIntoView();
}

$nav_form.addEventListener('change', function (e) {
    e.preventDefault()
    apinav()
    $main.classList.remove('hide')
    })

//Makes image full screen

const $daily_img = document.getElementById('daily_img')
const $fullimg_container = document.querySelector('.fullimg_container')

 $daily_img.addEventListener('click', function () {

    if($fullimg_container) {
        $fullimg_container.classList.toggle('hide')
        $fullimg_container.classList.toggle('display')
  }

  $fullimg_container.scrollIntoView();
})

$fullimg_container.addEventListener('click', function () {

    if($fullimg_container) {
        $fullimg_container.classList.toggle('hide')
        $fullimg_container.classList.toggle('display')
  }

  $main.scrollIntoView();
 })