$('.year_link').click(function() {
  if ($('.year_link').hasClass('year_link__this-page')) {
    $('.year_link').removeClass('year_link__this-page');
  }
  $( this ).addClass('year_link__this-page');
})

var carrerChangeContent = function (carrerPage_num) {
  var carrerText_2013 = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
  var carrerText_2014 = 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  var carrerText_2014 = 'Qiuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Velit esse cillum dolore eu fugiat nulla pariatur.Velit esse cillum dolore eu fugiat nulla pariatur.Velit esse cillum dolore eu fugiat nulla pariatur.';
  var carrerText_2015 = 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
  var carrerText_2016 = 'In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
  var carrerText_2017 = 'In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
  var carrerText_2018 = 'In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';

  var carrerImage = $('.info__carrer__photo__picture__img');
  if (carrerPage_num === carrerPage_2013) {
    carrerImage.attr('src','images/pictures/carrer_2013.jpg')
  }
  if (carrerPage_num === carrerPage_2014) {
    carrerImage.attr('src','images/pictures/carrer_2014.jpg')
  }
  if (carrerPage_num === carrerPage_2015) {
    carrerImage.attr('src','images/pictures/carrer_2015.jpg')
  }
  if (carrerPage_num === carrerPage_2016) {
    carrerImage.attr('src','images/pictures/carrer_2016.jpg')
  }
  if (carrerPage_num === carrerPage_2017) {
    carrerImage.attr('src','images/pictures/carrer_2017.jpg')
  }
  if (carrerPage_num === carrerPage_2018) {
    carrerImage.attr('src','images/pictures/carrer_2018.jpg')
  }
}
