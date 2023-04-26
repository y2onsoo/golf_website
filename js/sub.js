//////////////날씨 API
var weatherIcon = {
  "01": "fas fa-sun",
  "02": "fas fa-cloud-sun",
  "03": "fas fa-cloud",
  "04": "fas fa-cloud-meatball",
  "09": "fas fa-cloud-sun-rain",
  10: "fas fa-cloud-showers-heavy",
  11: "fas fa-poo-storm",
  13: "far fa-snowflake",
  50: "fas fa-smog",
};

// 날씨 api - 강원도
var apiURI =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  "gangwon-do" +
  "&appid=" +
  "cdad16695eef24059c08fb46ef92409f";
$.ajax({
  url: apiURI,
  dataType: "json",
  type: "GET",
  async: "false",
  success: function (resp) {
    var $Icon = resp.weather[0].icon.substr(0, 2);
    var $wind = "바람&nbsp;&nbsp;&nbsp;&nbsp;" + resp.wind.speed + " m/s";
    var $city = "강원도";
    var $temp_min =
      "최저 온도&nbsp;&nbsp;&nbsp;&nbsp;" +
      Math.floor(resp.main.temp_min - 273.15) +
      "º";
    var $temp_max =
      "최고 온도&nbsp;&nbsp;&nbsp;&nbsp;" +
      Math.floor(resp.main.temp_max - 273.15) +
      "º";

    $(".weather_icon").append(
      '<i class="' +
        weatherIcon[$Icon] +
        ' fa-5x" style="height :30px; width :100px;"></i>'
    );
    $(".wind").prepend($wind);
    $(".city").append($city);
    $(".temp_min").append($temp_min);
    $(".temp_max").append($temp_max);
  },
});

// ///////////////////sub페이지-슬라이더
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

AOS.init();
