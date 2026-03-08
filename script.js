const inputReg = document.querySelector(".input");
const sendBtn = document.querySelector(".send");
const temp = document.querySelector(".temp");
const time = document.querySelector(".local-time");
const img = document.querySelector("img");
const block = document.querySelector(".block");
const locations = document.querySelector(".location");
const feels_like = document.querySelector(".feels-like");
const datee = document.querySelector(".date");
const wind_speed = document.querySelector(".wind-speed");




sendBtn.addEventListener("click", async() =>{
    const req = await fetch(`http://api.weatherapi.com/v1/current.json?key=0cde1734a6ba432a8c3154143260803&q=${inputReg.value}`);
    const data = await req.json()
    console.log(data);
    
    // ИЗМЕНЕНИЕ ЗДЕСЬ: добавляем класс "date", а не "data"
    block.classList.add("date");

    const localtime = data.location.localtime.split(' ')[1];
    const temp_c = data.current.temp_c;

    // img.src = data.current.condition.icon
    locations.textContent = `Регион:${data.location.name}, ${data.location.country}`;

    time.textContent = `Местное время: ${localtime}`;
    temp.textContent = `${temp_c}`;
    feels_like.textContent = `Ощущается как ${data.current.feelslike_c
    }`;

    wind_speed.textContent = `${data.current.wind_kph} км/ч`

    let dates = new Date();
    dates = dates.toString().split(' ');
    console.log(dates);

    datee.textContent = `Время: ${dates[4]}`;



    
    // console.log(data.current.condition.icon)
})