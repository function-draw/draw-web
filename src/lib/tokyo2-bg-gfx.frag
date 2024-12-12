uniform float globalTime;
uniform vec2 resolution;
uniform float scroll;
uniform vec2 mousePos;

vec3 hsv2rgb(vec3 c)
{
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

vec3 rgb2hsv(vec3 c)
{
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-5;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

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

mat2 rot(float r)
{
    return mat2(cos(r), -sin(r), sin(r), cos(r));
}

float saturate(float t)
{
    return clamp(t, 0.0, 1.0);
}

vec4 sampleGradient(vec4[8] colorArray, int colorLength, float time)
{
    vec3 color = colorArray[0].rgb;
            
    for (int i = 1; i < 8; i++)
    {
        float colorPos = saturate((time - colorArray[i - 1].w) / (colorArray[i].w - colorArray[i - 1].w))
            * step(float(i), float(colorLength-1));
                    
        color = mix(color, colorArray[i].rgb, mix(colorPos, step(0.01, colorPos), 0.0));
    }
                
    return vec4(color, 1.0);
}

vec3 oklab_mix( vec3 colA, vec3 colB, float h )
{
  // https://bottosson.github.io/posts/oklab
  const mat3 kCONEtoLMS = mat3(                
        0.4121656120,  0.2118591070,  0.0883097947,
        0.5362752080,  0.6807189584,  0.2818474174,
        0.0514575653,  0.1074065790,  0.6302613616);
  const mat3 kLMStoCONE = mat3(
        4.0767245293, -1.2681437731, -0.0041119885,
      -3.3072168827,  2.6093323231, -0.7034763098,
        0.2307590544, -0.3411344290,  1.7068625689);
                  
  // rgb to cone (arg of pow can't be negative)
  vec3 lmsA = pow( kCONEtoLMS*colA, vec3(1.0/3.0) );
  vec3 lmsB = pow( kCONEtoLMS*colB, vec3(1.0/3.0) );
  // lerp
  vec3 lms = mix( lmsA, lmsB, h );
  // gain in the middle (no oaklab anymore, but looks better?)
  // lms *= 1.0+0.2*h*(1.0-h);
  // cone to rgb
  return kLMStoCONE*(lms*lms*lms);
}

vec4 voronoi(vec2 uv) // xyz:rand, z:d
{
    vec2 f = fract(uv * 8.0);
    vec2 i = floor(uv * 8.0);
    float d = 1.0;
    vec3 r;
    for (float x = -1.0; x <= 1.0; x += 1.0)
    {
        for (float y = - 1.0; y <= 1.0; y += 1.0)
        {
            vec3 rand = pcg3df(vec3(i + vec2(x, y), 0.0));
            
            vec2 diff = (0.5 * rand.xy) + vec2(x, y) - f;
            
            if (length(diff) < d)
            {
                d = length(diff);
                r = rand;
            }
            d = min(d, length(diff));
        }
    }
    
    return vec4(r, d);
}

void main() 
{
  vec2 uv = gl_FragCoord.xy/resolution.xy;
  vec2 uv2 = gl_FragCoord.xy/resolution.xy;
      
  uv.y *= resolution.y/resolution.x;
  
  vec2 mp = mousePos - 0.5;
  uv += mp * 0.035;

  uv -= 0.5;
  uv *= 1.0 + 5.0 * pow(length(uv), 2.5);
  uv += 0.5;
  
  uv.y -= scroll * 0.0015;
              
  uv += cyclic(vec3(uv * 3.0, globalTime * 0.2 + scroll * 0.0125), 3.0).xz * 0.125;

  vec4 v = voronoi(uv);

  vec2 n = normalize(vec2(
      voronoi(uv + vec2(0.000001, 0.0)).w - voronoi(uv + vec2(-0.000001, 0.0)).w,
      voronoi(uv + vec2(0.0, 0.000001)).w - voronoi(uv + vec2(0.0, -0.000001)).w
  ));


  n *= rot(acos(-1.0) * v.x);

  float s = (sin(globalTime + n.x * 10.0 * (0.2 + v.y * 0.8)) + 1.0) * 0.5;
          
  vec3 col;

  col = oklab_mix(vec3(0.85), vec3(0.025), s);

  vec4[8] grad;
  grad[0] = vec4(0.0);
  grad[1] = vec4(vec3(143.0/255.0, 101.0/255.0, 235.0/255.0), 0.25);
  grad[2] = vec4(vec3(235.0/255.0, 226.0/255.0, 101.0/255.0), 0.75);
  grad[3] = vec4(0.0, 0.0, 0.0, 1.0);
  col = v.x < 0.75 ? col : sampleGradient(grad, 4, s).rgb;

  vec4[8] grad2;
  grad2[0] = vec4(0.0);
  grad2[1] = vec4(vec3(235.0/255.0, 131.0/255.0, 101.0/255.0), 0.25);
  grad2[2] = vec4(vec3(101.0/255.0, 235.0/255.0, 195.0/255.0), 0.75);
  grad2[3] = vec4(0.0, 0.0, 0.0, 1.0);
  col = v.x < 0.85 ? col : sampleGradient(grad2, 4, s).rgb;

  vec4[8] grad3;
  grad3[0] = vec4(1.0, 0.0, 0.0, 0.0);
  grad3[1] = vec4(vec3(1.0, 1.0, 0.0), 0.25);
  grad3[2] = vec4(vec3(0.0, 1.0, 1.0), 0.5);
  grad3[3] = vec4(vec3(1.0, 0.0, 1.0), 0.75);
  grad3[4] = vec4(1.0, 0.0, 0.0, 1.0);
  vec2 ruv = uv2 *rot(acos(-1.0)*v.z);
  vec3 rcol = sampleGradient(grad3, 5, fract(ruv.x*10.0)).rgb;
  rcol = rgb2hsv(rcol);
  rcol.x += globalTime + v.z;
  col = v.x < 0.95 ? col : hsv2rgb(rcol);

  vec2 cuv = fract(uv * 20.0);
  col = v.z < 0.85 ? col : vec3(step(0.5, length(cuv.x)*length(cuv.y)+length(1.0-cuv.x)*length(1.0-cuv.y))) * 0.85 + 0.075;
  col = v.x < 0.965 ? col : vec3(0.1, 0.1, 0.1);

  col += step(0.9, pcg3df(vec3(uv2, 3523.434)).x) * 0.05;

  col += (step(length(fract(uv.x*20.0)-0.5), 0.015) + step(length(fract(uv.y*20.0)-0.5), 0.015)) * 0.125;

  col.b = pow(col.b, 0.85);

  col = hsv2rgb(vec3(rgb2hsv(col) + vec3((v.z - 0.5) * 0.15, 0.0, 0.0)));
      
  col *= 0.85;

  gl_FragColor = vec4(col, 1.0);
}