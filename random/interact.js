function submit(number) {
  var parsed = parseInt(number);
  if (parsed && parsed >= 1 && parsed <= 10) {
    var r = new XMLHttpRequest();
    r.open("POST", "http://demo-gmpvvl.webscript.io/script?number=" + parsed, true);
    r.onreadystatechange = function () {
      if (r.readyState != 4 || r.status != 200) return;
      process(r.responseText);
    };
    r.send();
  }
}

function process(response) {
  var split = response.substring(1, response.length - 1).split(',');
  var result = [];
  var total = 0;
  for (var i = 0; i < split.length; i++) {
    var num = parseInt(split[i].trim(), 10);
    result.push(num);
    total += num;
  }
  var total_height = 400;
  var hist = document.getElementById('hist');
  var children = hist.children;
  for (var i = 0; i < 10; i++) {
    var perc = result[i] / total;
    var height = Math.round(perc * total_height);
    if (height < 2) {
      height = 2;
    }
    children[i].style.height = '' + height + 'px';
  }
  hist.className = 'histogram finished';
  document.getElementById('results-text').textContent = 'Total votes cast: ' + total;
}

var recaptchaResponse = null;

document.getElementById('main-form').onsubmit = function(evt) {
  console.log(this);
  console.log(evt);
  evt.preventDefault();
  console.log(document.activeElement.textContent);
  return false;
}

function recaptchaCallback(response) {
  recaptchaResponse = response;
}