var gl;

function initWebGL(canvas) {
  return canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
}

function start() {
  var canvas = document.getElementById('canvas');
  gl = initWebGL(canvas);

  if (!gl) {
    console.log('You need WebGL to run this');
    return;
  }

  gl.clearColor(0,0,0,1);
  gl.enable(gl.DEPTH_TEST);
  gl.depthFunc(gl.LEQUAL);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}