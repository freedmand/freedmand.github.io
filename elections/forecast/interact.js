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
var table = document.getElementById('table1');

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

function position(x, y, tooltip, table) {
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
        position(e.clientX, e.clientY, tooltip, table);
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
      position(e.clientX, e.clientY, tooltip, table);
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

var current_checked = {};

var buttons = {};
function createButton(text, event, name, classname, buttons_array) {
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
  if (event) {
    button.onclick = function(evt) { if (name) current_checked[name] = text; event(evt); };
  } else {
    button.onclick = function(evt) { if (name) current_checked[name] = text; };
  }
  (buttons_array === undefined ? buttons : buttons_array)[text] = button;
  var span = document.createElement('span');
  span.textContent = text;
  label.appendChild(button);
  label.appendChild(span);
  return label;
}

function changeText(classname, orig, repl) {
  var elems = document.querySelectorAll('.' + classname);
  for (var i = 0; i < elems.length; i++) {
    for (var node = elems[i].firstChild; node; node = node.nextSibling) {
      if (node.nodeType == 3) {
        node.textContent = node.textContent.replace(orig, repl);
        break;
      }
    }
  }
}

var flipText = 'flip';
var tossupText = 'tossup';

function changeTexts() {
  changeText('solid-text', 'solid', flipText);
  changeText('leaning-text', 'leaning', tossupText);
}

function restoreTexts() {
  changeText('solid-text', flipText, 'solid');
  changeText('leaning-text', tossupText, 'leaning');
}

var container = document.getElementById('container');

var election_outcomes_text = 'Election outcomes';
var all = 'All models combined';
var forecastsButton = createButton('View forecasts', function(event) {
  restoreTexts();
  restorePreviousSelections();
  enableForecasts();
}, 'election');
forecastsButton.querySelector('input').checked = true;
var differenceButton = createButton('View difference', function(event) {
  changeTexts();
  previous_selection_up = roundButton.querySelector('input').checked;
  previous_selection_down = roundDownButton.querySelector('input').checked;
  roundButton.querySelector('input').checked = true;
  roundDownButton.querySelector('input').checked = false;
  enableForecasts();
}, 'election');
var roundButton = createButton('Round forecasts up', function() {
  previous_selection_up = null;
  previous_selection_down = null;
  var roundChecked = roundButton.querySelector('input').checked;
  var roundDownChecked = roundDownButton.querySelector('input').checked;
  if (roundChecked && roundDownChecked) {
    roundDownButton.querySelector('input').checked = false;
  }
  setView(current_fn, majorityVotes, current_election_view);
}, undefined, 'normal_check');
var roundDownButton = createButton('Round forecasts down', function() {
  previous_selection_up = null;
  previous_selection_down = null;
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
  restoreTexts();
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

// --------------------- EV dists

var evs = {
  'HuffPost': {
    'data': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,4,0,0,0,2,2,2,3,8,1,9,3,7,16,2,16,16,5,7,17,15,24,21,23,22,44,23,22,27,41,40,94,101,39,95,147,68,124,141,126,98,149,125,70,448,453,180,1048,1228,424,446,1038,854,1038,1478,776,261,1027,1254,947,3462,3016,646,873,4698,4471,3420,8358,6775,1747,5655,12271,8215,9498,11681,4750,2901,13670,15137,6351,26934,25782,4719,7608,73522,76604,43926,38306,8498,7593,128470,150410,26578,9301,8672,24853,46632,34131,13077,46031,46756,32686,49740,31044,19595,57493,57191,15414,70896,96834,35392,24596,26510,64341,106224,90629,49449,31328,62889,235570,266013,47089,5806,51951,123489,108723,49218,12914,245003,357260,224814,204999,41597,10513,778808,1144606,212279,54901,56828,16448,103339,153737,38954,51836,93544,128171,213154,137795,42489,38693,99463,171467,400823,561802,137655,33931,28934,17645,86787,203911,138399,53617,57380,87913,131253,34760,10904,9620,32473,92353,105185,39167,20532,25735,9771,8058,4135,16166,30427,20438,16713,4728,1300,2713,4885,5136,6702,2026,5359,12354,10531,9701,2174,428,1944,3982,8643,13378,3764,1136,1846,2000,2723,779,381,556,2195,8152,10847,2679,956,1497,983,1251,531,562,740,1072,1650,502,145,349,507,1013,1385,358,158,331,227,210,56,44,211,524,345,119,41,26,16,17,12,8,14,27,40,68,15,3,7,1,1,6,4,1,10,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'sum': 10000000
  },
  '538': {
    'data': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.005,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.005,0,0,0.005,0,0,0,0,0,0.005,0,0,0.005,0,0.005,0,0,0,0,0,0,0,0,0.005,0,0.005,0,0,0.005,0.005,0.005,0,0,0.01,0,0.005,0.005,0.005,0,0.01,0.02,0,0.01,0.025,0.015,0,0.02,0.02,0.005,0,0.02,0.005,0.005,0.01,0.005,0.02,0.015,0.01,0.015,0.02,0.03,0.02,0.02,0.03,0.015,0.015,0.03,0.02,0.034999999999999996,0.02,0.05,0.015,0.02,0.034999999999999996,0.025,0.04,0.03,0.04,0.034999999999999996,0.025,0.034999999999999996,0.03,0.045,0.01,0.05,0.02,0.03,0.034999999999999996,0.034999999999999996,0.06,0.06999999999999999,0.04,0.08499999999999999,0.055,0.06,0.08499999999999999,0.06,0.06999999999999999,0.03,0.05,0.075,0.105,0.08,0.095,0.15,0.075,0.09,0.1,0.08499999999999999,0.105,0.1,0.135,0.125,0.13,0.12,0.105,0.16999999999999998,0.16999999999999998,0.17500000000000002,0.11,0.11499999999999999,0.12,0.21,0.145,0.19,0.13999999999999999,0.165,0.13999999999999999,0.16999999999999998,0.265,0.13,0.165,0.16999999999999998,0.19,0.20500000000000002,0.22999999999999998,0.215,0.25,0.25,0.24,0.23500000000000001,0.295,0.22,0.255,0.2,0.25,0.215,0.215,0.23500000000000001,0.265,0.26,0.27999999999999997,0.27,0.22999999999999998,0.32,0.265,0.215,0.31,0.265,0.385,0.31,0.33,0.26,0.26,0.35500000000000004,0.38,0.295,0.41000000000000003,0.33999999999999997,0.36,0.40499999999999997,0.365,0.385,0.28500000000000003,0.505,0.35000000000000003,0.38999999999999996,0.365,0.45999999999999996,0.40499999999999997,0.445,0.4,0.45999999999999996,0.41000000000000003,0.48,0.4,0.42,0.5349999999999999,0.395,0.42500000000000004,0.385,0.37,0.44,0.5349999999999999,0.52,0.52,0.7100000000000001,0.54,0.49500000000000005,0.545,0.62,0.8500000000000001,0.695,0.575,0.455,0.43499999999999994,0.625,0.86,0.585,0.47000000000000003,0.565,0.485,0.5950000000000001,0.53,0.51,0.5349999999999999,0.7100000000000001,0.6,0.63,0.65,0.46499999999999997,0.575,0.815,0.545,0.475,0.485,0.575,0.52,0.455,0.545,0.53,0.59,0.59,0.605,0.51,0.66,0.735,0.575,0.49,0.48,0.555,0.555,0.5599999999999999,0.445,0.685,0.815,0.715,0.73,0.615,0.545,0.8500000000000001,1.09,0.79,0.475,0.635,0.5,0.5599999999999999,0.6649999999999999,0.5700000000000001,0.455,0.58,0.685,0.75,0.5950000000000001,0.43499999999999994,0.6,0.5349999999999999,0.49,0.755,0.835,0.64,0.555,0.585,0.40499999999999997,0.5599999999999999,0.83,0.67,0.38,0.605,0.59,0.605,0.635,0.42500000000000004,0.375,0.49500000000000005,0.505,0.9400000000000001,0.9450000000000001,0.505,0.6649999999999999,0.8750000000000001,0.38999999999999996,0.49,0.51,0.36,0.43499999999999994,0.42,0.26,0.25,0.325,0.33,0.22,0.525,0.485,0.32,0.475,0.505,0.165,0.325,0.33,0.185,0.245,0.38,0.19499999999999998,0.245,0.215,0.125,0.185,0.19,0.095,0.21,0.18,0.135,0.11499999999999999,0.145,0.16,0.165,0.11499999999999999,0.13,0.11499999999999999,0.095,0.08499999999999999,0.11499999999999999,0.11499999999999999,0.075,0.125,0.075,0.075,0.095,0.08499999999999999,0.16,0.09,0.08499999999999999,0.11,0.11499999999999999,0.055,0.095,0.09,0.055,0.11,0.16,0.125,0.12,0.11499999999999999,0.09,0.1,0.075,0.02,0.075,0.11499999999999999,0.065,0.05,0.06,0.055,0.034999999999999996,0.06,0.05,0.045,0.06999999999999999,0.04,0.05,0.04,0.06,0.04,0.034999999999999996,0.05,0.005,0.03,0.03,0.025,0.025,0.02,0.04,0.075,0.034999999999999996,0.02,0.045,0,0.034999999999999996,0.015,0.02,0.025,0.02,0.03,0.04,0.025,0.015,0.02,0.02,0.015,0.025,0,0.01,0.02,0.015,0.015,0.015,0.02,0.015,0.025,0.005,0.015,0.005,0,0.005,0.015,0.005,0.01,0.005,0,0,0,0.005,0,0.02,0,0,0.005,0,0,0,0,0,0.005,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.005,0,0,0,0.005,0.005,0,0,0,0,0,0,0,0,0],
    'sum': 99.99999999999991
  },
  'NYT': {
    'data': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.000010030418329660948,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.000010030418329660948,0,0,0,0,0,0.000010030418329660948,0.000010030418329660948,0,0,0.000050097576411904,0.000010030418329660948,0,0,0.000020060836659321896,0,0,0.000010030418329660948,0.000010030418329660948,0,0,0.000020060836659321896,0.000010030418329660948,0,0.000010030418329660948,0.000020060836659321896,0.000020060836659321896,0.000010030418329660948,0.000020060836659321896,0.000020060836659321896,0.000020060836659321896,0.000010030418329660948,0.000010030418329660948,0.000010030418329660948,0.000030036739752582096,0.000030036739752582096,0.000020060836659321896,0.000030036739752582096,0.000020060836659321896,0.000010030418329660948,0.000010030418329660948,0.000030036739752582096,0.000030036739752582096,0.000020060836659321896,0.000020060836659321896,0.000040067158082243043,0.000020060836659321896,0.000030036739752582096,0.000050097576411904,0.000030036739752582096,0.000030036739752582096,0.000030036739752582096,0.000040067158082243043,0.000040067158082243043,0.000040067158082243043,0.000050097576411904,0.000060127994741564946,0.00007010390341697226,0.000050097576411904,0.00008013432174663319,0.00007010390341697226,0.00009016474007629415,0.000060127994741564946,0.0001001951584059551,0.00009016474007629415,0.000050097576411904,0.000050097576411904,0.00012020147982887624,0.00012020147982887624,0.00007010390341697226,0.00014026231648819814,0.00020039031681190703,0.0001001951584059551,0.00008013432174663319,0.0001001951584059551,0.00020039031681190703,0.00007010390341697226,0.00011022557673561605,0.00020039031681190703,0.00019035989290010213,0.0001302318981585372,0.00023042705656448913,0.0005310125262002073,0.00012020147982887624,0.0002604637963170712,0.00016032315314752003,0.00020039031681190703,0.000250487893223811,0.00023042705656448913,0.0006011164296171764,0.00014026231648819814,0.00041075653113493033,0.00034065263330010516,0.00021036621990516723,0.0004908908528815636,0.00034065263330010516,0.0002905550513060541,0.0003606589547230263,0.00044084778612391316,0.0005910860112875154,0.000300585469635715,0.0003606589547230263,0.0006311531693697585,0.00034065263330010516,0.0007413787461053745,0.0005811101026121113,0.00040072611280526937,0.0006311531693697585,0.0004207869494645913,0.0006111468479468373,0.0006011164296171764,0.0005209821078705464,0.0008415739045113296,0.0005610492659527894,0.0008215130678520077,0.0007714154858579566,0.0007013115880231314,0.0009417690629172815,0.0007814459041876177,0.0009417690629172815,0.0008816410625935726,0.0007213179094460526,0.0009116778023461547,0.0010018425424224457,0.0008516043228409906,0.0010118729607521066,0.0010920617977351406,0.0011621656955699657,0.001192202440904695,0.001302428012058164,0.00125233043564626,0.0009718058026698637,0.001262360853975921,0.001663086972363334,0.0010419642157410895,0.001683147809022656,0.0013224888487174857,0.001392592752134455,0.0016230198086989473,0.0018033492888515324,0.0012723912723055818,0.0012723912723055818,0.0019937091817516343,0.0020738435034982645,0.0020939043401575863,0.002634892769451054,0.0014326599157988452,0.0016530565484515292,0.0022141058199864625,0.0029054414993341863,0.0016530565484515292,0.0018133797071811933,0.0024545632948806124,0.0023643985548043216,0.0037770521435980986,0.002815222249603639,0.0020738435034982645,0.001582952650616704,0.004798955528262014,0.0027250575095273477,0.0029554845660918374,0.0018935140233456793,0.003175935713980922,0.0024345569678755475,0.005490236692373337,0.004598565211450106,0.0019135748600050012,0.0025046608712925166,0.0037068937305268722,0.0052697855444842545,0.0027751550915213956,0.003095746882580035,0.0031558748773216003,0.0036167289904505784,0.009547813474529975,0.004217845420067758,0.0036367898271099,0.002254227493305106,0.01240315739745226,0.004698760369856058,0.0077344337673487815,0.002664984024440037,0.003356265194133507,0.00351653383762677,0.013885887632044808,0.004768918782927284,0.0029254478263392547,0.004197839098644836,0.0024144961312162257,0.0062617066934676936,0.005329968054462221,0.003977387945173605,0.002795215928180718,0.011351162757799365,0.00512957773765031,0.005560340595790309,0.005369980702890207,0.004468333313291569,0.004758888364597623,0.014086250691238516,0.007043098088001057,0.003216002877645309,0.00750395220113004,0.008445721258465174,0.004358107736555953,0.006582243974872076,0.00407758310357956,0.011631687396357905,0.007223427568153643,0.008245385456889668,0.0033762715155564284,0.006081377218897256,0.0037670217252684375,0.018013595569654477,0.008105123140401469,0.004298034257050789,0.0034664362556327227,0.008465782095124495,0.008846501886506843,0.008916605789923817,0.0058408652287667015,0.003596722669027657,0.012332998978798889,0.008455751676794835,0.009317386417965487,0.007974836727006534,0.005299876799473238,0.003987418363503266,0.02567787092393203,0.016160121446772834,0.0056906270091852465,0.0123931269791226,0.008125183977060791,0.0038672168836743925,0.014136348267650421,0.012002376769410593,0.005360004794214802,0.00814519030406586,0.007584141032530926,0.004849053104673917,0.009938509169005584,0.006912920705078921,0.0057006574275149085,0.004899096171431567,0.005850895647096363,0.0049191570080908895,0.02222143782901077,0.018815075058465358,0.007243488404812965,0.0059510908055023185,0.006772603873354326,0.004798955528262014,0.015559005017155658,0.019225831589600288,0.008125183977060791,0.006011218800243883,0.008616074829942356,0.007473969971031711,0.007193445338055318,0.006782634291683987,0.004217845420067758,0.004418235736879665,0.008335550196965962,0.00981830768917671,0.00814519030406586,0.005670566172525925,0.004137711098321124,0.004828992268014596,0.006602304811531399,0.007443878716042728,0.005600462269108953,0.0041076743585685424,0.005189651222737622,0.0059510908055023185,0.004738827527938302,0.0037870825619277593,0.003416393188875072,0.0029054414993341863,0.0038872232106794574,0.004638632369532349,0.004448272476632247,0.0036267594087802395,0.002875350244345204,0.0037670217252684375,0.0037068937305268722,0.0021740386619042195,0.0022742338147280277,0.002915417408009594,0.0022141058199864625,0.0030757405611571143,0.0037770521435980986,0.001643080645358269,0.002113965176816908,0.0023643985548043216,0.001482757492210749,0.0018735077019227581,0.0020237459215042162,0.0011521352772403048,0.0020838739218279256,0.0027150816064340877,0.001352525594052212,0.001532855068622653,0.0012122632775640168,0.0010820313794054797,0.00125233043564626,0.0012122632775640168,0.0011220985374877227,0.0013224888487174857,0.0008916714809232337,0.0012323241142233388,0.001472727073881088,0.0008615802259342507,0.0009017018992528946,0.0007313483277757135,0.0006612444243587414,0.0007113420063527924,0.0008615802259342507,0.0009417690629172815,0.0007814459041876177,0.0007313483277757135,0.0007814459041876177,0.0008115371591766005,0.0006812507513638096,0.0005811101026121113,0.0005209821078705464,0.0006612444243587414,0.0006311531693697585,0.0006411835876994194,0.0010319337974114286,0.0004207869494645913,0.00041075653113493033,0.0007514091644350354,0.00039075020971200914,0.00041075653113493033,0.0007013115880231314,0.000300585469635715,0.0005910860112875154,0.0011220985374877227,0.0003606589547230263,0.0005009212712112245,0.0004207869494645913,0.000250487893223811,0.0005209821078705464,0.0004908908528815636,0.00027049421464673217,0.0005710796898645943,0.00034065263330010516,0.0005209821078705464,0.0006211772662764982,0.00021036621990516723,0.00027049421464673217,0.0004708845314586423,0.00022039663823482817,0.00035062853639336534,0.00039075020971200914,0.0003306222149704442,0.0003807197913823482,0.00023042705656448913,0.00034065263330010516,0.00022039663823482817,0.00017029905624078024,0.00031056137831112233,0.00027049421464673217,0.00016032315314752003,0.000300585469635715,0.00022039663823482817,0.00031056137831112233,0.000250487893223811,0.00014026231648819814,0.00023042705656448913,0.0001302318981585372,0.0001302318981585372,0.0002604637963170712,0.0001502927348178591,0.00007010390341697226,0.0002604637963170712,0.0001302318981585372,0.00011022557673561605,0.00017029905624078024,0.00007010390341697226,0.00009016474007629415,0.0001302318981585372,0.000060127994741564946,0.00011022557673561605,0.00011022557673561605,0.000050097576411904,0.00009016474007629415,0.00009016474007629415,0.000040067158082243043,0.00008013432174663319,0.00007010390341697226,0.000050097576411904,0.00007010390341697226,0.000040067158082243043,0.000030036739752582096,0.000060127994741564946,0.000030036739752582096,0.000020060836659321896,0.000060127994741564946,0.000030036739752582096,0.000020060836659321896,0.000060127994741564946,0.000020060836659321896,0.000020060836659321896,0.000020060836659321896,0.000020060836659321896,0.000030036739752582096,0.000030036739752582096,0.000010030418329660948,0.000030036739752582096,0.000020060836659321896,0.000010030418329660948,0.000030036739752582096,0.000010030418329660948,0.000020060836659321896,0.000020060836659321896,0.000020060836659321896,0.000010030418329660948,0.000020060836659321896,0.000010030418329660948,0.000010030418329660948,0.000010030418329660948,0.000010030418329660948,0.000010030418329660948,0.000010030418329660948,0.000010030418329660948,0,0.000010030418329660948,0,0.000010030418329660948,0.000010030418329660948,0.000010030418329660948,0,0.000010030418329660948,0,0,0.000010030418329660948,0,0,0,0.000010030418329660948,0,0,0.000010030418329660948,0],
    'sum': 1.0018780317687774
  },
  'PW': {
    'data': [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.004,0,0,0,0,0,0,0,0,0,0.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.002,0,0,0,0.002,0.002,0.004,0.004,0.004,0.002,0,0.002,0.004,0,0,0,0,0,0,0.01,0.002,0,0.002,0.01,0,0,0.116,0.002,0,0.032,0.002,0.034,0,0.002,0.038,0.014,0.092,0.006,0.008,0.084,0.008,0.072,0.01,0.006,0.076,0.03,0.062,0.018,0.02,0.078,0.024,0.036,0.07,0.03,0.114,0.046,0.016,0.112,0.04,0.048,0.078,0.05,0.078,0.076,0.114,0.052,0.078,0.164,0.06,0.072,0.104,0.074,0.024,0.168,0.064,0.052,0.148,0.114,0.05,0.116,0.148,0.028,0.196,0.254,0.058,0.056,0.13,0.208,0.082,0.244,0.078,0.082,0.284,0.256,0.036,0.06,0.326,0.08,0.424,0.138,0.162,0.02,0.784,0.254,0.044,0.138,0.32,0.16,0.08,0.432,0.022,0.056,0.574,0.456,0.034,0.122,0.692,0.15,1.692,0.124,0.024,0.108,5.01,0.544,0.034,0.1,0.042,0.204,0.084,0.07,0.014,0.65,0.116,0.184,0.09,0.236,0.086,1.216,0.572,0.032,0.104,0.322,0.376,0.036,0.026,0.576,0.184,1.782,0.254,0.032,0.046,12.222,3.88,0.234,0.026,0.1,0.112,0.178,0.208,0.03,0.126,0.042,0.706,0.404,0.068,0.014,9.59,8.378,1.374,0.792,0.784,0.172,0.388,0.878,0.386,0.034,0.116,0.908,1.818,0.592,0.112,0.228,0.198,0.328,2.33,4.274,1.398,0.138,0.332,0.242,0.264,1.036,0.802,0.06,0.242,0.702,1.786,1.316,0.076,0.21,0.45,0.502,1.33,1.456,0.106,0.284,0.758,0.198,0.36,0.236,0.056,0.212,0.392,0.54,0.106,0.14,0.304,0.098,0.43,1.02,0.05,0.212,0.984,0.064,0.076,0.468,0.03,0.038,0.206,0.04,0.118,0.196,0.112,0.192,0.064,0.058,0.132,0.022,0.028,0.076,0.038,0.088,0.114,0.018,0.034,0.036,0.048,0.018,0.02,0.016,0.026,0.044,0.066,0.01,0.012,0.022,0.002,0.03,0.012,0.008,0.06,0.032,0.004,0.056,0.006,0.004,0.03,0,0.022,0.032,0.016,0.032,0.008,0.006,0.038,0.004,0.004,0.014,0.018,0.012,0.046,0.012,0.006,0.026,0.024,0.006,0.01,0.012,0.014,0.03,0.044,0.002,0.002,0.016,0.004,0,0.002,0.002,0,0.082,0,0.002,0.002,0.008,0.002,0.006,0,0.004,0,0,0.008,0,0,0.002,0.002,0,0,0,0,0,0,0.002,0,0,0.004,0,0,0,0,0,0,0,0,0,0,0,0.002,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    'sum': 99.99999999999996
  }
}

var log = function(x) {
  if (x == 0) {
    return undefined;
  }
  return Math.log(x);
}

var all_source = 'All models combined';

var ev_source_map = {};
var ev_sources = [];
for (var i = 0; i < poll_headers.length; i++) {
  if (evs[poll_headers[i]]) {
    ev_sources.push(poll_headers[i]);
    ev_source_map[poll_headers[i]] = i;
  } 
}
ev_sources.unshift(all_source);
evs[all_source] = {};

for (var k = 1; k < ev_sources.length; k++) {
  source = ev_sources[k];
  var total_sum = 0.0;
  for (var i = 0; i <= 538; i++) {
    total_sum += evs[source]['data'][i];
  }
  evs[source]['sum'] = total_sum;
};

for (var k = 0; k < ev_sources.length; k++) {
  source = ev_sources[k];
  evs[source]['norm'] = [];
  evs[source]['log'] = [];
  var norm_max = 0.0;
  var log_min = null;
  var log_max = null;
  for (var i = 0; i <= 538; i++) {
    var normed;
    if (source == all_source) {
      var norm_sum = 0.0;
      for (var j = 1; j < ev_sources.length; j++) {
        norm_sum += evs[ev_sources[j]]['data'][i] / evs[ev_sources[j]]['sum'];
      }
      normed = norm_sum / (ev_sources.length - 1);
    } else {
      normed = evs[source]['data'][i] / evs[source]['sum'];
    }
    if (normed > norm_max) {
      norm_max = normed;
    }
    var logged = log(normed);
    if (logged !== undefined && (log_min === null || logged < log_min)) {
      log_min = logged;
    }
    if (logged !== undefined && (log_max === null || logged > log_max)) {
      log_max = logged;
    }
    evs[source]['norm'].push(normed);
    evs[source]['log'].push(logged);
  }
  evs[source]['norm_max'] = norm_max;
  evs[source]['log_norm_min'] = log_min;
  evs[source]['log_norm_max'] = log_max;
  var cum_sums = [];
  var log_cum_sums = [];
  var cum_sum = 0.0;
  log_min = null;
  log_max = null;
  for (var i = 0; i <= 268; i++) {
    cum_sum += evs[source]['norm'][i];
    var log_sum = log(cum_sum);
    if (log_sum !== undefined && (log_min === null || log_sum < log_min)) {
      log_min = log_sum;
    }
    cum_sums.push(cum_sum);
    log_cum_sums.push(log_sum);
  }
  cum_sum = evs[source]['norm'][269];
  var log_sum = log(cum_sum);
  if (log_sum !== undefined && (log_min === null || log_sum < log_min)) {
    log_min = log_sum;
  }
  cum_sums.push(cum_sum);
  log_cum_sums.push(log_sum);
  var rev_cum_sums = [];
  var rev_log_cum_sums = [];
  cum_sum = 0.0;
  for (var i = 538; i >= 270; i--) {
    cum_sum += evs[source]['norm'][i];
    var log_sum = log(cum_sum);
    if (log_sum !== undefined && (log_min === null || log_sum < log_min)) {
      log_min = log_sum;
    }
    rev_cum_sums.push(cum_sum);
    rev_log_cum_sums.push(log_sum);
  }
  for (var i = rev_cum_sums.length - 1; i >= 0; i--) {
    cum_sums.push(rev_cum_sums[i]);
    log_cum_sums.push(rev_log_cum_sums[i]);
  }
  evs[source]['cum_sum'] = cum_sums;
  evs[source]['log_cum_sum'] = log_cum_sums;
  evs[source]['cum_max'] = Math.max(cum_sums[268], cum_sums[269], cum_sums[270]);
  evs[source]['log_cum_max'] = log(evs[source]['cum_max']);
  evs[source]['log_cum_min'] = log_min;
}

var ev_svg = document.createElementNS(svg_spec, 'svg');
var ev_w = 800;
var text_offset = 90;
var ev_h = 400;
var vert_text_offset = 50;
var ev_bar = 1; // what percentage of each hist bar to fill
var log_disp = 0.01;

ev_svg.setAttribute('width', ev_w);
ev_svg.setAttribute('height', ev_h);

var rect_transition = null;

var rect_pending_transitions = [];
var data_map = {};

function resetHeightTransition() {
  rect_pending_transitions = [];
  data_map = {};
}

function collectHeightTransition(rect, height, datum) {
  data_map[rect_pending_transitions.length] = datum;
  rect_pending_transitions.push([rect, height]);
}

function getHeight(perc) {
  return perc * (ev_h - vert_text_offset) * 0.9;
}

function getY(height) {
  return ev_h - vert_text_offset - height - 15;
}

function invY(y) {
  return (ev_h - vert_text_offset - y - 15) / ev_h / 0.9;
}

var cumulative_checked = true;

function startHeightTransition() {
  var current_heights = [];
  for (var i = 0; i < rect_pending_transitions.length; i++) {
    current_heights.push(parseFloat(rect_pending_transitions[i][0].getAttribute('height')));
  }
  var percent = 0.0;
  var reset = function() {
    clearTimeout(rect_transition);
    rect_transition = null;
  }
  if (rect_transition) {
    reset();
  }
  var transition = function() {
    percent += 0.1;
    for (var i = 0; i < rect_pending_transitions.length; i++) {
      var rect = rect_pending_transitions[i][0];
      var destHeight = getHeight(rect_pending_transitions[i][1]);
      var new_height = current_heights[i] + percent * (destHeight - current_heights[i]);
      if (new_height < 0) {
        new_height = 0;
      }
      rect.setAttribute('height', new_height);
      rect.setAttribute('y', getY(new_height));
    }
    if (percent < 1) {
      rect_transition = setTimeout(transition, 10);
    } else {
      for (var i = 0; i < rect_pending_transitions.length; i++) {
        var rect = rect_pending_transitions[i][0];
        var new_height = getHeight(rect_pending_transitions[i][1]);
        rect.setAttribute('height', new_height);
        rect.setAttribute('y', getY(new_height));
      }
      reset();
    }
  };
  transition();
};


function adjust(rect, height) {
  var new_height = getHeight(height);
  rect.setAttribute('y', getY(new_height));
  rect.setAttribute('height', new_height);
}

var getWidth = function() {
  return ev_w - text_offset;
}

var placeX = function(x) {
  return (x + ev_bar / 2) / 539.0 * getWidth() + text_offset;
}

var ev_tooltip = document.getElementById('ev_tooltip');

var ev_table = document.getElementById('table2');

function formatNum(x) {
  var times = 0;
  if (x <= 0) {
    return '0%';
  }
  x *= 100;
  if (x < 1) {
    var zeros = 0;
    while (x < 1) {
      x *= 10;
      zeros++;
    }
    var num = x.toString().charAt(0);
    var result = '0.';
    while (zeros > 1) {
      zeros--;
      result += '0';
    }
    return result + num + '%';
  }
  var base = parseInt(Math.floor(x));
  var perc = x - base;
  var num = (perc * 10).toString().charAt(0);
  return base.toString() + '.' + num + '%';
}

function getXColor(x) {
  var color = (x - 269) / 270.0 * 9.0;
  if (color < 0) {
    color -= 18.0;
  } else if (color > 0) {
    color += 18.0;
  }
  return majorityVotes.getColor(color).getCss();
}

var ev_tooltip_populated_with = null;

function populateEvTooltip(x) {
  ev_tooltip_populated_with = x;
  while (ev_tooltip.firstChild) {
    ev_tooltip.removeChild(ev_tooltip.firstChild);
  }
  var line_1 = document.createElement('div');
  var line_2 = document.createElement('div');
  var line_3 = document.createElement('div');

  var candidate = 'Tie,';
  var votes = 269;
  if (x >= 270) {
    candidate = 'Clinton';
    votes = x;
  } else if (x <= 268) {
    candidate = 'Trump';
    votes = 538 - x;
  }

  line_1.textContent = formatNum(data_map[x]);
  line_1.className = 'chance';
  var candidate_elem = document.createElement('span');
  candidate_elem.className = 'candidate';
  candidate_elem.textContent = candidate;
  candidate_elem.style.color = getXColor(x);
  line_2.appendChild(candidate_elem);
  var wins_elem = document.createElement('span');
  wins_elem.textContent = (votes == 269 ? 'both win ' : 'wins ') + votes + (cumulative_checked && votes != 269 ? ' or' : '');
  line_2.appendChild(wins_elem);
  line_3.textContent = (cumulative_checked && votes != 269 ? 'more ' : '') + 'electoral vote' + (votes != 1 ? 's' : '');

  ev_tooltip.appendChild(line_1);

  if (votes == 306 && candidate == 'Trump') {
    var line_actual = document.createElement('div');
    line_actual.className = 'actual-outcome';
    line_actual.textContent = 'Actual outcome';
    ev_tooltip.appendChild(line_actual);
  }
  ev_tooltip.appendChild(line_2);
  ev_tooltip.appendChild(line_3);

  if (current_checked['ev'] == all_source) {
    var hr = document.createElement('hr');
    var table = document.createElement('div');
    table.className = 'ev_table';
    for (var i = 1; i < ev_sources.length; i++) {
      var row = document.createElement('div');
      row.className = 'ev_row';
      var label = document.createElement('div');
      label.className = 'ev_cell ev_source';
      var source = ev_sources[i];
      label.textContent = source;
      var ev_perc = document.createElement('div');
      ev_perc.className = 'ev_cell ev_perc';
      ev_perc.textContent = formatNum(evs[source][(cumulative_checked ? 'cum_sum' : 'norm')][x]);
      row.appendChild(label);
      row.appendChild(ev_perc);
      table.appendChild(row);
    }
    ev_tooltip.appendChild(hr);
    ev_tooltip.appendChild(table);
  }
}

var transparent_bars = {};

function resetOutcomeTooltip() {
  transparent_bars[232].setAttribute('opacity', '0');
  ev_tooltip.style.position = 'fixed';
  ev_tooltip.style.opacity = 0.8;
  ev_tooltip.style.visibility = 'visible';
}

function showActualOutcomeTooltip() {
  populateEvTooltip(232);
  ev_tooltip.style.visibility = 'visible';
  ev_tooltip.style.position = 'absolute';
  ev_tooltip.style.top = ev_table.getBoundingClientRect().top + window.pageYOffset + 94;
  ev_tooltip.style.left = ev_table.getBoundingClientRect().left + window.pageXOffset + 147;
  ev_tooltip.style.opacity = 0.8;
  transparent_bars[232].setAttribute('opacity', '0.5');
}

function createTransparentBar(x) {
  var rect = document.createElementNS(svg_spec, 'rect');
  rect.setAttribute('data-i', x);
  rect.setAttribute('x', placeX(x));
  rect.setAttribute('width', ev_bar / 539.0 * getWidth());
  rect.setAttribute('height', getY(getHeight(0)));
  rect.setAttribute('y', 0);
  rect.setAttribute('fill', 'Gray');
  rect.setAttribute('opacity', 0);
  rect.onmouseover = function(e) {
    resetOutcomeTooltip();
    populateEvTooltip(x);
    rect.setAttribute('opacity', '0.5');
  };
  rect.onmouseout = function(e) {
    rect.setAttribute('opacity', '0');
    showActualOutcomeTooltip();
  }
  rect.onmousemove = function(e) {
    position(e.clientX, e.clientY, ev_tooltip, ev_svg);
  }
  transparent_bars[x] = rect;
  return rect;
}

function createBar(x, height, color) {
  var rect = document.createElementNS(svg_spec, 'rect');
  rect.setAttribute('data-i', x);
  rect.setAttribute('x', placeX(x));
  rect.setAttribute('width', ev_bar / 539.0 * getWidth());
  rect.setAttribute('fill', getXColor(x));
  adjust(rect, height);
  return rect;
}

var horizAxes = document.createElementNS(svg_spec, 'g');

function createAxis(y) {
  var line = document.createElementNS(svg_spec, 'line');
  line.setAttribute('x1', text_offset);
  line.setAttribute('x2', ev_w);
  line.setAttribute('y1', getY(getHeight(y)));
  line.setAttribute('y2', getY(getHeight(y)));
  line.setAttribute('stroke', 'Gray');
  line.setAttribute('stroke-opacity', 0.3);
  line.setAttribute('stroke-width', '1px');
  line.style.pointerEvents = 'none';
  horizAxes.appendChild(line);
  return line;
}

function createAxisText(y, content) {
  var text = document.createElementNS(svg_spec, 'text');
  text.setAttribute('x', text_offset - 5);
  text.setAttribute('y', getY(getHeight(y)));
  text.setAttribute('text-anchor', 'end');
  text.setAttribute('dominant-baseline', 'middle');
  text.setAttribute('font-family', 'Arial, sans-serif');
  text.textContent = content;
  horizAxes.appendChild(text);
  return text;
}

function createXAxisText(x, content) {
  var text = document.createElementNS(svg_spec, 'text');
  text.setAttribute('x', placeX(x));
  text.setAttribute('y', getY(0) + 8);
  text.setAttribute('text-anchor', 'middle');
  text.setAttribute('font-size', '16px');
  text.setAttribute('dominant-baseline', 'hanging');
  text.setAttribute('font-family', 'Arial, sans-serif');
  text.setAttribute('fill', getXColor(x));
  text.textContent = content;
  text.onmouseover = function(e) {
    resetOutcomeTooltip();
    ev_tooltip.style.visibility = 'visible';
    populateEvTooltip(x);
    transparent_bars[x].setAttribute('opacity', '0.5');
  };
  text.onmouseout = function(e) {
    transparent_bars[x].setAttribute('opacity', '0');
    showActualOutcomeTooltip();
  }
  text.onmousemove = function(e) {
    position(e.clientX, e.clientY, ev_tooltip, ev_svg);
  }
  return text;
}

function createGridLine(x1, x2, y1, y2) {
  var line = document.createElementNS(svg_spec, 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('x2', x2);
  line.setAttribute('y1', y1);
  line.setAttribute('y2', y2);
  line.setAttribute('stroke-width', '1');
  line.setAttribute('stroke', 'gray');
  return line;
}

function createRectPanes(x, y, width, height, color) {
  // var rects = [];
  // for (var i = 1; i <= 27; i++) {
  //   var rect = document.createElementNS(svg_spec, 'rect');
  //   rect.setAttribute('x', x + width / 27 * (i - 1));
  //   rect.setAttribute('y', y);
  //   rect.setAttribute('width', width / 27);
  //   rect.setAttribute('height', height);
  //   if (color < 0) {
  //     rect.setAttribute('fill', majorityVotes.getColor(-28 - color / 27 * i).getCss());
  //   } else {
  //     rect.setAttribute('fill', majorityVotes.getColor(color / 27 * i).getCss());
  //   }
  //   rect.setAttribute('opacity', 0.1);
  //   rects.push(rect);
  // }
  // return rects;
  return [];
}

function appendChildren(elem, children) {
  for (var i = 0; i < children.length; i++) {
    elem.appendChild(children[i]);
  }
}

ev_svg.appendChild(createXAxisText(38, '500'));
ev_svg.appendChild(createXAxisText(138, '400'));
ev_svg.appendChild(createXAxisText(238, '300'));
ev_svg.appendChild(createXAxisText(269, '269'));
ev_svg.appendChild(createXAxisText(300, '300'));
ev_svg.appendChild(createXAxisText(400, '400'));
ev_svg.appendChild(createXAxisText(500, '500'));

ev_svg.appendChild(createGridLine(text_offset, ev_w, getY(0), getY(0)));
ev_svg.appendChild(createGridLine(text_offset, text_offset, getY(0), 0));

appendChildren(ev_svg, createRectPanes(placeX(0), 0, placeX(269) - placeX(0), getY(getHeight(0)), -27));
appendChildren(ev_svg, createRectPanes(placeX(270), 0, placeX(538) - placeX(270), getY(getHeight(0)), 27));

var axes = []; // top-to-bottom
var textAxes = [];
var axesTimeout = null;

var adjustAxes = function(destAxes, destTexts) {
  var removeAxes = [];
  var addAxes = [];
  var axesTransitions = [];
  if (axes.length > destAxes.length) {
    for (var i = axes.length - destAxes.length; i > 0; i--) {
      // Add in transitions that end off-screen
      destAxes.push(-.1);
      destTexts.push('');
    }
  } else if (destAxes.length > axes.length) {
    for (var i = destAxes.length - axes.length; i > 0; i--) {
      axes.push(createAxis(0));
      textAxes.push(createAxisText(0, ''));
    }
  }
  for (var i = 0; i < Math.min(axes.length, destAxes.length); i++) {
    textAxes[i].textContent = destTexts[i];
    axesTransitions.push([axes[i], parseFloat(axes[i].getAttribute('y1')), destAxes[i], textAxes[i]]);
  }
  var percent = 0.0;
  var done = false;
  var reset = function() {
    if (axesTimeout != null) {
      clearTimeout(axesTimeout);
      axesTimeout = null;
    }
  }
  reset();
  var adjustElem = function(elem, textElem, y, dest_y, perc) {
    var new_y = y + (dest_y - y) * perc;
    var inv = invY(new_y);
    if (inv < 0 || inv > 1) {
      var idx = axes.indexOf(elem);
      if (idx != -1) {
        elem.parentNode.removeChild(elem);
        textElem.parentNode.removeChild(textElem);
        axes.splice(idx, 1);
        textAxes.splice(idx, 1);
      }
    } else {
      elem.setAttribute('y1', new_y);
      elem.setAttribute('y2', new_y);
      textElem.setAttribute('y', new_y);
    }
  }
  var transition = function() {
    percent += 0.1;
    if (percent >= 1.0) {
      percent = 1;
      done = true;
    }
    for (var i = 0; i < axesTransitions.length; i++) {
      var elem = axesTransitions[i][0];
      var origY = axesTransitions[i][1];
      var destY = getY(getHeight(axesTransitions[i][2]));
      var textElem = axesTransitions[i][3];
      adjustElem(elem, textElem, origY, destY, percent);
    }
    if (!done) {
      axesTimeout = setTimeout(transition, 10);
    } else {
      reset();
    }
  };
  transition();
}

var ev_bars = {};

var adjustEV = function(source, cumulative, logged) {
  setEVSource(source);
  resetHeightTransition();
  var min, max;
  if (logged) {
    min = evs[source][(cumulative ? 'log_cum_min' : 'log_norm_min')];
    max = evs[source][(cumulative ? 'log_cum_max' : 'log_norm_max')];
  } else {
    min = evs[source][(cumulative ? 'cum_min' : 'norm_min')] | 0;
    max = evs[source][(cumulative ? 'cum_max' : 'norm_max')];
  }
  var destAxes = [];
  var destTexts = [];
  var i = 1;
  var j = 0;
  var placePoint = function(p) {
    var scaled = (p - min) / (max - min);
    if (logged) {
      return scaled * 0.98 + 0.02;
    } else {
      return scaled;
    }
  }
  var base10 = function(j) {
    j += 2; // make into percent.
    if (j >= 0) {
      var result = '1';
      while (j > 0) {
        result += '0';
        j--;
      }
      return result + '%';
    } else {
      var result = '0.';
      while (j < -1) {
        result += '0';
        j++;
      }
      return result + '1%';
    }
  }
  if (!logged) {
    var formatThousands = function(i) {
      var stripZeros = function(str) {
        while (str.charAt(str.length - 1) == '0') {
          str = str.substring(0, str.length - 1);
        }
        return str;
      }
      var s = '' + i;
      if (s.length == 1) {
        return '0.' + s + '%';
      } else {
        var latter = stripZeros(s.substring(s.length - 1));
        return s.substring(0, s.length - 1) + (latter.length > 0 ? '.' + latter : '') + '%';
      }
    }
    var divisions = [1, 2, 5, 10, 20, 25, 50, 100, 200]; // out of 1000
    var best = null;
    var best_div = null;
    for (var i = 0; i < divisions.length; i++) {
      var splits = Math.floor(max * 1000 / divisions[i]);
      var test = Math.abs(splits - 0.5 - 5);
      if (best_div == null || test < best_div) {
        best_div = test;
        best = divisions[i];
      }
    }
    for (var i = best; i < max * 1000; i += best) {
      destAxes.splice(0, 0, i / 1000 / max);
      destTexts.splice(0, 0, formatThousands(i));
    }
  } else {
    var insertIfInBounds = function(i, j) {
      if (log(i) >= min && log(i) <= max) {
        destAxes.push(placePoint(log(i)));
        destTexts.push(base10(j));
      }
    }
    while (log(i) >= min) {
      insertIfInBounds(i, j);
      i /= 10;
      j--;
    }
  }
  if (axes.length == 0) {
    for (var i = 0; i < destAxes.length; i++) {
      axes.push(createAxis(destAxes[i]));
      textAxes.push(createAxisText(destAxes[i], destTexts[i]));
    }
  } else {
    adjustAxes(destAxes, destTexts);
  }
  for (var i = 0; i <= 538; i++) {
    var bar = ev_bars[i];
    var point, datum;
    if (logged) {
      datum = evs[source][(cumulative ? 'log_cum_sum' : 'log')][i];
      if (datum === undefined) {
        point = 0;
      } else {
        point = placePoint(datum);
      }
      datum = evs[source][(cumulative ? 'cum_sum' : 'norm')][i];
    } else {
      datum = evs[source][(cumulative ? 'cum_sum' : 'norm')][i];
      point = datum / evs[source][(cumulative ? 'cum_max' : 'norm_max')];
    }
    collectHeightTransition(bar, point, datum);
  }
  startHeightTransition();
  if (ev_tooltip_populated_with != null) {
    populateEvTooltip(ev_tooltip_populated_with);
  }
}

for (var i = 0; i <= 538; i++) {
  var color = (i <= 268) ? 'Red' : ((i >= 270) ? 'Blue' : 'Gray');
  var rect = createBar(i, 0, color);
  ev_bars[i] = rect;
  ev_svg.appendChild(rect);
}

for (var i = 0; i <= 538; i++) {
  ev_svg.appendChild(createTransparentBar(i));
}

ev_svg.appendChild(horizAxes);

var ev_buttons = {};
var buttonContainer = document.createElement('div');

var EVsourceContainer = document.createElement('div');
EVsourceContainer.className = 'sources';
function setEVSource(j) {
  var i = ev_source_map[j];
  while (EVsourceContainer.firstChild) {
    EVsourceContainer.removeChild(EVsourceContainer.firstChild);
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
  if (i != -1 && i !== undefined) {
    makeLinkElem(i);
  } else {
    for (var k = 1; k < ev_sources.length; k++) {
      i = ev_source_map[ev_sources[k]];
      makeLinkElem(i);
      if (k != ev_sources.length - 1) {
        sourceElement.appendChild(document.createTextNode(', '));
      }
    }
  }
  EVsourceContainer.appendChild(sourceElement);
}

var log_checked = false;
function updateEV() {
  adjustEV(current_checked['ev'], cumulative_checked, log_checked);
}

for (var i = 0; i < ev_sources.length; i++) {
  var source = ev_sources[i];
  var button = createButton(source, updateEV, 'ev', '', ev_buttons);
  if (i == 0) {
    button.querySelector('input').checked = true;
  }
  buttonContainer.appendChild(button);
}

current_checked['ev'] = ev_sources[0];
updateEV();

var cumulativeButton = createButton('Show cumulative sum', function() {
  cumulative_checked = cumulativeButton.querySelector('input').checked;
  updateEV();
}, undefined, 'normal_check', ev_buttons);
cumulativeButton.querySelector('input').checked = true;
buttonContainer.appendChild(cumulativeButton);
var logButton = createButton('Show on log scale', function() {
  log_checked = logButton.querySelector('input').checked;
  updateEV();
}, undefined, 'normal_check', ev_buttons);
buttonContainer.appendChild(logButton);

var ev_svg_cell = document.getElementById('ev_svg');
ev_svg_cell.appendChild(ev_svg);
ev_svg_cell.appendChild(buttonContainer);
ev_svg_cell.appendChild(EVsourceContainer);

window.onload = function () { showActualOutcomeTooltip(); }
