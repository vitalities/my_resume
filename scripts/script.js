$('.year_link').click(function() {
  if ($('.year_link').hasClass('year_link__this-page')) {
    $('.year_link').removeClass('year_link__this-page');
  }
  $( this ).addClass('year_link__this-page');
})

$('.year_2013').click(function() {
  careerChangeContent('careerPage_2013');
})
$('.year_2014').click(function() {
  careerChangeContent('careerPage_2014');
})
$('.year_2015').click(function() {
  careerChangeContent('careerPage_2015');
})
$('.year_2016').click(function() {
  careerChangeContent('careerPage_2016');
})
$('.year_2017').click(function() {
  careerChangeContent('careerPage_2017');
})
$('.year_2018').click(function() {
  careerChangeContent('careerPage_2018');
})

var careerChangeContent = function(careerPage_num) {
  var careerText_2013 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
  var careerText_2014 = 'Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  var careerText_2014 = 'Qiuis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Velit esse cillum dolore eu fugiat nulla pariatur.Velit esse cillum dolore eu fugiat nulla pariatur.Velit esse cillum dolore eu fugiat nulla pariatur.';
  var careerText_2015 = 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
  var careerText_2016 = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
  var careerText_2017 = 'In voluptate velit esse  sunt in culpa qui officia deserunt mollit anim id est laborum. ';
  var careerText_2018 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos facere iusto molestiae ab dolorum delectus exercitationem dicta quaerat. Accusantium sit nostrum veniam eligendi qui ipsa, cupiditate. Quae itaque, voluptatibus officia.';
  var careerImage = $('.info__career__photo__picture__img');
  var careerText = $('.info__career__about-text');
  if (careerPage_num === 'careerPage_2013') {
    careerImage.attr('src','images/pictures/career_2013.jpg');
    careerText.text(careerText_2013);
  }
  if (careerPage_num === 'careerPage_2014') {
    careerImage.attr('src','images/pictures/career_2014.jpg');
    careerText.text(careerText_2014);
  }
  if (careerPage_num === 'careerPage_2015') {
    careerImage.attr('src','images/pictures/career_2015.jpg');
    careerText.text(careerText_2015);
  }
  if (careerPage_num === 'careerPage_2016') {
    careerImage.attr('src','images/pictures/career_2016.jpg');
    careerText.text(careerText_2016);
  }
  if (careerPage_num === 'careerPage_2017') {
    careerImage.attr('src','images/pictures/career_2017.jpg');
    careerText.text(careerText_2017);
  }
  if (careerPage_num === 'careerPage_2018') {
    careerImage.attr('src','images/pictures/career_2018.jpg');
    careerText.text(careerText_2018);
  }
}

$('.contacts__list').click(function() {
  $('.contacts__dropdown').slideToggle();
})
