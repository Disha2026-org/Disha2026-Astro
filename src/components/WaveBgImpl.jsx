/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

const vertexShader = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;
varying vec2 vUv;

uniform vec2 resolution;
uniform float time;
uniform float drain;

vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0,0.0,1.0,1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0,0.0,1.0,1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0/41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00,g00), dot(g01,g01), dot(g10,g10), dot(g11,g11)));
  g00 *= norm.x; g01 *= norm.y; g10 *= norm.z; g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fade_xy = fade(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  return 2.3 * mix(n_x.x, n_x.y, fade_xy.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  float f = 2.5;
  for (int i = 0; i < 3; i++) {
    v += a * cnoise(p * f);
    f *= 2.0;
    a *= 0.5;
  }
  return v;
}

void main() {
  float aspect = resolution.x / resolution.y;
  vec2 uv = vec2(vUv.x * aspect, vUv.y);
  uv.y += drain * 2.8;
  uv.x += time * 0.015;

  float h = fbm(uv);
  float crest = abs(sin(h * 12.0));
  crest = smoothstep(0.15, 0.5, crest);
  crest = 1.0 - abs(crest - 0.5) * 2.0;
  crest = smoothstep(0.2, 0.55, crest);

  float topFade = 1.0 - smoothstep(0.0, 0.8, drain * 2.8 - 0.6);
  float bottomFade = smoothstep(0.0, 0.15, vUv.y);
  float alpha = crest * topFade * bottomFade;

  vec3 col = mix(
    vec3(0.05, 0.0, 0.08),
    vec3(0.5, 0.2, 0.8),
    alpha
  );

  gl_FragColor = vec4(col, alpha * 0.55);
}
`;

function WaveSurface({ active }) {
  const mesh = useRef(null);
  const { viewport } = useThree();
  const drainRef = useRef(0);

  const uniformsRef = useRef({
    time: { value: 0 },
    resolution: { value: [viewport.width * 2, viewport.height * 2] },
    drain: { value: 0 },
  });

  useFrame((_state, delta) => {
    if (!mesh.current) return;
    const u = mesh.current.material.uniforms;
    if (active && drainRef.current < 1.0) {
      u.time.value += delta * 0.3;
      drainRef.current = Math.min(drainRef.current + delta * 0.035, 1.0);
      u.drain.value = drainRef.current;
    }
  });

  return (
    <mesh ref={mesh} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniformsRef.current}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export default function WaveBg() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 6] }}
        dpr={1}
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          failIfMajorPerformanceCaveat: false,
        }}
      >
        <WaveSurface active={active} />
      </Canvas>
    </div>
  );
}
