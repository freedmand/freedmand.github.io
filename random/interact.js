function submit() {
  var parsed = parseInt(activeNumber);
  if (parsed && parsed >= 1 && parsed <= 10) {
    var r = new XMLHttpRequest();
    r.open("POST", "http://demo-gmpvvl.webscript.io/script?number=" + parsed, true);
    r.onreadystatechange = function () {
      if (r.readyState != 4 || r.status != 200) return;
      process(r.responseText);
    };
    r.send(recaptchaResponse);
  }
}

var tooltip = document.getElementById('tooltip');

function populateTooltip(number, votes, percent) {
  tooltip.children[0].textContent = number;
  tooltip.children[1].textContent = votes + ' vote' + (votes != 1 ? 's' : '') + ' cast';
  tooltip.children[2].textContent = (percent * 100).toPrecision(3) + '% of vote';
}

function positionTooltip(x, y) {
  tooltip.style.display = 'block';
  var bb = tooltip.getBoundingClientRect();
  var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
  var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;
  if (x + bb.width > width) {
    tooltip.style.left = '' + (x - bb.width) + 'px';
  } else {
    tooltip.style.left = '' + x + 'px';
  }
  if (y + bb.height > height) {
    tooltip.style.top = '' + (y - bb.height) + 'px';
  } else {
    tooltip.style.top = '' + y + 'px';
  }
}

function hideTooltip() {
  tooltip.style.display = 'none';
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
  var total_height = 800;
  var hist = document.getElementById('hist');
  var children = hist.children;
  for (var i = 0; i < 10; i++) {
    var perc = result[i] / total;
    var height = Math.round(perc * total_height);
    if (height < 2) {
      height = 2;
    }
    children[i].style.height = '' + height + 'px';
    children[i].onmouseover = function(j, r, t) {
      return function(e) {
        populateTooltip(j + 1, r, r / t);
      }
    }(i, result[i], total);
    children[i].onmousemove = function(e) {
      positionTooltip(e.pageX, e.pageY);
    }
    children[i].onmouseout = function() {
      hideTooltip();
    }
  }
  hist.className = 'histogram finished';
  document.getElementById('results-text').textContent = 'Total votes cast: ' + total;
}

recaptchaResponse = null;
activeNumber = null;

document.getElementById('main-form').onsubmit = function(evt) {
  var num = document.activeElement.textContent.trim();
  document.getElementById('recaptcha').style.visibility = 'visible';
  activeNumber = num;
  var numbers = document.getElementById('numbers').children;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i].textContent.trim() == num) {
      numbers[i].className = 'number active';
    } else {
      numbers[i].className = 'number';
    }
  }
  if (recaptchaResponse == null) {
    document.getElementById('results-text').textContent = 'Verify you are human to proceed';
    return false;
  }
  evt.preventDefault();
  submit();
  return false;
}

function recaptchaCallback(response) {
  recaptchaResponse = response;
  if (activeNumber != null) {
    submit();
  }
}
