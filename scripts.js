let day = document.querySelector("#day");
let date_ = document.querySelector("#date");
let city_ = document.querySelector("#city");
let icon = document.querySelector("#icon");
let temperature = document.querySelector("#temperature");
let disc = document.querySelector("#disc");
let change = document.querySelector("#change");
let get = document.querySelector("#get");
let inpt = document.querySelector("#inpt");
let PRECIPITATION = document.querySelector("#PRECIPITATION");
let PREvalue = document.querySelector("#PREvalue");
let HUMIDITY = document.querySelector("#HUMIDITY");
let HUvalue = document.querySelector("#HUvalue");
let WIND = document.querySelector("#WIND");
let WIvalue = document.querySelector("#WIvalue");
let firstDay = document.querySelector("#firstDay");
let firstTemp = document.querySelector("#firstTemp");
let firstIcon = document.querySelector("#firstIcon");
let secIcon = document.querySelector("#secIcon");
let secDay = document.querySelector("#secDay");
let secTemp = document.querySelector("#secTemp");
let thirdIcon = document.querySelector("#thirdIcon");
let thirdDay = document.querySelector("#thirdDay");
let thirdTemp = document.querySelector("#thirdTemp");
let fourthIcon = document.querySelector("#fourthIcon");
let fourthDay = document.querySelector("#fourthDay");
let fourthTemp = document.querySelector("#fourthTemp");
let fullInfo = document.querySelector("#fullInfo");
let history = document.querySelector("#history");
let allReqs = document.querySelectorAll(".reqs");
let mainInfo = document.querySelector("#mainInfo");
let error = document.querySelector("#error");
let circle = document.querySelector("#circle");
let themeName = document.querySelector("#themeName");
let theme_ = document.querySelector("#theme");
let filter = document.querySelector("#filter");
let theme = "dark";
let allTheme = "dark";
let cards = Array.from(document.getElementById("nextDays").children);
let fullCard = [...document.querySelectorAll("#fullInfo > *>*>*")];
let allText = document.querySelectorAll("*");
circle.onclick = function () {
  console.log(1);
  if (theme == "dark") {
    circle.style.marginLeft = "40px";
    themeName.style.marginLeft = "3px";
    // themeName.style.marginTop = "11px";
    themeName.style.fontSize = "14.5px";
    themeName.textContent = "Light";
    circle.style.backgroundColor = "black";
    theme_.style.backgroundColor = "white";
    themeName.style.color = "black";
    fullInfo.style.backgroundColor = "#F7E2E1";
    // filter.style.backgroundColor = "rgba(232, 231, 231, 0.4)"
    // allText.forEach(el =>{
    //   if(el !=themeName){
    //     el.style.color = "black"
    //   }
    // })
    cards.forEach((el) => {
      el.style.backgroundColor = "#ECA4A4";
    });
    fullCard.forEach((el) => {
      el.style.color = "rgba(34, 40, 49, 1)";
    });
    allReqs.forEach((el) => {
      el.style.color = "rgba(34, 40, 49, 1)";
      el.style.border = "1px solid rgba(34, 40, 49, 1)";
      el.addEventListener("mouseover", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "rgb(212, 216, 222)";
      });
      el.addEventListener("mouseout", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "";
      });
    });
    inpt.style.backgroundColor = "#DCEBEB";
    change.style.backgroundColor = "#DCEBEB";
    get.style.backgroundColor = "#DCEBEB";
    theme = "white";
  } else if (theme == 'white') {
    circle.style.marginLeft = "0px";
    themeName.style.marginLeft = "42px";
    // themeName.style.marginTop = "10px";
    themeName.style.fontSize = "16px";
    themeName.textContent = "Dark";
    circle.style.backgroundColor = "white";
    theme_.style.backgroundColor = "black";
    themeName.style.color = "white";
    fullInfo.style.backgroundColor = "rgba(34, 40, 49, 1)";
    // filter.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
    theme = "dark";
    // allText.forEach(el =>{
    //   if(el !=themeName){
    //     el.style.color = "white"
    //   }
    // })
    fullCard.forEach((el) => {
      el.style.color = "white";
    });
    cards.forEach((el) => {
      el.style.backgroundColor = " rgb(120, 131, 147)";
    });
    inpt.style.backgroundColor = "rgba(144, 217, 224, 0.9)";
    change.style.backgroundColor = "rgba(144, 217, 224, 0.9)";
    get.style.backgroundColor = "rgba(144, 217, 224, 0.9)";
    theme = "dark";
    allReqs.forEach((el) => {
      el.style.color = "white";
      el.style.border = "1px solid white";
      el.addEventListener("mouseover", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "rgb(73, 85, 100)";
      });
      el.addEventListener("mouseout", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "";
      });
    });
  }
};
theme_.onclick = function(e){
  if (theme == "dark" && e.target !== circle) {
    circle.style.marginLeft = "40px";
    themeName.style.marginLeft = "3px";
    // themeName.style.marginTop = "11px";
    themeName.style.fontSize = "14.5px";
    themeName.textContent = "Light";
    circle.style.backgroundColor = "black";
    theme_.style.backgroundColor = "white";
    themeName.style.color = "black";
    fullInfo.style.backgroundColor = "#F7E2E1";
    // filter.style.backgroundColor = "rgba(232, 231, 231, 0.4)"
    // allText.forEach(el =>{
    //   if(el !=themeName){
    //     el.style.color = "black"
    //   }
    // })
    cards.forEach((el) => {
      el.style.backgroundColor = "#ECA4A4";
    });
    fullCard.forEach((el) => {
      el.style.color = "rgba(34, 40, 49, 1)";
    });
    allReqs.forEach((el) => {
      el.style.color = "rgba(34, 40, 49, 1)";
      el.style.border = "1px solid rgba(34, 40, 49, 1)";
      el.addEventListener("mouseover", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "rgb(212, 216, 222)";
      });
      el.addEventListener("mouseout", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "";
      });
    });
    inpt.style.backgroundColor = "#DCEBEB";
    change.style.backgroundColor = "#DCEBEB";
    get.style.backgroundColor = "#DCEBEB";
    theme = "white";
  } else if (theme == "white" && e.target !== circle) {
    circle.style.marginLeft = "0px";
    themeName.style.marginLeft = "42px";
    // themeName.style.marginTop = "10px";
    themeName.style.fontSize = "16px";
    themeName.textContent = "Dark";
    circle.style.backgroundColor = "white";
    theme_.style.backgroundColor = "black";
    themeName.style.color = "white";
    fullInfo.style.backgroundColor = "rgba(34, 40, 49, 1)";
    // filter.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
    theme = "dark";
    // allText.forEach(el =>{
    //   if(el !=themeName){
    //     el.style.color = "white"
    //   }
    // })
    fullCard.forEach((el) => {
      el.style.color = "white";
    });
    cards.forEach((el) => {
      el.style.backgroundColor = " rgb(120, 131, 147)";
    });
    inpt.style.backgroundColor = "rgba(144, 217, 224, 0.9)";
    change.style.backgroundColor = "rgba(144, 217, 224, 0.9)";
    get.style.backgroundColor = "rgba(144, 217, 224, 0.9)";
    theme = "dark";
    allReqs.forEach((el) => {
      el.style.color = "white";
      el.style.border = "1px solid white";
      el.addEventListener("mouseover", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "rgb(73, 85, 100)";
      });
      el.addEventListener("mouseout", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "";
      });
    });
  }
}

