function valid(){

    var statename=document.getElementById("fname").value
     result=statename.toLowerCase()
     console.log(result);
     
     
var img_1="https://res.cloudinary.com/ddjjx7t57/image/upload/v1707795919/beautiful-landscape-river-mountainous-forest-covered-fog-zuid-kennemerland_c5yqrn.jpg"


 function weathername(city){
 var res=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f464086c31e3bb2226776dfa76089ea3&units=metric`)
 res.then((data1)=>data1.json()).then((data2)=>{
      console.log(data2)
      var tem=document.getElementById("weather_celsius")
      tem.innerHTML=`${Math.round(data2.main.temp)}°C`
      var name1=document.getElementById("cityname")
      name1.innerHTML=`${data2.name.toUpperCase()}`
      var humi=document.getElementById("humidity-1")
      humi.innerHTML=`${data2.main.humidity}%`
      var wind=document.getElementById("wind-1")
      wind.innerHTML=`${data2.wind.speed} km/h`
      var visib=document.getElementById("Visibility")
      visib.innerHTML=`${data2.visibility/1000} km`
      var weather_image=document.getElementById("photo-size")
     

       var weathermood=data2.weather[0].main
       if(weathermood=="Clear"){
        weather_image.src ="https://res.cloudinary.com/ddjjx7t57/image/upload/v1707724272/weather-clear-symbolic-icon-511x512-zfj6vb21_alwpvh.png"
        
      }
      else if(weathermood=="Clouds"){
        weather_image.src="https://res.cloudinary.com/ddjjx7t57/image/upload/v1707810058/pngtree-large-group-of-white-clouds-cloud-clip-art-png-image_2396076-removebg-preview_1_dtcokd.png"
      }
      else if(weathermood=="Rain"){
        weather_image.src="https://res.cloudinary.com/ddjjx7t57/image/upload/v1707804210/pngtree-thunderstorm-and-rainy-weather-image_2237131-removebg-preview_1_osifka.png"
      }
      else if(weathermood=="Drizzle"){
        weather_image.src="https://res.cloudinary.com/ddjjx7t57/image/upload/v1707803116/weather-forecasting-symbol-clip-art-drizzle-sunny-weather-forecast_svd738.jpg"
      }
      else if(weathermood=="Mist"){
        weather_image.src="https://res.cloudinary.com/ddjjx7t57/image/upload/v1707803382/cloud-logo-weather-forecasting-thunderstorm-symbol-weather-map-yellow-meteorological-phenomenon-png-clipart-removebg-preview_pwb9pr.png"
      }
      else{
        weather_image.src="https://res.cloudinary.com/ddjjx7t57/image/upload/v1707805951/202193759_partly-mostly-cloudy-clouds_t800_jfs6pa.jpg"
      }
      

     var color_box=document.getElementById("small-card")
     color_box.addEventListener("mouseover",()=>{
        color_box.style.backgroundImage="linear-gradient(0deg, rgba(62,24,122,1) 0%, rgba(153,78,204,1) 73%)"
     })
     var color_box2=document.getElementById("small-card2")
     color_box2.addEventListener("mouseover",()=>{
        color_box2.style.backgroundImage="linear-gradient(0deg, rgba(62,24,122,1) 0%, rgba(153,78,204,1) 73%)"
     })

     var color_box3=document.getElementById("small-card3")
     color_box3.addEventListener("mouseover",()=>{
        color_box3.style.backgroundImage="linear-gradient(0deg, rgba(62,24,122,1) 0%, rgba(153,78,204,1) 73%)"
     })



 });

 }
 weathername(result)
    
}



var ele=document.getElementById("fname")
ele.addEventListener("mouseover",()=>{
    document.getElementById("fname").style.backgroundImage="linear-gradient(0deg, rgba(153,78,204,1) 0%, rgba(62,24,122,1) 73%)"

})
ele.addEventListener("mousedown",()=>{
    document.getElementById("fname").style.ackgroundImage=""

})





