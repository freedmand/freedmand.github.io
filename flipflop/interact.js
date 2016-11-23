var gold = Array.from(document.querySelectorAll('.gold'));
var blue = Array.from(document.querySelectorAll('.blue'));

var topBox = document.getElementById('true-top');
var bottomBox = document.getElementById('true-bottom');
var slider = document.getElementById('slider');
var resetButton = document.getElementById('reset-button');

var opaque = document.getElementById('opaque-bar');

var pic_gold = document.getElementById('gold');
var pic_blue = document.getElementById('blue');
var pic_normal = document.getElementById('normal');
var pic_thumb = document.getElementById('thumb');

var overlay = document.getElementById('overlay');
var dragbar = document.getElementById('dragbar');

var sources = ['flipflop', 'dress'];
var source = false;

var width = 550;
var sliderWidth = 16;

var gold_colors = [[222, 189, 74], [107, 91, 55], [56, 41, 2]];
var blue_colors = [[255, 254, 239], [126, 140, 175], [82, 105, 178]];

function getInterpolated(colors, perc) {
  var subInterpolate = function(arr1, arr2, perc) {
    return [arr1[0] + (arr2[0] - arr1[0]) * perc, arr1[1] + (arr2[1] - arr1[1]) * perc, arr1[2] + (arr2[2] - arr1[2]) * perc];
  }
  var toCss = function(arr) {
    return 'rgb(' + parseInt(Math.round(arr[0]), 10) + ',' + parseInt(Math.round(arr[1]), 10) + ',' + parseInt(Math.round(arr[2]), 10) + ')';
  }
  if (perc < 0.5) {
    return toCss(subInterpolate(colors[1], colors[0], (0.5 - perc) * 2));
  } else {
    return toCss(subInterpolate(colors[1], colors[2], (perc - 0.5) * 2));
  }
}

function reverse() {
  pic_thumb.src = sources[source ? 1 : 0] + '_normal.png';
  source = !source;
  pic_gold.src = sources[source ? 1 : 0] + '_gold.png';
  pic_blue.src = sources[source ? 1 : 0] + '_blue.png';
  pic_normal.src = sources[source ? 1 : 0] + '_normal.png';
  reset();
}

function change(perc) {
  resetButton.disabled = (Math.abs(perc - 0.5) < 0.01);
  if (resetButton.disabled) {
    perc = 0.5;
  }
  opaque.setAttribute('style','-webkit-filter:brightness(' + ((1 - perc) * 0.8 + 0.3) + ')');
  var left = perc * (width - sliderWidth) + sliderWidth / 2;
  topBox.style.left = left;
  bottomBox.style.left = left;
  topBox.style.background = getInterpolated(gold_colors, perc);
  bottomBox.style.background = getInterpolated(blue_colors, perc);
  if (perc < 0.5) {
    gold.forEach(function(elem) { elem.style.display = 'block'; elem.style.opacity = (0.5 - perc) / 0.5; });
    blue.forEach(function(elem) { elem.style.display = 'none'; elem.style.opacity = 0.0; });
  } else {
    blue.forEach(function(elem) { elem.style.display = 'block'; elem.style.opacity = (perc - 0.5) / 0.5; });
    gold.forEach(function(elem) { elem.style.display = 'none'; elem.style.opacity = 0.0; });
  }
}

var prevCursor = document.body.style.cursor;
var down = false;

function dragstart(evt) {
  var touched = 'touches' in evt;
  var perc = Math.max(Math.min(((touched ? evt.touches[0].screenX : evt.pageX) - dragbar.getBoundingClientRect().left) / dragbar.offsetWidth, 1.0), 0.0);
  change(perc);
  down = true;
  if (!touched) { overlay.style.display = 'block' };
  evt.preventDefault();
}

function mousemove(evt) {
  var touched = 'touches' in evt;
  if (down) {
    var perc = Math.max(Math.min(((touched ? evt.touches[0].screenX : evt.pageX) - dragbar.getBoundingClientRect().left) / dragbar.offsetWidth, 1.0), 0.0);
    change(perc);
  }
  evt.preventDefault();
}

function mouseup(evt) {
  down = false;
  overlay.style.display = 'none';
}

function reset() {
  change(0.5);
}