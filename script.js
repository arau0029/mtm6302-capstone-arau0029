const $homecal = document.getElementById('home_calendar')
const $navcal = document.getElementById('nav_calendar')

const today = new Date()

$homecal.max = today.toISOString().split("T")[0];
$navcal.max = today.toISOString().split("T")[0];
