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

/////////////서브메뉴 스크롤
function scrollFunction() {
  var headerScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (headerScroll > 300) {
    $("#header").removeClass("head");
    $("#header").addClass("scroll-header");
  } else {
    $("#header").removeClass("scroll-header");
    $("#header").addClass("head");
  }
}

window.onscroll = function () {
  scrollFunction();
};

//로그인폼
window.onload = function () {
  const pw_show_hide = document.querySelector(".pw_show_hide");
  const input_id = document.querySelector("input[type=text]");
  const input_pw = document.querySelector("input[type=password]");
  const id_error = document.querySelector(".id_error");
  const pw_error = document.querySelector(".pw_error");
  console.log(pw_show_hide, input_id, input_pw, id_error, pw_error);

  input_id.addEventListener("click", function () {
    id_error.style.display = "block";
  });
  input_pw.addEventListener("click", function () {
    pw_error.style.display = "block";
  });

  let i = true;
  pw_show_hide.addEventListener("click", function () {
    if (i == true) {
      pw_show_hide.style.backgroundPosition = "-126px 0";
      i = false;
    } else {
      pw_show_hide.style.backgroundPosition = "-105px 0";
      i = true;
    }
  });
};

////////////////////////////widget 모달 모음
window.onload = function () {
  $(".login").click(function () {
    $(".modal-login,.modal-login-bg").show();
  });
  $(".close-btn").click(function () {
    $(".modal-login,.modal-login-bg").hide();
  });
  //
  $(".course span").click(function () {
    $(".mo-widget-wrap,.mo-widget-course").show();
  });
  $(".mo-course-close").click(function () {
    $(".mo-widget-wrap,.mo-widget-course").hide();
  });
  //
};
