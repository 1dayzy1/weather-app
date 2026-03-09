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
const timer = document.querySelector("#timer");

const updateTimer = () =>{
  const time  = new Date();
  // console.log(time.toString().split(' ')[4]);
  timer.textContent = time.toString().split(' ')[4];
}


updateTimer();
setInterval(updateTimer, 1000)

try {
  sendBtn.addEventListener("click", async () => {
   

    if (!inputReg.value)return;
    

    const req = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=0cde1734a6ba432a8c3154143260803&q=${inputReg.value}`
    );
    const data = await req.json();
    console.log(data);

    block.classList.add("date");

    const localtime = data.location.localtime.split(" ")[1];
    const temp_c = data.current.temp_c;

    locations.textContent = `Регион:${data.location.name}, ${data.location.country} , ${data.location.region}`;

    time.textContent = `Местное время: ${localtime}`;
    temp.textContent = `${temp_c}`;
    feels_like.textContent = `Ощущается как ${data.current.feelslike_c}`;

    wind_speed.textContent = `${data.current.wind_kph} км/ч`;

    let dates = new Date();
    dates = dates.toString().split(" ");
    console.log(dates);

    datee.textContent = `Время: ${dates[4]}`;

    // console.log(data.current.condition.icon)
  });
} catch (error) {
  console.log(error);
}
