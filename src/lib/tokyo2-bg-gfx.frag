uniform float globalTime;
uniform vec2 resolution;

void main() 
{
  vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  gl_FragColor = vec4(p, abs(sin(globalTime)), 1.0);
}