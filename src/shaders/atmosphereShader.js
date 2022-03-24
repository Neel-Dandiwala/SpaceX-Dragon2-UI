import * as THREE from 'three'

const atmosphereShader = {
  side: THREE.BackSide,
  // blending: THREE.AdditiveBlending,
  transparent: true,
  lights: true,
  uniforms: THREE.UniformsUtils.merge([
    THREE.UniformsLib['common'],
    THREE.UniformsLib['lights']
  ]),
  vertexShader: [
    'varying vec3 vViewPosition;',
    'varying vec3 vNormal;',
    'void main() {',
    THREE.ShaderChunk['beginnormal_vertex'],
    THREE.ShaderChunk['defaultnormal_vertex'],

    'vNormal = normalize( transformedNormal );',
    'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',
    'vViewPosition = -mvPosition.xyz;',
    'gl_Position = projectionMatrix * mvPosition;',
    '}'
  ].join('\n'),

  fragmentShader: [
    THREE.ShaderChunk['common'],
    THREE.ShaderChunk['bsdfs'],
    THREE.ShaderChunk['lights_pars_begin'],
    THREE.ShaderChunk['normal_pars_fragment'],
    THREE.ShaderChunk['lights_phong_pars_fragment'],

    'void main() {',
    'vec3 normal = normalize( -vNormal );',
    'vec3 viewPosition = normalize( vViewPosition );',
    '#if NUM_DIR_LIGHTS > 0',

    'vec3 dirDiffuse = vec3( 0.0 );',

    'for( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {',

    'vec4 lDirection = viewMatrix * vec4( directionalLights[i].direction, 0.0 );',
    'vec3 dirVector = normalize( lDirection.xyz );',
    'float dotProduct = dot( viewPosition, dirVector );',
    'dotProduct = 1.0 * max( dotProduct, 0.0 ) + (1.0 - max( -dot( normal, dirVector ), 0.0 ));',
    'dotProduct *= dotProduct;',
    'dirDiffuse += max( 0.5 * dotProduct, 0.0 ) * directionalLights[i].color;',
    '}',
    '#endif',

    //Fade out atmosphere at edge
    'float viewDot = abs(dot( normal, viewPosition ));',
    'viewDot = clamp( pow( viewDot + 0.6, 10.0 ), 0.0, 1.0);',

    'vec3 color = vec3( 0.05, 0.09, 0.13 ) * dirDiffuse;',
    'gl_FragColor = vec4( color, viewDot );',

    '}'
  ].join('\n')
}

export default atmosphereShader
