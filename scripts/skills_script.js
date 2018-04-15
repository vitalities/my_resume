var i = true;

while (i == true) {
  var
  p1 = $('.skill-1');

  height1 = ( 100 * parseFloat($('.filling-1').css('height')) / parseFloat($('.filling-1').parent().css('height')) ) + '%';

  p1.text(height1);
  console.log(height1);
  i = false;
}

var i = true;

while (i == true) {
  var
  p2 = $('.skill-2');

  height2 = ( 100 * parseFloat($('.filling-2').css('height')) / parseFloat($('.filling-2').parent().css('height')) ) + '%';

  p2.text(height2);
  console.log(height2);
  i = false;
}

var i = true;

while (i == true) {
  var
  p3 = $('.skill-3');

  height3 = ( 100 * parseFloat($('.filling-3').css('height')) / parseFloat($('.filling-3').parent().css('height')) ) + '%';

  p3.text(height3);
  console.log(height3);
  i = false;
}

var i = true;

while (i == true) {
  var
  p4 = $('.skill-4');

  height4 = ( 100 * parseFloat($('.filling-4').css('height')) / parseFloat($('.filling-4').parent().css('height')) ) + '%';

  p4.text(height4);
  console.log(height4);
  i = false;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function pbarsOpen() {
  var
    pbar1 = $('.filling-1');
    pbar2 = $('.filling-2');
    pbar3 = $('.filling-3');
    pbar4 = $('.filling-4');
    duration_pbar1 = getRandomInt(500,1500) ;
    duration_pbar2 = getRandomInt(500,1500);
    duration_pbar3 = getRandomInt(500,1500);
    duration_pbar4 = getRandomInt(500,1500);

  pbar1.slideDown(duration_pbar1);
  pbar2.slideDown(duration_pbar2);
  pbar3.slideDown(duration_pbar3);
  pbar4.slideDown(duration_pbar4);
}

function PercentFadeIn() {
  var
    p1 = $('.skill-1');
    p2 = $('.skill-2');
    p3 = $('.skill-3');
    p4 = $('.skill-4');
    duration_p1 = duration_pbar1 + 100;
    duration_p2 = duration_pbar2 + 100;
    duration_p3 = duration_pbar3 + 100;
    duration_p4 = duration_pbar4 + 100;

  p1.slideDown(duration_p1);
  p2.slideDown(duration_p2);
  p3.slideDown(duration_p3);
  p4.slideDown(duration_p4);

  // p1.fadeIn(duration_p1);
  // p2.fadeIn(duration_p2);
  // p3.fadeIn(duration_p3);
  // p4.fadeIn(duration_p4);

}

pbarsOpen();
PercentFadeIn();
