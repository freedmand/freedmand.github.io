var mainInput = document.getElementById('input');
var output = document.getElementById('output');

function input(number) {
  mainInput.value = number;
}

function calculate(places) {
  clearOutput();
  var value = mainInput.value;

  // Begin calculation
  var numerator = 0;
  var denominator = 1;
  var bestApprox = '0/1';
  var bestDelta = value;
  for (var i = 0; i < places; i++) {
    if (numerator / denominator < value) {
      numerator++;
    } else {
      denominator++;
    }
    var delta = Math.abs((numerator / denominator) - value);
    if (delta < bestDelta) {
      bestDelta = delta;
      bestApprox = '' + numerator + '/' + denominator;
    }
    appendToOutput(value, numerator, denominator, bestApprox);
  }
}

function clearOutput() {
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
}

function appendToOutput(value, numerator, denominator, bestDelta) {
  var outputRow = document.createElement('div');
  outputRow.className = 'output-row';

  var append = function(classname, textContent) {
    var elem = document.createElement('span');
    elem.className = 'cell ' + classname;
    elem.textContent = textContent;
    outputRow.appendChild(elem);
  }

  var approx = numerator / denominator;
  var greater = approx < value;

  append('binary ' + (greater ? 'greater' : 'less'), greater ? 1 : 0);
  append('approx', approx);
  append('numerator', numerator);
  append('div', '/');
  append('denominator', denominator);
  var comparatorElem = document.createElement('span');
  if (greater) {
    append('comparator less', '<');
  } else {
    append('comparator greater', '>');
  }
  append('value', value);
  append('delta', '\u0394' + (approx - value));
  append('best-delta', 'Best: ' + bestDelta);

  output.appendChild(outputRow);
}