// Makes max value of caledar today's date
const $homecal = document.getElementById('home_calendar')
const $navcal = document.getElementById('nav_calendar')

const today = new Date()

$homecal.max = today.toISOString().split("T")[0];
$navcal.max = today.toISOString().split("T")[0];

//Fetches API information - header calendar
const $form = document.getElementById('header_form')

$form.addEventListener('submit', async function (e) {
    e.preventDefault()

    const date = $homecal.value

    const url = `https://api.nasa.gov/planetary/apod?api_key=LAZAEAC6Pw6HoGAejxcCPxugT2agihZwOGmioXUr&date=${date}`
    const response = await fetch(url)
    const json = await response.json()
    json.date = $homecal.value;
    console.log(json)
    const $main = document.getElementById('container_main')
    const $date = json.date
    const $explanation = json.explanation
    const $title = json.title
    const $url = json.url

    $main.innerHTML = (`
        <div class="daily_img">
        <div class="zoom">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
        </div>
        <img src="${$url}" alt="${$title}">
        </div>
        <div class="daily_txt">
        <div class="fav_button">
            <label>
                <input type="checkbox" id="add_fav"/>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </span>
            </label>
        </div>
        <div class="daily_information">
            <h2 class="img_title">${$title}</h2>
            <p class="date_chosen">${$date}</p>
            <p class="img_description">${$explanation}</p>
        </div>
        </div>`)
  
    })

//Fetches API information - nav calendar
const $nav_form = document.getElementById('nav_form')

$nav_form.addEventListener('change', async function (e) {
    e.preventDefault()

    const date = $navcal.value

    const url = `https://api.nasa.gov/planetary/apod?api_key=LAZAEAC6Pw6HoGAejxcCPxugT2agihZwOGmioXUr&date=${date}`
    const response = await fetch(url)
    const json = await response.json()
    json.date = $navcal.value;
    console.log(json)
    const $main = document.getElementById('container_main')
    const $date = json.date
    const $explanation = json.explanation
    const $title = json.title
    const $url = json.url

    $main.innerHTML = (`
        <div class="daily_img">
        <div class="zoom">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
        </div>
        <img src="${$url}" alt="${$title}">
        </div>
        <div class="daily_txt">
        <div class="fav_button">
            <label>
                <input type="checkbox" id="add_fav"/>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </span>
            </label>
        </div>
        <div class="daily_information">
            <h2 class="img_title">${$title}</h2>
            <p class="date_chosen">${$date}</p>
            <p class="img_description">${$explanation}</p>
        </div>
        </div>`)
  
    })