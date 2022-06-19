class Forecast{
    constructor(){
        this.weatherURL = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'https://dataservice.accuweather.com/locations/v1/cities/search;'
        this.API_KEY = process.env.API_KEY
    }
    
    //Find the city properties for the city entered by the user:
    async getCity(city){
        const query = `?apikey=${this.API_KEY}&q=${city}`
        const response = await fetch(this.cityURL + query)
        const data = await response.json()
    
        return data[0]
    }

    //Find the weather for the city entered with its location key:
    async getWeather(locationKey){
        const query = `${locationKey}?apikey=yx2fXVF0tQ7yG5ZEJu3BSu8a6um0P4kv`
        const response = await fetch(this.weatherURL + query)
        const data = await response.json()
    
        return data[0]
    }

    //After the city is entered by the user, we fetch cityDetails.Key, then its weather's conditions and return it as data:
    async updateCity(city){
        const cityDetails = await this.getCity(city)
        const weather = await this.getWeather(cityDetails.Key)
        return { cityDetails, weather }
    }  
}
