import * as THREE from 'three'

const luminanceShader = {
  uniforms: {
    map: { value: null }
  },
  vertexShader: [
    'varying vec2 vUv;',
    'void main() {',
    'vUv = uv;',
    'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
    '}'
  ].join('\n'),
  fragmentShader: [
    'uniform sampler2D map;',
    'varying vec2 vUv;',

    'void main() {',
    'vec2 sampleUV = vUv;',
    ' vec4 color = texture2D(map, sampleUV, 0.0);',

    'gl_FragColor = vec4(color.xyz, 1.0);',
    '}'
  ].join('\n'),
  depthTest: false,
  blending: THREE.NoBlending
}

export default luminanceShader
