class Forecast{
    constructor(){
        this.key = 'yx2fXVF0tQ7yG5ZEJu3BSu8a6um0P4kv';
        this.weatherURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search;'
    }
    
    //Find the city properties for the city entered by the user:
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`
        const response = await fetch(this.cityURL + query)
        const data = await response.json()
    
        return data[0]
    }

    //Find the weather for the city entered with its location key:
    async getWeather(locationKey){
        const query = `${locationKey}?apikey=${this.key}`
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
