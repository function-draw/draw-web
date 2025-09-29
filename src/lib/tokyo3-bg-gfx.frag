uniform float globalTime;
uniform vec2 resolution;
uniform float scroll;
uniform vec2 mousePos;

mat3 orthbas( vec3 z ) 
{
  z = normalize( z );
  vec3 up = abs( z.y ) < 0.999 ? vec3( 0, 1, 0 ) : vec3( 0, 0, 1 );
  vec3 x = normalize( cross( up, z ) );
  return mat3( x, cross( z, x ), z );
}

vec3 cyclic( vec3 p, float pump ) 
{
  mat3 b = orthbas( vec3( -3.0, 2.0, -1.0 ) );
  vec4 sum = vec4( 0.0 );

  for( int i = 0; i < 5; i ++ ) {
    p *= b;
    p += sin( p.yzx );
    sum += vec4( cross( cos( p ), sin( p.zxy ) ), 1.0 );
    p *= 2.0;
    sum *= pump;
  }
  
  return sum.xyz / sum.w;
}

vec3 pcg3df(vec3 s) 
{
  uvec3 v = floatBitsToUint(s);

  v = v * 1664525u + 1013904223u;

  v.x += v.y*v.z;
  v.y += v.z*v.x;
  v.z += v.x*v.y;

  v ^= v >> 16u;

  v.x += v.y*v.z;
  v.y += v.z*v.x;
  v.z += v.x*v.y;

  return vec3(v) / float(0xffffffffu);
}

float sdSquare(vec2 p)
{
    return abs(p.x+p.y)+abs(p.x-p.y);
}

float easeOutExpo(float x) {
    return x == 1.0 ? 1.0 : 1.0 - pow(2.0, - 10.0 * x);
}

void main()
{
    vec2 p = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        
    float ss = 0.125;
    p *= 1.0 / (1.0 - p.x * sin(globalTime * 0.2) * ss);
    p *= 1.0 / (1.0 - p.y * cos(globalTime * 0.3) * ss);

    p *= 2.0;

    vec2 p2 = p;

    float s = 0.975;
    
    float r = 2.2;
    p = mod(p, 1.0/r) - 0.5/r;
    float l = step(sdSquare(p * vec2(2.0, 20.0)), 0.2);
    l += step(sdSquare(p * vec2(20.0, 2.0)), 0.2);
    l = clamp(l, 0.0, 1.0);
    
    vec3 n = cyclic(vec3(p2 * 2.0, globalTime * 0.25 + scroll * 0.01), 8.0);

    float nn = clamp((1.0-fract(n.x * 3.0)) * n.x, 0.0, 1.0);
    
    nn = floor(nn * (6.0 - 1.0)) / (6.0 - 1.0);
    nn = l * step(-1.0/3.0, n.x * -1.0) + nn;
    
    nn = mix(0.075, 0.925, nn);
    
    vec3 col = vec3(nn);
    col = 0.4 < nn && nn < 0.5 ? vec3(0.65, 0.85, 0.85) : col;

    float size = 4.0;
    vec2 fp = fract(p2*size)-0.5;
    vec2 ip = floor(p2*size)-0.5;

    float t = globalTime * 0.5;

    float rnd = step(pcg3df(vec3(ip, floor(t))).x, 0.1);
    float rndNext = step(pcg3df(vec3(ip, floor(t)+1.0)).x, 0.1);
    rnd = mix(rnd, rndNext, easeOutExpo(fract(t)));


    col = mix(col, 1.0-col, rnd);

    col *= step(length(fp), 0.5);

    gl_FragColor = vec4(col, 1.0);
}