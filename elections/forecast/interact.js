var states_map = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FL": "Florida",
    "GA": "Georgia",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "ME_1": "Maine (Congressional District 1)",
    "ME_2": "Maine (Congressional District 2)",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NE_1": "Nebraska (Congressional District 1)",
    "NE_2": "Nebraska (Congressional District 2)",
    "NE_3": "Nebraska (Congressional District 3)",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PA": "Pennsylvania",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
};

var poll_headers = ['NYT', '538', 'HuffPost', 'YouGov', 'PW', 'PEC', 'DK', 'Cook', 'Roth', 'Sabato'];
var sources = ['https://www.nytimes.com/interactive/2016/upshot/presidential-polls-forecast.html', 'http://projects.fivethirtyeight.com/2016-election-forecast', 'http://elections.huffingtonpost.com/2016/forecast/president', 'https://today.yougov.com/us-election/', 'http://predictwise.com/politics', 'http://election.princeton.edu/', 'http://www.dailykos.com/story/2016/8/17/1561092/-Introducing-the-Daily-Kos-Elections-2016-presidential-forecast', 'http://cookpolitical.com/presidential/charts/scorecard', 'http://rothenberggonzales.com/ratings/president', 'http://www.centerforpolitics.org/crystalball/2016-president/'];
var source_names = ['New York Times', 'FiveThirtyEight', 'Huffington Post', 'YouGov', 'PredictWise', 'Princeton Election Consortium', 'Daily Kos', 'The Cook Political Report', 'The Rothenberg & Gonzales Political Report', 'Sabato\u2019s Crystal Ball'];
var poll_indices = {};
for (var i = 0; i < poll_headers.length; i++) {
  poll_indices[poll_headers[i]] = i;
}
var elect_votes = {"District Of Columbia":["3",[3,3,3,3,3,3,3,3,3,3],1],"Hawaii":["4",[3,3,3,3,3,3,3,3,3,3],1],"California":["55",[3,3,3,3,3,3,3,3,3,3],1],"Vermont":["3",[3,3,3,3,3,3,3,3,3,3],1],"Rhode Island":["4",[3,2,3,3,3,3,3,3,3,3],1],"New York":["29",[3,3,3,3,3,3,3,3,3,3],1],"Massachusetts":["11",[3,3,3,3,3,3,3,3,3,3],1],"Illinois":["20",[3,3,3,3,3,3,3,3,3,3],1],"Connecticut":["7",[3,3,3,3,3,3,3,3,3,3],1],"New Jersey":["14",[3,3,3,3,3,3,3,3,3,3],1],"Washington":["12",[3,3,3,3,3,3,3,3,3,3],1],"Maryland":["10",[3,3,3,3,3,3,3,3,3,3],1],"Delaware":["3",[3,2,3,3,3,3,3,3,3,3],1],"Oregon":["7",[3,2,3,3,3,3,3,3,3,3],1],"Virginia":["13",[3,1,3,1,3,3,3,2,2,2],1],"New Mexico":["5",[2,1,3,3,3,2,3,2,3,2],1],"Minnesota":["10",[2,2,3,1,3,3,3,2,2,2],1],"Wisconsin":["10",[2,1,3,1,3,3,3,1,1,2],-1],"Michigan":["16",[2,1,3,1,2,2,3,1,1,1],-1],"Maine":["2",[2,1,3,1,3,3,3,2,2,2],1],"Maine (Congressional District 1)":["1",[3,2,3,1,3,3,3,3,3,3],1],"Maine (Congressional District 2)":["1",[0,0,0,1,0,1,3,0,0,-1],-1],"Colorado":["9",[2,1,3,1,2,2,3,1,2,2],1],"Pennsylvania":["20",[2,1,3,0,2,2,3,1,1,1],-1],"New Hampshire":["4",[1,1,2,3,2,0,3,1,1,1],1],"Nevada":["6",[1,0,2,0,2,1,0,1,1,1],1],"Florida":["29",[1,0,2,0,1,1,1,0,1,1],-1],"North Carolina":["15",[1,0,1,0,0,0,0,0,1,1],-1],"Ohio":["18",[0,0,-1,0,-1,0,-1,-1,0,-1],-1],"Iowa":["6",[0,-1,-2,0,-1,-1,-3,-1,-1,-1],-1],"Utah":["6",[-1,-1,-3,-3,-2,-3,-3,-1,-1,-1],-1],"Georgia":["16",[-1,-1,-2,0,-2,-2,-3,-1,-1,-2],-1],"Arizona":["11",[-1,-1,-2,-1,-1,-2,-2,-1,-1,-1],-1],"Mississippi":["6",[-1,-3,-3,-1,-3,-3,-3,-3,-3,-3],-1],"South Carolina":["9",[-2,-2,-3,-1,-3,-2,-3,-2,-3,-3],-1],"Alaska":["3",[-2,-1,-3,-3,-2,-3,-3,-2,-3,-2],-1],"Texas":["38",[-3,-3,-3,-1,-3,-3,-3,-2,-3,-3],-1],"Missouri":["10",[-3,-3,-3,-3,-3,-3,-3,-2,-2,-3],-1],"Kansas":["6",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1],"Indiana":["11",[-3,-3,-3,-3,-3,-3,-3,-2,-1,-3],-1],"Louisiana":["8",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1],"Montana":["3",[-3,-3,-3,-3,-2,-3,-3,-3,-3,-3],-1],"Tennessee":["11",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1],"Oklahoma":["7",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1],"West Virginia":["5",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1],"North Dakota":["3",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1],"Alabama":["9",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1],"Arkansas":["6",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1],"Nebraska":["2",[-3,-3,-3,-3,-3,-3,-3,-3,-2,-3],-1],"Nebraska (Congressional District 1)":["1",[-3,-2,-3,-3,-3,-3,-3,-3,-3,-3],-1],"Nebraska (Congressional District 2)":["1",[-1,0,0,-3,-1,-2,-3,0,0,-1],-1],"Nebraska (Congressional District 3)":["1",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1],"South Dakota":["3",[-3,-2,-3,-3,-3,-3,-3,-3,-3,-3],-1],"Idaho":["4",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1],"Kentucky":["8",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1],"Wyoming":["3",[-3,-3,-3,-3,-3,-3,-3,-3,-3,-3],-1]};
var actual_texts = {"District Of Columbia":[">99% Dem.",">99% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"Hawaii":[">99% Dem.","99% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"California":[">99% Dem.",">99% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"Vermont":[">99% Dem.","98% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"Rhode Island":[">99% Dem.","92% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"New York":[">99% Dem.",">99% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"Massachusetts":[">99% Dem.",">99% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"Illinois":[">99% Dem.","98% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"Connecticut":[">99% Dem.","96% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"New Jersey":[">99% Dem.","97% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"Washington":[">99% Dem.","98% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"Maryland":[">99% Dem.",">99% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"Maine (Congressional District 1)":[">99% Dem.","90% Dem.",">99% Dem.","N.A.","98% Dem.",">99% Dem.","N.A.","Solid Dem.","Solid Dem.","Solid Dem."],"Delaware":["99% Dem.","88% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"Oregon":["97% Dem.","94% Dem.",">99% Dem.","Strong Dem.",">99% Dem.",">99% Dem.",">99% Dem.","Solid Dem.","Solid Dem.","Solid Dem."],"Virginia":["95% Dem.","85% Dem.",">99% Dem.","Lean Dem.","97% Dem.","96% Dem.",">99% Dem.","Likely Dem.","Likely Dem.","Likely Dem."],"New Mexico":["95% Dem.","81% Dem.",">99% Dem.","Strong Dem.","98% Dem.","93% Dem.",">99% Dem.","Likely Dem.","Solid Dem.","Likely Dem."],"Minnesota":["94% Dem.","86% Dem.",">99% Dem.","Lean Dem.","99% Dem.",">99% Dem.",">99% Dem.","Likely Dem.","Likely Dem.","Likely Dem."],"Wisconsin":["94% Dem.","83% Dem.","99% Dem.","Lean Dem.","98% Dem.","98% Dem.",">99% Dem.","Lean Dem.","Lean Dem.","Likely Dem."],"Michigan":["93% Dem.","77% Dem.","99% Dem.","Lean Dem.","95% Dem.","91% Dem.",">99% Dem.","Lean Dem.","Lean Dem.","Lean Dem."],"Maine":["91% Dem.","80% Dem.",">99% Dem.","Lean Dem.","98% Dem.",">99% Dem.",">99% Dem.","Likely Dem.","Likely Dem.","Likely Dem."],"Colorado":["88% Dem.","76% Dem.",">99% Dem.","Lean Dem.","94% Dem.","95% Dem.","99% Dem.","Lean Dem.","Likely Dem.","Likely Dem."],"Pennsylvania":["88% Dem.","76% Dem.",">99% Dem.","Tossup","93% Dem.","91% Dem.",">99% Dem.","Lean Dem.","Lean Dem.","Lean Dem."],"New Hampshire":["78% Dem.","68% Dem.","93% Dem.","Strong Dem.","89% Dem.","63% Dem.","96% Dem.","Lean Dem.","Lean Dem.","Lean Dem."],"Nevada":["70% Dem.","58% Dem.","88% Dem.","Tossup","93% Dem.","74% Dem.","56% Dem.","Lean Dem.","Lean Dem.","Lean Dem."],"Florida":["66% Dem.","54% Dem.","89% Dem.","Tossup","79% Dem.","74% Dem.","75% Dem.","Tossup","Lean Dem.","Lean Dem."],"North Carolina":["66% Dem.","54% Dem.","80% Dem.","Tossup","63% Dem.","57% Rep.","59% Dem.","Tossup","Lean Dem.","Lean Dem."],"Ohio":["55% Rep.","63% Rep.","70% Rep.","Tossup","66% Rep.","63% Rep.","85% Rep.","Lean Rep.","Tossup","Lean Rep."],"Maine (Congressional District 2)":["62% Rep.","52% Rep.","50% Dem.","N.A.","54% Dem.","71% Dem.","N.A.","Tossup","Tossup","Lean Rep."],"Iowa":["62% Rep.","71% Rep.","87% Rep.","Tossup","84% Rep.","74% Rep.","97% Rep.","Lean Rep.","Lean Rep.","Lean Rep."],"Utah":["72% Rep.","84% Rep.",">99% Rep.","Solid Rep.","86% Rep.",">99% Rep.",">99% Rep.","Lean Rep.","Lean Rep.","Lean Rep."],"Nebraska (Congressional District 2)":["78% Rep.","62% Rep.","50% Dem.","N.A.","80% Rep.","92% Rep.","N.A.","Tossup","Tossup","Lean Rep."],"Georgia":["80% Rep.","81% Rep.","90% Rep.","Tossup","90% Rep.","88% Rep.","97% Rep.","Lean Rep.","Lean Rep.","Likely Rep."],"Arizona":["80% Rep.","70% Rep.","86% Rep.","Lean Rep.","78% Rep.","91% Rep.","94% Rep.","Lean Rep.","Lean Rep.","Lean Rep."],"Mississippi":["84% Rep.","98% Rep.",">99% Rep.","Lean Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"South Carolina":["87% Rep.","89% Rep.","96% Rep.","Lean Rep.","99% Rep.","95% Rep.",">99% Rep.","Likely Rep.","Solid Rep.","Solid Rep."],"Alaska":["95% Rep.","76% Rep.","99% Rep.","Solid Rep.","95% Rep.",">99% Rep.",">99% Rep.","Likely Rep.","Solid Rep.","Likely Rep."],"Texas":["96% Rep.","95% Rep.","99% Rep.","Lean Rep.","98% Rep.",">99% Rep.",">99% Rep.","Likely Rep.","Solid Rep.","Solid Rep."],"Missouri":["98% Rep.","96% Rep.",">99% Rep.","Solid Rep.","99% Rep.",">99% Rep.",">99% Rep.","Likely Rep.","Likely Rep.","Solid Rep."],"Kansas":["98% Rep.","97% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"Indiana":["98% Rep.","97% Rep.",">99% Rep.","Solid Rep.","98% Rep.",">99% Rep.",">99% Rep.","Likely Rep.","Lean Rep.","Solid Rep."],"Louisiana":["99% Rep.","99% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"Montana":["99% Rep.","96% Rep.",">99% Rep.","Solid Rep.","93% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"Nebraska (Congressional District 1)":["99% Rep.","91% Rep.",">99% Rep.","N.A.",">99% Rep.",">99% Rep.","N.A.","Solid Rep.","Solid Rep.","Solid Rep."],"Tennessee":[">99% Rep.","98% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"Oklahoma":[">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"West Virginia":[">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"North Dakota":[">99% Rep.","98% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"Alabama":[">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"Arkansas":[">99% Rep.","99% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"Nebraska":[">99% Rep.","98% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Likely Rep.","Solid Rep."],"South Dakota":[">99% Rep.","95% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"Idaho":[">99% Rep.","99% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"Kentucky":[">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"Wyoming":[">99% Rep.","99% Rep.",">99% Rep.","Solid Rep.",">99% Rep.",">99% Rep.",">99% Rep.","Solid Rep.","Solid Rep.","Solid Rep."],"Nebraska (Congressional District 3)":[">99% Rep.","99% Rep.",">99% Rep.","N.A.",">99% Rep.",">99% Rep.","N.A.","Solid Rep.","Solid Rep.","Solid Rep."]};


var svg = document.querySelector('svg');
var table = document.querySelector('.table');

function swapSibling(node1, node2) {
  node1.parentNode.replaceChild(node1, node2);
  node1.parentNode.insertBefore(node2, node1); 
}

var slowFirst = true;

var Gradient = function(points) {
  self.points = points;
}

Gradient.prototype.getColor = function(position) {
  for (var i = 0; i < self.points.length - 1; i++) {
    var point1 = self.points[i];
    var point2 = self.points[i + 1];
    var pos1 = point1[0];
    var pos2 = point2[0];
    if (position >= pos1 && position <= pos2) {
      var color1 = point1[1];
      var color2 = point2[1];
      return color1.interpolate(color2, (position - pos1) / (pos2 - pos1));
    }
  }
}

var Color = function(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.interpolate = function(color, percent) {
  var new_r = Math.floor(this.r + (color.r - this.r) * percent);
  var new_g = Math.floor(this.g + (color.g - this.g) * percent);
  var new_b = Math.floor(this.b + (color.b - this.b) * percent);
  return new Color(new_r, new_g, new_b);
}

Color.prototype.getCss = function() {
  return 'rgb(' + this.r + ',' + this.g + ',' + this.b + ')';
}

var grad = new Gradient([
  [0, new Color(251, 6, 31)], // Red
  [50, new Color(255, 255, 255)], // White
  [100, new Color(23, 180, 8)] // Green
]);

var electoralVotes = new Gradient([
  [0, new Color(212, 212, 212)], // White
  [55, new Color(55, 55, 55)] // Black
]);

var majorityVotes = new Gradient([
  [-27, new Color(235, 0, 32)], // Red
  [-9, new Color(253, 203, 210)], // Medium red
  [-1, new Color(253, 231, 232)], // Light red
  [0, new Color(141, 141, 141)], // Yellow
  [1, new Color(226, 233, 245)], // Light blue
  [9, new Color(208, 222, 245)], // Medium blue
  [27, new Color(39, 81, 250)] // Blue
]);

var outlines = document.getElementById('outlines');
var tooltip = document.getElementById('tooltip');
var states = outlines.children;

function positionTooltip(x, y) {
  var boundingBox = tooltip.getBoundingClientRect();
  var containerBox = table.getBoundingClientRect();
  if (x + boundingBox.width > containerBox.right) {
    tooltip.style.left = '' + (x - boundingBox.width) + 'px';
  } else {
    tooltip.style.left = '' + x + 'px';
  }
  if (y + boundingBox.height > containerBox.bottom) {
    tooltip.style.top = '' + (y - boundingBox.height) + 'px';
  } else {
    tooltip.style.top = '' + y + 'px';
  }
}

var state_colors = {};
for (var key in states_map) {
  state_colors[key] = new Color(211, 211, 211);
};

var state_transitions = {};

var state_boxes = [];

function sort_votes_dict(d) {
  var items = Object.keys(d).map(function(key) {
    return [key, d[key]];
  });

  items.sort(function(first, second) {
    return second[1] - first[1];
  });

  return items;
}

function startFillTransition(element, id, newFill) {
  var current_color = state_colors[id];
  var percent = 0.0;
  var reset = function(id) {
    slowFirst = false;
    clearTimeout(state_transitions[id]);
    state_transitions[id] = null;
  }
  if (state_transitions[id]) {
    slowFirst = false;
    reset(id);
  }
  var transition = function() {
    percent += slowFirst ? 0.008 : 0.05;
    var new_color = current_color.interpolate(newFill, percent);
    state_colors[id] = new_color;
    element.setAttribute('fill', new_color.getCss());
    if (percent < 1) {
      state_transitions[id] = setTimeout(transition, 10);
    } else {
      reset(id);
    }
  };
  transition();
};

var all_bars = [0, -1, -3, 1, 3];
var ordered_bars = [3, 1, 0, -1, -3];
var bar_elems = {};
var bar_progress = {};
var bar_transitions = {};

var electoral_vote_height = 20;
var electoral_vote_start = 60.554;
var electoral_vote_end = 510.554;
var electoral_vote_y = 458.5;

var svg_spec = 'http://www.w3.org/2000/svg';
function createRect(x1, x2, color) {
  var rect = document.createElementNS(svg_spec, 'rect');
  rect.setAttribute('x', x1);
  rect.setAttribute('y', electoral_vote_y);
  rect.setAttribute('width', x2 - x1);
  rect.setAttribute('height', electoral_vote_height);
  return rect;
}

var bars_elem = document.createElementNS(svg_spec, 'g');
var bars_overlay = document.createElementNS(svg_spec, 'g');
var base_bar = createRect(electoral_vote_start, electoral_vote_end);
base_bar.setAttribute('fill', 'Gainsboro');
bars_elem.appendChild(base_bar);
for (var i = 0; i < all_bars.length; i++) {
  var b = all_bars[i];
  var rect = null;
  if (b >= 0) {
    rect = createRect(electoral_vote_start, electoral_vote_start);
  } else if (b < 0) {
    rect = createRect(electoral_vote_end, electoral_vote_end)
  }
  rect.setAttribute('fill', majorityVotes.getColor(b * 9).getCss());
  bar_elems[b] = rect;
  bars_elem.appendChild(rect);
}
svg.appendChild(bars_elem);
svg.appendChild(bars_overlay);

var bars = {};
var sum_bars = {};
var complete_bar_sum = 0;

function fill_tooltip(id, view) {
  while (tooltip.firstChild) {
    tooltip.removeChild(tooltip.firstChild);
  }

  var state_name = states_map[id];
  var ev = parseInt(elect_votes[state_name][0], 10);

  var stateElem = document.createElement('div');
  stateElem.className = 'state';
  var evElem = document.createElement('span');
  evElem.className = 'ev';
  evElem.textContent = '' + ev + ' electoral vote' + (ev != 1 ? 's' : '');
  stateElem.appendChild(document.createTextNode(state_name + ' '));
  stateElem.appendChild(evElem);

  var electionResultElem = document.createElement('div');
  electionResultElem.className = 'election_results';
  var outcomeText = document.createElement('span');
  outcomeText.className = 'outcome_text';
  outcomeText.textContent = '2016 election result:';
  var colorDiv = document.createElement('div');
  colorDiv.className = 'color';
  var outcomeResult = elect_votes[state_name][2];
  colorDiv.style.background = majorityVotes.getColor(outcomeResult * 27).getCss();
  var victor;
  if (outcomeResult > 0) {
    victor = document.createTextNode('Hillary Clinton \u2713');
  } else {
    victor = document.createTextNode('Donald Trump \u2713');
  }
  electionResultElem.appendChild(outcomeText);
  electionResultElem.appendChild(colorDiv);
  electionResultElem.appendChild(victor);
  var tableElem = document.createElement('div');
  tableElem.className = 'table2';
  var rowElem = null;
  var all_polls = true;
  var selected_poll;
  if (view.startsWith('poll')) {
    all_polls = false;
    selected_poll = parseInt(view.substring(4), 10);
  }
  for (var i = (all_polls ? 0 : selected_poll); i < (all_polls ? poll_headers.length : selected_poll + 1); i++) {
    var poll_name = poll_headers[i];
    var poll_text = actual_texts[state_name][i];
    var poll_color;
    if (poll_text == 'N.A.') {
      poll_color = 'Gainsboro';
    } else {
      poll_color = majorityVotes.getColor(elect_votes[state_name][1][i] * 9).getCss()
    }
    if ((i - (all_polls ? 0 : selected_poll)) % 2 == 0) {
      if (rowElem !== null) {
        tableElem.appendChild(rowElem);
      }
      rowElem = document.createElement('div');
      rowElem.className = 'row';
    }
    var sourceElem = document.createElement('div');
    var colorElem = document.createElement('div');
    var scoreElem = document.createElement('div');
    sourceElem.className = 'source';
    colorElem.className = 'color';
    scoreElem.className = 'score';
    sourceElem.textContent = poll_name;
    colorElem.style.background = poll_color;
    scoreElem.appendChild(colorElem);
    scoreElem.appendChild(document.createTextNode(poll_text));
    rowElem.appendChild(sourceElem);
    rowElem.appendChild(scoreElem);
  }
  tableElem.appendChild(rowElem);
  tooltip.appendChild(stateElem);
  tooltip.appendChild(electionResultElem);
  tooltip.appendChild(tableElem);
}

function fill_in_state_boxes() {
  var x = electoral_vote_start;
  for (var i = 0; i < ordered_bars.length; i++) {
    var o = ordered_bars[i];
    if (!bars[o]) {
      continue;
    }
    var sorted = sort_votes_dict(bars[o]);
    for (var k = 0; k < sorted.length; k++) {
      var j = k;
      if (o < 0) {
        j = sorted.length - k - 1;
      }
      var state = sorted[j][0];
      var votes = sorted[j][1];
      var width = votes / complete_bar_sum * (electoral_vote_end - electoral_vote_start);
      var rect = createRect(x, x + width);
      rect.setAttribute('fill', majorityVotes.getColor(o * 9).getCss());
      rect.id = '_' + state;
      rect.onmouseover = function(evt) {
        evt.target.setAttribute('stroke', 'black');
        evt.target.setAttribute('stroke-width', '3px');
        swapSibling(evt.target, evt.target.parentNode.lastElementChild);
        fill_tooltip(evt.target.id.substring(1), current_election_view);
        tooltip.style.visibility = 'visible';
      }
      rect.onmouseout = function(evt) {
        evt.target.setAttribute('stroke', 'none');
        tooltip.style.visibility = 'hidden';
      }
      rect.onmousemove = function(e) {
        positionTooltip(e.pageX, e.pageY);
      }
      bars_overlay.appendChild(rect);
      x += width;
    }
  }
}

function clear_state_boxes() {
  while (bars_overlay.firstChild) {
    bars_overlay.removeChild(bars_overlay.firstChild);
  }
}

function startBarTransitions(bar) {
  var element = bar_elems[bar];
  var current_progress = parseFloat(element.getAttribute('width'));
  var current_x = parseFloat(element.getAttribute('x'));
  var get_sum_bar = function(b) {
    if (b in sum_bars) {
      return sum_bars[b];
    } else {
      return 0;
    }
  }
  var new_progress = get_sum_bar(bar) / complete_bar_sum * (electoral_vote_end - electoral_vote_start);
  var new_x = electoral_vote_start;
  for (var i = 0; i < ordered_bars.length; i++) {
    var o = ordered_bars[i];
    if (o == bar) {
      break;
    }
    new_x += get_sum_bar(o) / complete_bar_sum * (electoral_vote_end - electoral_vote_start)
  }

  var percent = 0.0;

  var reset = function(id) {
    slowFirst = false;
    clearTimeout(bar_transitions[id]);
    bar_transitions[id] = null;
  }
  if (bar_transitions[bar]) {
    slowFirst = false;
    reset(bar);
  }
  var transition = function() {
    percent += slowFirst ? 0.008 : 0.05;
    var new_width = current_progress + percent * (new_progress - current_progress);
    if (Math.abs(new_width) < 0.001) {
      new_width = 0;
    }
    var new_pos = current_x + percent * (new_x - current_x);
    element.setAttribute('width', new_width);
    element.setAttribute('x', new_pos);
    if (percent < 1) {
      bar_transitions[bar] = setTimeout(transition, 10);
    } else {
      fill_in_state_boxes();
      reset(bar);
    }
  };
  transition();
};

var current_fn = null;

function resultToBar(r) {
  if (r > 0 && r <= 18) {
    return 1;
  } else if (r > 18) {
    return 3;
  } else if (r < 0 && r >= -18) {
    return -1;
  } else if (r < -18) {
    return -3;
  } else {
    return 0;
  }
}

var overall_dem = document.getElementById('overall_dem');
var overall_rep = document.getElementById('overall_rep');
var solid_dem = document.getElementById('solid_dem');
var solid_rep = document.getElementById('solid_rep');
var lean_dem = document.getElementById('lean_dem');
var lean_rep = document.getElementById('lean_rep');

var previous_election_view;
var current_election_view;

var sourceContainer = document.createElement('div');
sourceContainer.className = 'sources';

function setSource(i) {
  while (sourceContainer.firstChild) {
    sourceContainer.removeChild(sourceContainer.firstChild);
  }
  var sourceElement = document.createElement('div');
  sourceElement.appendChild(document.createTextNode('Forecast source' + (i == -1 ? 's' : '') + ': '));
  var makeLinkElem = function(j) {
    var sourceLinkElem = document.createElement('a');
    sourceLinkElem.target = 'blank_';
    sourceLinkElem.textContent = source_names[j];
    sourceLinkElem.href = sources[j];
    sourceElement.appendChild(sourceLinkElem);
  }
  if (i != -1) {
    makeLinkElem(i);
  } else {
    for (var i = 0; i < sources.length; i++) {
      makeLinkElem(i);
      if (i != sources.length - 1) {
        sourceElement.appendChild(document.createTextNode(', '));
      }
    }
  }
  sourceContainer.appendChild(sourceElement);
}

var midContainer = document.createElementNS(svg_spec, 'g');
midContainer.style.pointerEvents = 'none';
svg.appendChild(midContainer);
function draw_mid(pos) {
  while (midContainer.firstChild) {
    midContainer.removeChild(midContainer.firstChild);
  }
  var line = document.createElementNS(svg_spec, 'line');
  line.setAttribute('x1', pos);
  line.setAttribute('x2', pos);
  line.setAttribute('y1', electoral_vote_y);
  line.setAttribute('y2', electoral_vote_y + electoral_vote_height);
  line.setAttribute('stroke', 'black');
  line.setAttribute('stroke-width', '1px');
  line.setAttribute('stroke-dasharray', '3, 3');
  var text = document.createElementNS(svg_spec, 'text');
  text.setAttribute('x', pos);
  text.setAttribute('y', electoral_vote_y + electoral_vote_height + 25);
  text.textContent = '270';
  text.setAttribute('fill', 'gray');
  text.setAttribute('font-family', 'Arial, sans-serif');
  text.setAttribute('text-anchor', 'middle');
  midContainer.appendChild(line);
  midContainer.appendChild(text);
}

var hatched_state = null;
function setView(fn, gradient, view) {
  clear_state_boxes();
  bars = {};
  sum_bars = {};
  complete_bar_sum = 0;
  current_fn = fn;
  current_election_view = view;
  if (view.startsWith('poll')) {
    setSource(parseInt(view.substring(4), 10));
  } else if (view == 'all') {
    setSource(-1);
  }
  for (var i = 0; i < states.length; i++) {
    var state = states[i];
    state.setAttribute('stroke', '#E4DFEA');
    state.setAttribute('stroke-width', '1px');
    var result = fn(state.id);
    var bar = resultToBar(result);
    var bar_evaluations = [bar];
    var vote_count = parseInt(elect_votes[states_map[state.id]][0], 10);
    complete_bar_sum += vote_count;
    for (var j = 0; j < bar_evaluations.length; j++) {
      if (bar_evaluations[j] in bars) {
        sum_bars[bar_evaluations[j]] += vote_count;
        if (j == 0) {
          bars[bar_evaluations[j]][state.id] = vote_count;
        }
      } else {
        sum_bars[bar_evaluations[j]] = vote_count;
        if (j == 0) {
          bars[bar_evaluations[j]] = {};
          bars[bar_evaluations[j]][state.id] = vote_count;
        }
      }
    }

    startFillTransition(state, state.id, gradient.getColor(result));
    state.onmouseover = function(e) {
      fill_tooltip(e.target.id, view);
      tooltip.style.visibility = 'visible';
      if (e.target.id != 'DC') {
        swapSibling(e.target, e.target.parentNode.lastElementChild.previousElementSibling);
      }
      var cloned = e.target.cloneNode();
      if (e.target.id != 'DC') {
        e.target.parentNode.insertBefore(cloned, e.target.parentNode.lastElementChild);
      } else {
        e.target.parentNode.appendChild(cloned);
      }
      hatched_state = cloned;
      hatched_state.setAttribute('fill', 'url(#diagonalHatch)');
      hatched_state.style.pointerEvents = 'none';
      e.target.setAttribute('stroke', 'black');
      e.target.setAttribute('stroke-width', '3px');
      e.target.setAttribute('stroke-opacity', '0.5');
    }.bind(state);
    state.onmouseout = function(e) {
      tooltip.style.visibility = 'hidden';
      e.target.setAttribute('stroke', '#E4DFEA');
      e.target.setAttribute('stroke-width', '1px');
      e.target.setAttribute('stroke-opacity', '1');
      if (hatched_state) {
        e.target.parentNode.removeChild(hatched_state);
      }
    }
    state.onmousemove = function(e) {
      positionTooltip(e.pageX, e.pageY);
    }
  }

  var dem_ev = (sum_bars[1] || 0) + (sum_bars[3] || 0);
  var rep_ev = (sum_bars[-1] || 0) + (sum_bars[-3] || 0);
  overall_dem.textContent = dem_ev;
  overall_rep.textContent = rep_ev;
  solid_dem.textContent = sum_bars[3] || 0;
  solid_rep.textContent = sum_bars[-3] || 0;
  lean_dem.textContent = sum_bars[1] || 0;
  lean_rep.textContent = sum_bars[-1] || 0;

  var mid_pos;
  if (dem_ev >= rep_ev) {
    mid_pos = 270 / complete_bar_sum * (electoral_vote_end - electoral_vote_start) + electoral_vote_start;
  } else {
    mid_pos = electoral_vote_end - 270 / complete_bar_sum * (electoral_vote_end - electoral_vote_start);
  }

  draw_mid(mid_pos);

  for (var i = 0; i < ordered_bars.length; i++) {
    startBarTransitions(ordered_bars[i]);
  }
}

var majority = function(x, index) {
  var result = elect_votes[states_map[x]][1];
  if (index !== undefined) {
    return result[index] * result.length * (27 / 30);
  }
  var sum = 0;
  for (var i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum * (27 / 30);
}

var election_outcomes = function(x) {
  var votes = elect_votes[states_map[x]];
  var result = votes[2];
  return result * 3 * votes[1].length * (27 / 30);
};

var make_extreme = function(fn) {
  return function(x) {
    var result = fn(x);
    if (result > 0) {
      result = 27;
    } else if (result < 0) {
      result = -27;
    } else {
      result = 0;
    }
    return result;
  }
}

var make_extreme_down = function(fn) {
  return function(x) {
    var result = fn(x);
    if (Math.abs(result) < 27) {
      result = 0;
    }
    return result;
  }
}

var makeMajorityFn = function(index) {
  return function(x) {
    return majority(x, index);
  }
}

var makePollDisparityFn = function(fn) {
  return function(index) {
    var normalized = (election_outcomes(index) - fn(index)) / 54.0;
    if (normalized < 0) {
      normalized = -Math.pow(-normalized, 0.6);
    } else {
      normalized = Math.pow(normalized, 0.6);
    }
    return normalized * 27.0;
  }
}

var forecastContainer = document.createElement('div');

var previous_fn = null;
var previous_selection_up = null;
var previous_selection_down = null;

function restorePreviousSelections() {
  if (previous_selection_up !== null) {
    roundButton.querySelector('input').checked = previous_selection_up;
  }
  if (previous_selection_down !== null) {
    roundDownButton.querySelector('input').checked = previous_selection_down;
  }
  previous_selection_up = null;
  previous_selection_down = null;
}

function enableForecasts() {
  election_checked = false;
  if (previous_fn !== null) {
    setView(previous_fn, majorityVotes, previous_election_view);
    previous_fn = null;
  } else {
    setView(current_fn, majorityVotes, current_election_view);
  }
  forecastContainer.classList.remove('disabled');
}

function disableForecasts() {
  if (!election_checked) {
    previous_fn = current_fn;
    previous_election_view = current_election_view;
  }
  election_checked = true;
  forecastContainer.classList.add('disabled');
  setView(wrapFunction(election_outcomes), majorityVotes, 'election');
}

var election_checked = false;

var current_checked = null;
var buttons = {};
function createButton(text, event, name, classname) {
  var label = document.createElement('label');
  var button = document.createElement('input');
  if (name !== undefined) {
    button.name = name;
    button.type = 'radio';
  } else {
    button.type = 'checkbox';
  }
  if (classname !== undefined) {
    label.className = classname;
  }
  if (event !== undefined) {
    button.onclick = function(evt) { current_checked = button; event(evt); };
  } else {
    button.onclick = function(evt) { current_checked = button; };
  }
  buttons[text] = button;
  var span = document.createElement('span');
  span.textContent = text;
  label.appendChild(button);
  label.appendChild(span);
  return label;
}

var container = document.getElementById('container');

var election_outcomes_text = 'Election outcomes';
var all = 'All models combined';
var forecastsButton = createButton('View forecasts', function(event) {
  restorePreviousSelections();
  enableForecasts();
}, 'election');
forecastsButton.querySelector('input').checked = true;
var differenceButton = createButton('View difference', function(event) {
  previous_selection_up = roundButton.querySelector('input').checked;
  previous_selection_down = roundDownButton.querySelector('input').checked;
  roundButton.querySelector('input').checked = true;
  roundDownButton.querySelector('input').checked = false;
  enableForecasts();
}, 'election');
var roundButton = createButton('Round forecasts up', function() {
  var roundChecked = roundButton.querySelector('input').checked;
  var roundDownChecked = roundDownButton.querySelector('input').checked;
  if (roundChecked && roundDownChecked) {
    roundDownButton.querySelector('input').checked = false;
  }
  setView(current_fn, majorityVotes, current_election_view);
}, undefined, 'normal_check');
var roundDownButton = createButton('Round forecasts down', function() {
  var roundChecked = roundButton.querySelector('input').checked;
  var roundDownChecked = roundDownButton.querySelector('input').checked;
  if (roundChecked && roundDownChecked) {
    roundButton.querySelector('input').checked = false;
  }
  setView(current_fn, majorityVotes, current_election_view);
}, undefined, 'normal_check');

function wrapFunction(fn) {
  return function(x) {
    var diffChecked = differenceButton.querySelector('input').checked;
    var roundChecked = roundButton.querySelector('input').checked;
    var roundDownChecked = roundDownButton.querySelector('input').checked;
    if (roundChecked && roundDownChecked) {
      throw 'Impossible: both round buttons are checked';
    }
    if (diffChecked && !roundChecked && !roundDownChecked) {
      return makePollDisparityFn(fn)(x);
    } else if (!diffChecked && roundChecked) {
      return make_extreme(fn)(x);
    } else if (!diffChecked && roundDownChecked) {
      return make_extreme_down(fn)(x);
    } else if (diffChecked && roundChecked) {
      return makePollDisparityFn(make_extreme(fn))(x);
    } else if (diffChecked && roundDownChecked) {
      return makePollDisparityFn(make_extreme_down(fn))(x);
    } else {
      return fn(x);
    }
  }
}

function makeP(text, small) {
  var p = document.createElement('p');
  p.textContent = text;
  if (small) {
    p.className = 'small';
  }
  return p;
}
var allRadioButton = createButton(all, function() {
  setView(wrapFunction(majority), majorityVotes, 'all');
}, 'poll', 'all');
allRadioButton.querySelector('input').checked = true;
setView(wrapFunction(majority), majorityVotes, 'all');
container.appendChild(makeP('Play with election forecasts and results'));
container.appendChild(forecastsButton);
container.appendChild(createButton(election_outcomes_text, function(event) {
  restorePreviousSelections();
  disableForecasts();
}, 'election'));
container.appendChild(differenceButton);


container.appendChild(document.createElement('hr'));
forecastContainer.appendChild(makeP('View forecaster predictions'));
forecastContainer.appendChild(allRadioButton);
for (var i = 0; i < poll_headers.length; i++) {
  (function (i) {
    forecastContainer.appendChild(
      createButton(poll_headers[i], function () {
        setView(wrapFunction(makeMajorityFn(i)), majorityVotes, 'poll' + i);
      }, 'poll'));
  })(i);
}

forecastContainer.appendChild(roundButton);
forecastContainer.appendChild(roundDownButton);
forecastContainer.appendChild(sourceContainer);
container.appendChild(forecastContainer);