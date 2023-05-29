let weather = {
    apikey : "501eef569836b3a1b28ade3807a899ec",
    fetchWeather:  function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            +"&appid="
            +this.apikey
           
        )
        .then((response) => response.json())
        .then((data) =>this.displayWeather(data));
        },
    displayWeather:function(data){
        const { name }=data;
        const{icon,description}=data.weather[0];
        const{temp,humidity,temp_max,temp_min,pressure,sea_level}= data.main;
        const{speed}=data.wind.speed;
        const{sunrise,sunset}=data.sys;
        const{visibility}=data.visibility
        
        
        
        document.querySelector(".city").innerHTML="Weather in "+data.name;   
        document.querySelector(".icon").src=
        "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp-273) + "°C";
        document.querySelector(".humidity").innerHTML="Humditity:"+ data.main.humidity + "%";
        document.querySelector(".pressure").innerHTML="pressure:"+ data.main.pressure+ "pa";
        document.querySelector(".visibility").innerHTML="visible:"+ data.visibility;
        document.querySelector(".sea_level").innerHTML= data.main.sea_level;
        document.querySelector(".rise").innerHTML= data.sys.sunrise;
        document.querySelector(".set").innerHTML= data.sys.sunset;
       document.querySelector(".temp_max").innerHTML="temp_max"+ Math.round(data.main.temp_max-273)+"°C";
        document.querySelector(".temp_min").innerHTML="temp_min"+ Math.round(data.main.temp_min-273)+"°C";
        document.querySelector(".wind").innerHTML="wind speed:" + data.wind.speed+"km/h";
        document.querySelector(".weather").classList.remove("loading");
        /*document.body.style.backgroundImage="url('https://source.unsplash.com/random/10X11/?"+ name+"')"*/

        
        },
    search : function(){
           this.fetchWeather(document.querySelector(".search-bar").value);
        },
};
document.querySelector(".search button").addEventListener("click",function() {
  weather.search();
});
  
document.querySelector(".search-bar").addEventListener("keyup",function(event){
if( event.key=="enter")
{
     weather.search();
}
});
weather.fetchWeather("denver");