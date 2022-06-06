const form = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')

//images and icons
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

//loader
const loader = document.querySelector("#loader");

function displayLoader (){
    loader.removeAttribute('hidden')
}

function hideLoader (){
    loader.setAttribute('hidden', '');
}

const updateUI = (data) => {

    const { cityDetails, weather } = data;

    details.innerHTML = `
        <h2>${cityDetails.EnglishName}</h2>
        <div class="detail">
            <p>${weather.WeatherText}</p>
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>`

    //update icon
    const iconSource = `images/icons/${weather.WeatherIcon}.svg`
    icon.setAttribute('src', iconSource)
        
    //update images
    let timeSource = null;
    weather.IsDayTime ? timeSource = 'images/day.svg' : timeSource = 'images/night.svg'
    time.setAttribute('src', timeSource)

    //display card
    if (card.classList.contains("display-none")){
        card.classList.remove("display-none")
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    displayLoader();

    //get city value
    const city = form.city.value.trim();
    form.reset()

    //update the ui with the new city
    updateCity(city)
        .then(data => {
            hideLoader()
            updateUI(data)
        })
        .catch(err => console.log(err.message))
})

const updateCity = async (city) => {
    const cityDetails = await getCity(city)
    const weather = await getWeather(cityDetails.Key)
    return { cityDetails, weather }
}