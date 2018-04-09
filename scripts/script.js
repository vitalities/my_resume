$('.year_link').click(function() {
  if ($('.year_link').hasClass('year_link__this-page')) {
    $('.year_link').removeClass('year_link__this-page');
  }
  $( this ).addClass('year_link__this-page');
})

var dropdownSlideUp = function() {
  $('.contacts__dropdown').slideUp(250);
}

$('.year_2013').click(function() {
  careerChangeContent('careerPage_2013');
  dropdownSlideUp();
})
$('.year_2014').click(function() {
  careerChangeContent('careerPage_2014');
  dropdownSlideUp();
})
$('.year_2015').click(function() {
  careerChangeContent('careerPage_2015');
  dropdownSlideUp();
})
$('.year_2016').click(function() {
  careerChangeContent('careerPage_2016');
  dropdownSlideUp();
})
$('.year_2017').click(function() {
  careerChangeContent('careerPage_2017');
  dropdownSlideUp();
})
$('.year_2018').click(function() {
  careerChangeContent('careerPage_2018');
  dropdownSlideUp();
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
  var careerText = $('.info__career__about-text p');
  if (careerPage_num === 'careerPage_2013') {
    careerImage.attr('src','images/career/image_2013.jpg');
    careerText.text(careerText_2013);
  }
  if (careerPage_num === 'careerPage_2014') {
    careerImage.attr('src','images/career/image_2014.jpg');
    careerText.text(careerText_2014);
  }
  if (careerPage_num === 'careerPage_2015') {
    careerImage.attr('src','images/career/image_2015.jpg');
    careerText.text(careerText_2015);
  }
  if (careerPage_num === 'careerPage_2016') {
    careerImage.attr('src','images/career/image_2016.jpg');
    careerText.text(careerText_2016);
  }
  if (careerPage_num === 'careerPage_2017') {
    careerImage.attr('src','images/career/image_2017.jpg');
    careerText.text(careerText_2017);
  }
  if (careerPage_num === 'careerPage_2018') {
    careerImage.attr('src','images/career/image_2018.jpg');
    careerText.text(careerText_2018);
  }
}

$('body').click(function(evt) {
  if (evt.target.id == 'dropdown') {
    return;
  } else {
    dropdownSlideUp();
  }
})

$('.contacts__list').click(function () {
  var
    duration = 500;
  $('.contacts__dropdown').stop().slideToggle(duration);
})

$('.download-button a').click(dropdownSlideUp());

// PORTFOLIO

var portfolio__block = $('.portfolio__block');

portfolio__block.hover(function() {
  var thisBlock = $(this);
  var div = $('.portfolio__block__front-div');
  var duration = 500;
  thisBlock.find(div).stop().fadeIn(duration);
}, function() {
  var thisBlock = $(this);
  var div = $('.portfolio__block__front-div');
  var duration = 250;
  thisBlock.find(div).stop().fadeOut(duration);
})
