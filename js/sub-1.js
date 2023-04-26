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



//
window.onload = function () {
//
$(".course span").click(function () {
  $(".mo-widget-wrap,.mo-widget-course").show();
});
$(".mo-course-close").click(function () {
  $(".mo-widget-wrap,.mo-widget-course").hide();
});

$(".select-location span,.select-location p").click(function () {
  $(".location-hide").show();
});
$(".location-hide a").click(function () {
  $(".location-hide").hide();
});


}

$(document).ready(function () {
  for (let i = 1; i < 10; i++) {
    const id = `<span class="mo-course-span-${i}" onclick="showimg(${i})">${i}</span>`;
    $("#holeNum").append(id);
  }
});

//버튼 클릳시 이미지 보이게
const showimg = (gubun) => {
  $("#imgbox").empty();

  $("#imgbox").append(
    `
    <div class="hole-img hole-img-${gubun}"></div>
    `
  );
};


//////지역선택하면 텍스트 바뀜
function spanchange() {
  document.getElementById("test").innerText = "광산";
}
function spanchange1() {
  document.getElementById("test").innerText = "제천";
}
function spanchange2() {
  document.getElementById("test").innerText = "영광";
}
function spanchange3() {
  document.getElementById("test").innerText = "거창";
}
function spanchange4() {
  document.getElementById("test").innerText = "정선";
}

/////////topbutton
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
