const key = 'yx2fXVF0tQ7yG5ZEJu3BSu8a6um0P4kv'

//Get city
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${key}&q=${city}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0]
}

//get weather
const getWeather = async (locationKey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${locationKey}?apikey=${key}`

    const response = await fetch(base + query)
    const data = await response.json()

    return data[0]
}
