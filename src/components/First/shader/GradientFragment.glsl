uniform float uTime;
uniform sampler2D uDisplace;

varying vec2 vUv;

vec4 rgb(float r, float g, float b, float alpha) 
{
    return vec4(r / 255.0, g /255.0, b / 255.0, alpha);
}

void main()
{ 
    vec4 disColor = texture2D(uDisplace, vUv * 0.1 + uTime * 0.04);
    
    
    vec4 tl = rgb(251.0, 41.0, 212.0, 1.0);
    vec4 tr = rgb(0.0, 255.0, 224.0, 1.0);
    vec4 bl = rgb(250.0, 255.0, 0.0, 1.0);
    vec4 br = rgb(231.0, 244.0, 255.0, 1.0);
   
   float displaceX = mix(-0.5, 0.5, disColor.b);
   float displaceY = mix(-0.5, 0.5, disColor.r);
  
    vec4 color = mix(
        mix(tl, tr, vUv.x + displaceX),
        mix(bl, br, vUv.x - displaceX),
        vUv.y + displaceY
    );

    gl_FragColor = color ;
}