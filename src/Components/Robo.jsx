/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 robo.gltf --transform
Author: Josh_NC (https://sketchfab.com/SHE18226906_NC)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cyberpunk-robot-79369b97f0d74fd1a5c4fe824040cbce
Title: Cyberpunk Robot
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/robo-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.lambert5SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.lambert5SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.lambert5SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.lambert5SG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.lambert5SG} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.lambert5SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/robo-transformed.glb')
