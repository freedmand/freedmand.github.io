var svg = document.getElementById('svg');

for (var i = 0; i < svg.children; i++) {
  var segment = svg.children[i];
  segment.onclick = function() {
    segment.setAttribute('fill', 'red');
  }
}