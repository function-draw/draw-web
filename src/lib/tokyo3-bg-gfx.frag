uniform float globalTime;
uniform vec2 resolution;

void main() 
{
  vec2 uv = gl_FragCoord.xy/resolution.xy;
  vec2 uv2 = gl_FragCoord.xy/resolution.xy;
        
  gl_FragColor = vec4(uv, max(sin(globalTime * 0.2), 0.0), 1.0);
}