let reqs = [];
let cities = [];
let index = 0;
let userID = "yourID";
let img = new Image();
let days = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};
setInterval(() => {
  localStorage.setItem(userID, JSON.stringify(cities));
  localStorage.setItem("theTheme", theme);
}, 1000);
let localStorageItems = JSON.parse(localStorage.getItem(userID));
let localStorageTheme = localStorage.getItem("theTheme");
if (localStorage.getItem("theTheme") != null) {
  if (localStorageTheme == "white") {
    theme = "white";
    circle.style.marginLeft = "40px";
    themeName.style.marginLeft = "3px";
    // themeName.style.marginTop = "11px";
    themeName.style.fontSize = "14.5px";
    themeName.textContent = "Light";
    circle.style.backgroundColor = "black";
    theme_.style.backgroundColor = "white";
    themeName.style.color = "black";
    fullInfo.style.backgroundColor = "#F7E2E1";
    // filter.style.backgroundColor = "rgba(232, 231, 231, 0.4)"
    // allText.forEach(el =>{
    //   if(el !=themeName){
    //     el.style.color = "black"
    //   }
    // })
    cards.forEach((el) => {
      el.style.backgroundColor = "#ECA4A4";
    });
    fullCard.forEach((el) => {
      el.style.color = "rgba(34, 40, 49, 1)";
    });
    allReqs.forEach((el) => {
      el.style.color = "rgba(34, 40, 49, 1)";
      el.style.border = "1px solid rgba(34, 40, 49, 1)";
      el.addEventListener("mouseover", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "rgb(212, 216, 222)";
      });
      el.addEventListener("mouseout", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "";
      });
    });
    inpt.style.backgroundColor = "#DCEBEB";
    change.style.backgroundColor = "#DCEBEB";
    get.style.backgroundColor = "#DCEBEB";
  } else if (localStorageTheme == "dark") {
    theme ="dark"
    circle.style.marginLeft = "0px";
    themeName.style.marginLeft = "42px";
    // themeName.style.marginTop = "10px";
    themeName.style.fontSize = "16px";
    themeName.textContent = "Dark";
    circle.style.backgroundColor = "white";
    theme_.style.backgroundColor = "black";
    themeName.style.color = "white";
    fullInfo.style.backgroundColor = "rgba(34, 40, 49, 1)";
    // filter.style.backgroundColor = "rgba(0, 0, 0, 0.4)"

    // allText.forEach(el =>{
    //   if(el !=themeName){
    //     el.style.color = "white"
    //   }
    // })
    fullCard.forEach((el) => {
      el.style.color = "white";
    });
    cards.forEach((el) => {
      el.style.backgroundColor = " rgb(120, 131, 147)";
    });
    inpt.style.backgroundColor = "rgba(144, 217, 224, 0.9)";
    change.style.backgroundColor = "rgba(144, 217, 224, 0.9)";
    get.style.backgroundColor = "rgba(144, 217, 224, 0.9)";

    allReqs.forEach((el) => {
      el.style.color = "white";
      el.style.border = "1px solid white";
      el.addEventListener("mouseover", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "rgb(73, 85, 100)";
      });
      el.addEventListener("mouseout", (e) => {
        e.preventDefault();
        e.target.style.backgroundColor = "";
      });
    });
  }
} else {
  theme = "dark";
}
if (localStorage.getItem(userID) != null) {
  weather(localStorageItems[0]);
  cities = localStorageItems;
  localStorageItems.forEach((el, i) => {
    if (i < 5) {
      let div = document.createElement("div");
      allReqs = document.querySelectorAll(".reqs");
      if (theme == "dark") {
        div.style.color = "white";
        div.textContent = el;
        div.style.border = "1px solid white";
        div.classList.add("reqs");
        history.append(div);
        div.addEventListener("click", (e) => {
          e.preventDefault();
          weather(e.target.textContent); // тут проблема
        });
        allReqs.forEach((el) => {
          el.style.color = "white";
          el.style.border = "1px solid white";
          el.addEventListener("mouseover", (e) => {
            e.preventDefault();
            e.target.style.backgroundColor = "rgb(73, 85, 100)";
          });
          el.addEventListener("mouseout", (e) => {
            e.preventDefault();
            e.target.style.backgroundColor = "";
          });
        });
      } else if (theme == "white") {
        div.style.color = "white";
        div.textContent = el;
        div.style.border = "1px solid white";
        div.classList.add("reqs");
        history.append(div);
        div.addEventListener("click", (e) => {
          e.preventDefault();
          weather(e.target.textContent); // тут проблема
        });
        allReqs.forEach((el) => {
          el.style.color = "rgba(34, 40, 49, 1)";
          el.style.border = "1px solid rgba(34, 40, 49, 1)";
          el.addEventListener("mouseover", (e) => {
            e.preventDefault();
            e.target.style.backgroundColor = "rgb(212, 216, 222)";
          });
          el.addEventListener("mouseout", (e) => {
            e.preventDefault();
            e.target.style.backgroundColor = "";
          });
        });
      }
    }
  });
} else {
  weather("Москва");
}
// localStorage.clear()
async function weather(city) {
  let response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=0e1ff8de16a411015b650623b6b1c8df`
  );
  let result = await response.json();
  console.log(result);
  if (result.length > 0) {
    let weth = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${result[0].lat}&lon=${result[0].lon}&appid=0e1ff8de16a411015b650623b6b1c8df`
    ).catch((err) => alert(err));
    let wethres = await weth.json();
    let cityRes = await fetch(
      `https://api.unsplash.com/search/photos?query=${wethres.city.name}&client_id=E2CCbCn372hpEnk1aXi3u9vvCyYpKA9EyQqhoiuBbdw`
    );
    let cityPic = await cityRes.json();
    if (
      wethres.city.name != "Karaganda" &&
      cityPic.results &&
      cityPic.results.length > 0
    ) {
      img.src = cityPic.results[0].urls.regular;
      console.log(img);
      mainInfo.style.backgroundImage = `url('${cityPic.results[0].urls.regular}')`;
    } else {
      mainInfo.style.backgroundImage = `none`;
    }
    //  https://media.istockphoto.com/id/489356853/photo/monument-of-independence.jpg?s=2048x2048&w=is&k=20&c=hzhrfq9OAi6JMZzPu8pGowHsIGZZs9hXuvcrkMTo2Ls=
    if (wethres.city.name == "Karaganda") {
      mainInfo.style.backgroundImage = `url('https://kazpravda.kz/media/news/2023/09/28/photo_2023-09-28_11-19-02.jpg')`;
    }
    console.log(cityPic);
    // `http://api.openweathermap.org/data/2.5/forecast/daily?lat=${result[0].lat}&lon=${result[0].lon}&cnt=${"2"}&appid=0e1ff8de16a411015b650623b6b1c8df

    if (cities.includes(wethres.city.name)) {
      if (cities[0] == wethres.city.name) {
      } else {
        let ndx = cities.indexOf(wethres.city.name);
        if (allReqs[ndx] != undefined) {
          history.removeChild(allReqs[ndx]);
        }

        cities.splice(ndx, 1);
        console.log(ndx);
        cities.unshift(wethres.city.name);
        let div = document.createElement("div");
        allReqs = document.querySelectorAll(".reqs");

        div.style.color = "white";
        div.textContent = wethres.city.name;
        div.style.border = "1px solid white";
        div.classList.add("reqs");
        history.prepend(div);
        div.addEventListener("click", (e) => {
          e.preventDefault();
          weather(e.target.textContent); // тут проблема
        });
      }
    } else {
      cities.unshift(wethres.city.name);
      let div = document.createElement("div");
      div.style.color = "white";
      div.textContent = wethres.city.name;
      div.style.padding = "2px";
      allReqs = document.querySelectorAll(".reqs");
      div.addEventListener("click", (e) => {
        e.preventDefault();
        weather(e.target.textContent);
        location.reload();
      });
      div.style.border = "1px solid white";
      div.classList.add("reqs");
      history.prepend(div);
    }
    allReqs = document.querySelectorAll(".reqs");
    if (allReqs.length > 5) {
      for (let i = 5; i < allReqs.length; i++) {
        console.log(1);
        allReqs[i].style.display = "none"; // вот сюда иди
      }
    }
    allReqs = document.querySelectorAll(".reqs");
    if (theme == "dark") {
      allReqs.forEach((el) => {
        el.style.color = "white";
        el.style.border = "1px solid white";
        el.addEventListener("mouseover", (e) => {
          e.preventDefault();
          e.target.style.backgroundColor = "rgb(73, 85, 100)";
        });
        el.addEventListener("mouseout", (e) => {
          e.preventDefault();
          e.target.style.backgroundColor = "";
        });
      });
    } else if (theme == "white") {
      allReqs.forEach((el) => {
        el.style.color = "rgba(34, 40, 49, 1)";
        el.style.border = "1px solid rgba(34, 40, 49, 1)";
        el.addEventListener("mouseover", (e) => {
          e.preventDefault();
          e.target.style.backgroundColor = "rgb(212, 216, 222)";
        });
        el.addEventListener("mouseout", (e) => {
          e.preventDefault();
          e.target.style.backgroundColor = "";
        });
      });
    }
    reqs.push([wethres.city.name, wethres]);

    console.log(wethres);

    let today = new Date(wethres.list[0].dt_txt);
    console.log(today);
    console.log(typeof today);
    today.toString();
    day.textContent =
      days[today.toString()[0] + today.toString()[1] + today.toString()[2]];
    date_.textContent = today.toString().slice(4, 15);
    city_.textContent = `${wethres.city.name}, ${wethres.city.country}`;
    icon.src = `https://openweathermap.org/img/wn/${wethres.list[0].weather[0].icon}@2x.png`;
    temperature.textContent = `${(wethres.list[0].main.temp - 273).toFixed(
      2
    )} °C`;
    disc.textContent = wethres.list[0].weather[0].main;
    PREvalue.textContent = `${(wethres.list[0].pop * 100).toFixed(2)}%`;
    HUvalue.textContent = `${wethres.list[0].main.humidity.toFixed(2)}%`;
    WIvalue.textContent = `${wethres.list[0].wind.speed.toFixed(2)} m/s`;
    firstIcon.src = `https://openweathermap.org/img/wn/${wethres.list[8].weather[0].icon}@2x.png`;
    today = new Date(wethres.list[8].dt_txt);
    firstDay.textContent =
      today.toString()[0].toUpperCase() +
      today.toString()[1].toUpperCase() +
      today.toString()[2].toUpperCase();
    firstTemp.textContent = `${(wethres.list[8].main.temp - 273).toFixed(
      2
    )} °C`;
    secIcon.src = `https://openweathermap.org/img/wn/${wethres.list[16].weather[0].icon}@2x.png`;
    today = new Date(wethres.list[16].dt_txt);
    secDay.textContent =
      today.toString()[0].toUpperCase() +
      today.toString()[1].toUpperCase() +
      today.toString()[2].toUpperCase();
    secTemp.textContent = `${(wethres.list[16].main.temp - 273).toFixed(2)} °C`;
    thirdIcon.src = `https://openweathermap.org/img/wn/${wethres.list[24].weather[0].icon}@2x.png`;
    today = new Date(wethres.list[24].dt_txt);
    thirdDay.textContent =
      today.toString()[0].toUpperCase() +
      today.toString()[1].toUpperCase() +
      today.toString()[2].toUpperCase();
    thirdTemp.textContent = `${(wethres.list[24].main.temp - 273).toFixed(
      2
    )} °C`;
    fourthIcon.src = `https://openweathermap.org/img/wn/${wethres.list[32].weather[0].icon}@2x.png`;
    today = new Date(wethres.list[32].dt_txt);
    fourthDay.textContent =
      today.toString()[0].toUpperCase() +
      today.toString()[1].toUpperCase() +
      today.toString()[2].toUpperCase();
    fourthTemp.textContent = `${(wethres.list[32].main.temp - 273).toFixed(
      2
    )} °C`;
    console.log(wethres.city.name);

    localStorage.setItem(userID, JSON.stringify(cities));
  } else {
    error.style.display = "flex";
    setTimeout(() => {
      error.style.display = "none";
    }, 2000);
  }
  return 0;
}

get.addEventListener("click", async (e) => {
  e.preventDefault();
  await weather(inpt.value);
  inpt.value = "";
  // location.reload()
});
